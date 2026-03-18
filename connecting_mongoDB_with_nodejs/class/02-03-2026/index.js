// task-1 (creating a server)..

const express = require("express");
const mongoose = require("mongoose");
const { stringify } = require("node:querystring");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/taskDB")
    .then(() => console.log("database created"))
    .catch((err) => console.log(err))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("user", userSchema);


app.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/addUsers", async (req,res)=>{
    try{
       const user = new User(req.body); 
       await user.save();
       res.send("User created ");
    }
    catch(error){
        res.status(500).json({ error: error.message});
    }
});

app.listen(3000, () => {
    console.log("server is running on the port 3000");
})