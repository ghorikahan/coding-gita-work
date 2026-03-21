const express = require("express");
const app = express();

const users = [
    { id: 1, name: "Arjun", role: "student" },
    { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/users", (req, res) => {
    res.status(200).json(users);
});

app.use(express.json());

app.put("/users/:id", (req, res) => {
    const userId = Number(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[index] = {
        id: userId,
        name: req.body.name,
        role: req.body.role,
        age: req.body.age
    };

    res.status(200).json({
        message: "User replaced",
        user: users[index]
    });
});

app.patch("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name) user.name = req.body.name;
  if (req.body.role) user.role = req.body.role;

  res.status(200).json({
    message: "User updated",
    user
  });
});

app.delete("/users/:id", (req, res) => {
    const userId = Number(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    res.status(204).end();
});

app.delete("/users/:name", (req, res) => {
    const userName = (req.params.name);
    const Name = users.findName(u => u.name === userName);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(Name);

    res.status(204).end();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
