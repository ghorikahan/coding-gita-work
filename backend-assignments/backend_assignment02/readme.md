# 🛒 Products API (Express.js)

## 📌 Project Title
Products REST API using Express.js

---

## 🎯 Objective
The objective of this project is to build a RESTful API using Express.js to manage products.  
It supports CRUD operations and additional update routes for stock and price management.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- JSON (In-memory data storage)

---

## 📦 Implemented Routes

### 1️⃣ Get All Products
GET /products

Description:
Returns all available products.

---

### 2️⃣ Get Product By ID
GET /products/:id

Example:
GET /products/1

Description:
Returns a single product by its ID.

---

### 3️⃣ Get Products By Category
GET /products/category/:categoryName

Example:
GET /products/category/Electronics

Description:
Returns all products matching a specific category.

---

### 4️⃣ Add New Product
POST /products

Body (JSON):
{
  "name": "Keyboard",
  "category": "Electronics",
  "price": 1200,
  "stock": 15,
  "rating": 4.2
}

Description:
Creates a new product.

---

### 5️⃣ Replace Product (Full Update)
PUT /products/:id

Example:
PUT /products/1

Body (JSON):
{
  "name": "Updated Mouse",
  "category": "Electronics",
  "price": 899,
  "stock": 20,
  "rating": 4.5
}

Description:
Replaces the entire product object.

---

### 6️⃣ Update Product Stock
PUT /products/:id/stock

Example:
PUT /products/1/stock

Body:
{
  "stock": 30
}

Description:
Updates only the stock value of a product.

---

### 7️⃣ Update Product Price
PUT /products/:id/price

Example:
PUT /products/1/price

Body:
{
  "price": 999
}

Description:
Updates only the price of a product.

---

### 8️⃣ Root Route
GET /

Description:
Checks if the server is running.

---

## 🚀 Steps to Run Locally

1️⃣ Clone the repository

git clone <your-repository-link>

2️⃣ Navigate into the project folder

cd products-api

3️⃣ Install dependencies

npm install

4️⃣ Start the server

node server.js

OR (if using nodemon)

npx nodemon server.js

5️⃣ Open in browser or Postman

http://localhost:3000

---

## 🌐 Sample API URLs

- http://localhost:3000/products
- http://localhost:3000/products/1
- http://localhost:3000/products/category/Electronics

---

## 📌 Notes
- Data is stored in memory (array).
- Data will reset when server restarts.
- No database is connected.

---

## 👨‍💻 Author
Your Name