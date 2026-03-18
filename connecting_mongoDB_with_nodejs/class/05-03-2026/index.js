const express = require("express");
const mongoose = require("mongoose");
const { type } = require("node:os");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://sahoopriyabrata:Sahoo%40123@cluster0.l5cbiaz.mongodb.net/?appName=Cluster0");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:4
    }
});

const User = mongoose.model("User", userSchema);

// 1. GET route to get all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// 2. GET route to get a single user by ID
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// 3. POST route to create one user
app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// 4. POST route to create multiple users
app.post("/users/bulk", async (req, res) => {
    try {
        const users = await User.insertMany(req.body);
        res.status(201).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});

// 5. DELETE route to delete a user by ID
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// 6. PUT route to update a user by ID (replaces the whole document conceptually, though Mongoose update treats it as a partial update unless carefully managed; typically we just use findByIdAndUpdate)
app.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, overwrite: true, runValidators: true });
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// 7. PATCH route to partially update a user by ID
app.patch("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) return res.status(404).send("User not found");
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(4000, () => {
    console.log("Server started on port 4000");
});