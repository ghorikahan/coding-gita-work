const express = require("express");
const app = express();
app.use(express.json());
// GET , POST , PUT , PATCH , DELETE , HEAD , OPTIONS

const users = [
    { id: 1, name: "Arjun", role: "student" },
    { id: 2, name: "Priyesha", role: "mentor" },
    { id: 3, name: "Kahan", role: "student" },
    { id: 4, name: "Tapan", role: "student" }
];





app.get("/", (req, res) => {
    res.send("home page");
    res.status(200);
});

app.get("/user", (req, res) => {
    res.status(200).json(users);
});

// app.get("/user-experience", (req, res) => {
//     // res.status(205).send("status");    
//     res.status(205).json({
//         "name": "ghori kahan n"
//     });
// });


// app.get("/user/:unique_value", (req, res) => {
//     var id = Number(req.params.unique_value);
//     var user = user.find(u => u.id === id);

//     if (!user) {
//         return res.status(404).json({ message: "user not found" });
//     }

//     res.status(201).json(users[id]);
// })


// app.post("/user", (req, res) => {
//     const newUser = {
//         id: users.length + 1,
//         name: req.body.name,
//         role: req.body.role
//     };

//     console.log(req.body);

//     users.push(newUser);

//     res.status(201).json({
//         message: "User created",
//         user: newUser
//     });
// });

// app.put("/users/:id", (req, res) => {
//   const userId = Number(req.params.id);
//   const index = users.findIndex(u => u.id === userId);

//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users[index] = {
//     id: userId,
//     name: req.body.name,
//     role: req.body.role
//   };

//   res.status(200).json({
//     message: "User replaced",
//     user: users[index]
//   });
// });


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


app.listen(250, () => {
    console.log("Server started on port 250");
});