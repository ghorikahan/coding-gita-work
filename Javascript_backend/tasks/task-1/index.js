const express = require("express");
const app = express();

app.use(express.json()); // IMPORTANT for POST requests

let arr = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: { rate: 3.9, count: 120 }
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: "Cotton Jacket",
        price: 55.99,
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        rating: { rate: 4.7, count: 500 }
    }
];


app.get("/all", (req, res) => {
    res.status(200).json(arr);
});

app.get("/products/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = arr.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);   
});



app.post("/product", (req, res) => {
    const newProduct = req.body;

    newProduct.id = arr.length + 1; // simple id generation
    arr.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

app.get("/category/:type", (req, res) => {
  const type = req.params.type;

  const filteredProducts = arr.filter(
    (product) => product.category.toLowerCase() === type.toLowerCase()
  );

  res.json(filteredProducts);
});

app.post("/products", (req, res) => {
  const newProducts = req.body;

  // check if body is an array
  if (!Array.isArray(newProducts)) {
    return res.status(400).json({ message: "Send an array of products" });
  }

  arr.push(...newProducts);

  res.status(201).json({
    message: "Products added successfully",
    totalProducts: arr.length,
    data: arr
  });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
