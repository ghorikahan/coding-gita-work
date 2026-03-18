const express = require("express");

const app = express();

app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];


app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const productId = products.find(s => s.id === id);

  if (!productId) {
    return res.status(404).json({ message: "Productid Not found" });
  }

  res.status(200).json(productId);
});


app.get("/products/category/:categoryName", (req, res) => {
  const name = req.params.categoryName;

  const categoryName = products.filter(
    p => p.category.toLowerCase() === name.toLowerCase()
  );

  res.status(200).json(categoryName);
});


app.post("/products", (req, res) => {
  const { name, category, price, stock, rating } = req.body;

  if (!name || !category || !price || !stock || !rating) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const productIndex = products.findIndex(product => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product's ID not found" }); 
  }

  const updatedProduct = {
    id: id,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };

  products[productIndex] = updatedProduct;

  res.status(200).json({
    message: "Product replaced successfully",
    product: updatedProduct
  });
});


app.put("/products/:id/stock", (req, res) => {
  const id = parseInt(req.params.id);
  const { stock } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (stock === undefined) {
    return res.status(400).json({ message: "Stock value is required" });
  }

  product.stock = stock;

  res.status(200).json({
    message: "Stock updated successfully",
    product: product
  });
});

app.put("/products/:id/price", (req, res) => {
  const id = parseInt(req.params.id);
  const { price } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (price === undefined) {
    return res.status(400).json({ message: "Price value is required" });
  }

  if (price < 0) {
    return res.status(400).json({ message: "Price cannot be negative" });
  }

  product.price = price;

  res.status(200).json({
    message: "Price updated successfully",
    product: product
  });
});


app.get("/", (req, res) => {
  res.send("Express is on port 3000");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});