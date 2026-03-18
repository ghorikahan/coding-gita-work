const express  = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json()); 

mongoose.connect("mongodb://localhost:27017/CG1")
.then(()=> console.log("database connected successfully"))
.catch((err)=> console.log(err))

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/get-users/:id",async (req,res)=>{
    try{
        const user = await user.findById();
    }
});

app.listen(3000,()=>{
    console.log("server is running successfully");
});