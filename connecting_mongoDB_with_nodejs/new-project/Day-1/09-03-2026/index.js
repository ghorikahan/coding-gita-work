const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

const PORT = 5000



// Connect with Database 
mongoose.connect("mongodb://127.0.0.1:27017/backendClassDB")
    .then(() => {
        console.log("MongoDB Connected Successfully")
    })
    .catch((err) => {
        console.log("Database connection error", err)
    })



// Create Schema 
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    }
})

// Create Mdoel 
const Product = mongoose.model("Product", ProductSchema);   // collection 



//  Create a Post Route to insert one Value  

app.post("/products", async (req, res) => {

    const { title, Price, category, brand } = req.body

    const ProductData = {
        title, Price, category, brand
    }
    try {
        const NewProduct = new Product(ProductData);
        await NewProduct.save();
        res.status(200).json(NewProduct)
    } catch (error) {
        res.status(404).send(error)
    }
})



//  Find By Id 
// Query Parameters we will continue 





// Start Server 
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})