const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Express server is running on 3000 port");
});

mongoose.connect("mongodb://localhost:27017/taskDB")
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("MongoDB failed to connect : ", error))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
    try {
        const data = await User.find({});
        res.status(200).json(data);
    } catch (err) {
        console.log({ error: err.message });
    }
})

app.get("/users/:id", async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        console.log({ error: err.message });
    }
})

app.post("/addUser", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.status(201).json({
            message: "User added",
            data: user
        })
    } catch (err) {
        console.log({ error: err.message });
    }
})

app.post("/addUsers", async (req, res) => {
    try {
        const users = await User.insertMany(req.body);

    res.status(201).json({
        message: "Users added",
        data: users
    })
    } catch (err) {
        console.log({error:err.message});
    }
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});