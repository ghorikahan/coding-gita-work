const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/Flipkart")
    .then(() => console.log("mongoDb connected Successfully"))
    .catch((err) => console.log("MongoDB connection Failed", err));



const userSchema = new mongoose.Schema({});
const user = mongoose.model("user", userSchema);

app.get("/users", async (req, res) => {
    try {
        const data = await user.find();
        res.json(data);
    }

    catch (error) {
        res.status(500).json({ error: error.message });
    }
})
app.get("/", (req, res) => {
    res.send("Express server is running");
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});