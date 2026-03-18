const express = require("express");
const mongoose = require("mongoose");

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


app.get("/get-product", async (req, res) => {
   try {

      const product = await Product.find()
      if (!product) {
         return res.status(404).send("Prodcut Not Found")
      }
      res.json(product)

   } catch (error) {
      res.status(404).send(error)
   }
})


//  Find By Id 
// Query Parameters we will continue 
app.get("/product/:id", async (req, res) => {
   try {
      const ProductId = req.params.id;
      const product = await Product.findById(ProductId);
      if (!product) {
         return res.status(404).send("Prodcut Not Found")
      }
      res.json(product)

   } catch (error) {
      res.status(404).send(error)
   }
})



//  Query Parmeter 

// Brand wise 
app.get("/brandproducts", async (req, res) => {
   try {
      const { category, brand } = req.query;

      const filter = {}

      if (category) {
         filter.category = category
      }

      if (brand) {
         filter.brand = brand
      }

      console.log(brand)
      const products = await Product.find(filter)

      if (!products) {
         return res.status(404).send("This category not Found")
      }

      res.json(products)

   } catch (error) {
      res.status(404).send(error)
   }
})




// sortting thing 
app.get("/sortedproduct", async (req, res) => {

   try {

      const Price = req.query.Price;   ///  Price   
      const sortePrice = {};

      if (Price === "asc") {
         sortePrice.Price = 1
      }

      if (Price === "desc") {
         sortePrice.Price = -1
      }

      const products = await Product.find().sort(sortePrice)

      res.status(201).json(products)

   } catch (error) {
      res.status(404).send(error)
   }
});

app.get("/products-pagination", async (req, res) => {
   try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;

      const skip = (page - 1) * limit;
      const product = await product.find().skip(skip).limit(limit);
z
      res.status(201).json(product);
   } catch (error) {
      res.status(404).send(error);
   }
})



// Start Server 
app.listen(PORT, () => {
   console.log("Server running on port", PORT)
})
