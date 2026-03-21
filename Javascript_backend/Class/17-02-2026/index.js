const express = require("express");

const app = express();

app.use(express.json());

app.use(cors({
    origin:[
        "http://localhost:5173",
        "https://codinggita.com"
    ]
}));
const user = [
    { name: "Kahan", attendance: 80, id: 108243, total_sub: 14, bonus: 20 },
    { name: "Tapan", attendance: 80, id: 108244, total_sub: 14, bonus: 20 },
    { name: "Jivan", attendance: 80, id: 108245, total_sub: 14, bonus: 20 },
    { name: "Parv", attendance: 80, id: 108246, total_sub: 14, bonus: 20 }
];

app.get("/", (req, res) => {
    res.send("Express server is running");
});

app.get("/user/:id", (req, res) => {
    const userId = Number(req.params.id);
    const user = user.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
});


app.post("/user", (req, res) => {
    const newUser = {
        id: user.length + 1,
        name: req.body.name,
        role: req.body.role
    };

    user.push(newUser);

    res.status(201).json({
        message: "User created",
        user: newUser
    });
});

app.put("/user/:id", (req, res) => {
    const userId = Number(req.params.id);
    const index = user.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    user[index] = {
        id: userId,
        name: req.body.name,
        role: req.body.role
    };

    res.status(200).json({
        message: "User replaced",
        user: user[index]
    });
});

app.patch("/user/:uid", (req, res) => {
    const userId = Number(req.params.id);
    const user = user.find(u => u.id === userId);

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

app.delete("/user/:id", (req, res) => {
    const userId = Number(req.params.id);
    const index = user.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    user.splice(index, 1);

    res.status(204).end();
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});