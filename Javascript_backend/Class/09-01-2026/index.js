const express = require("express");
const app = express();

// GET , POST , PUT , PATCH , DELETE , HEAD , OPTIONS

const users = [
    { id: 1, name: "Arjun", role: "student" },
    { id: 2, name: "Priyesha", role: "mentor" }
];





app.get("/", (req, res) => {
    res.send("home page");
    res.status(200);
});


// app.get("/user-experience", (req, res) => {
//     // res.status(205).send("status");    
//     res.status(205).json({
//         "name": "ghori kahan n"
//     });
// });

app.get("/user", (req, res) => {
    res.status(400).json(users);
})




app.listen(250, () => {
    console.log("Server started on port 250");
});