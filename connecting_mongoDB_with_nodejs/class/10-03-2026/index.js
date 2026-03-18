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

app.get("/brandproducts",async (req,res)=>{
    try {
        c
    } catch (error) {
        
    }
})


app.get("/products",(req,res)=>{
    try {
        const {category,brand} = req.query;
        console.log(brand);
        if(!category){

        }

        
    } catch (err) {
        
    }
})

app.listen(300, () => {
    console.log("Server started on port 4000");
});