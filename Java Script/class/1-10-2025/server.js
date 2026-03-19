const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

let data = {
  companies: [],
  users: [],
  expenses: [],
  approvals: []
};

// Load persisted data if available
if (fs.existsSync("data.json")) {
  data = JSON.parse(fs.readFileSync("data.json"));
}

// Save data to file
function saveData() {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}

// API: Create company + admin on signup
app.post("/signup", (req, res) => {
  const { username, password, country, role } = req.body;
  const company = {
    id: Date.now(),
    name: username + " Co.",
    country,
    currency: "USD"
  };
  const user = {
    id: Date.now(),
    username,
    password,
    role: role || "Admin",
    companyId: company.id
  };
  data.companies.push(company);
  data.users.push(user);
  saveData();
  res.json({ success: true, user, company });
});

// API: Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = data.users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  res.json({ success: true, user });
});

// API: Submit expense (Employee)
app.post("/expenses", (req, res) => {
  const expense = { id: Date.now(), status: "Pending", ...req.body };
  data.expenses.push(expense);
  saveData();
  res.json({ success: true, expense });
});

// API: Get expenses by user
app.get("/expenses/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const expenses = data.expenses.filter((e) => e.userId === userId);
  res.json(expenses);
});

// API: Get expenses for approval (Manager/Admin)
app.get("/pending/:companyId", (req, res) => {
  const companyId = parseInt(req.params.companyId);
  const expenses = data.expenses.filter(
    (e) => e.companyId === companyId && e.status === "Pending"
  );
  res.json(expenses);
});

// API: Approve/Reject expense
app.post("/approve", (req, res) => {
  const { expenseId, status, approverId, comments } = req.body;
  const expense = data.expenses.find((e) => e.id === expenseId);
  if (expense) {
    expense.status = status;
    expense.comments = comments;
    expense.approverId = approverId;
    saveData();
    return res.json({ success: true, expense });
  }
  res.status(404).json({ error: "Expense not found" });
});

app.listen(3000, () =>
  console.log("✅ Server running at http://localhost:3000")
);
