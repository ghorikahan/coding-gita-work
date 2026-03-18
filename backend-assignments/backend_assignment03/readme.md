📊 State Statistics Management API
A fully structured RESTful API built using Node.js and Express.js to manage statistical data of Indian states through an in-memory JSON array.
This project demonstrates complete REST architecture implementation including dynamic routing, proper HTTP status code usage, full and partial updates, and advanced deletion logic — without using any database or external validation libraries.


📌 Project Overview

This API performs complete CRUD operations while strictly following RESTful principles. All operations dynamically modify the in-memory array during runtime.
Key Concepts Demonstrated

RESTful route design

Proper HTTP method implementation

Dynamic route parameter handling

Array-based data manipulation

Correct HTTP status code usage

Difference between PUT (full replacement) and PATCH (partial update)

Business-rule-based deletion logic

Server-side aggregation logic

🛠️ Technology Stack

Technology	Purpose
Node.js	JavaScript Runtime
Express.js	Web Framework
CORS	Cross-Origin Resource Sharing
JavaScript (ES6)	Application Logic


📂 API Endpoints

🟢 GET Routes

| Method | Endpoint              | Description                         | Status Code |
| ------ | --------------------- | ----------------------------------- | ----------- |
| GET    | `/states`             | Retrieve all states                 | 200         |
| GET    | `/states/:id`         | Retrieve a single state by ID       | 200 / 404   |
| GET    | `/states/highest-gdp` | Retrieve the state with highest GDP | 200         |


🔵 POST Route

| Method | Endpoint  | Description                            | Status Code |
| ------ | --------- | -------------------------------------- | ----------- |
| POST   | `/states` | Create a new state (Auto-generated ID) | 201         |


🟡 PUT Routes (Full Replacement)
| Method | Endpoint                 | Description                             | Status Code |
| ------ | ------------------------ | --------------------------------------- | ----------- |
| PUT    | `/states/:id`            | Replace entire state record (except ID) | 200 / 404   |
| PUT    | `/states/:id/budget`     | Replace `annualBudget` value            | 200 / 404   |
| PUT    | `/states/:id/population` | Replace `population` value              | 200 / 404   |


🟠 PATCH Routes (Partial Update)
| Method | Endpoint               | Description                 | Status Code |
| ------ | ---------------------- | --------------------------- | ----------- |
| PATCH  | `/states/:id/literacy` | Update `literacyRate` only  | 200 / 404   |
| PATCH  | `/states/:id/gdp`      | Update `gdp` only           | 200 / 404   |
| PATCH  | `/states/:id`          | Update only provided fields | 200 / 404   |


🔴 DELETE Routes

| Method | Endpoint                           | Description                             | Status Code |
| ------ | ---------------------------------- | --------------------------------------- | ----------- |
| DELETE | `/states/:id`                      | Delete state by ID                      | 204 / 404   |
| DELETE | `/states/name/:stateName`          | Delete state by name (case-insensitive) | 204         |
| DELETE | `/states/low-literacy/:percentage` | Delete states below literacy threshold  | 200         |



📦 Data Model

Each state follows this structure:

{ "id": 1, "name": "Gujarat", "population": 63872399, "literacyRate": 78.03, "annualBudget": 243965, "gdp": 21000000 }


Field Description

Field	Type	Description
id	Number	Unique identifier
name	String	State name
population	Number	Total population
literacyRate	Number	Literacy percentage
annualBudget	Number	Annual budget (in crores)
gdp	Number	State GDP (in crores)


📡 HTTP Status Codes Used

Status Code	Meaning
200	Successful request
201	Resource created successfully
204	Resource deleted successfully (No Content)
404	Resource not found


▶️ Installation & Setup

npm install node server.js
Server runs at: http://localhost:3000


🧪 Testing

The API can be tested using:

Postman

Thunder Client

REST Client
All routes accept and return data in JSON format.


🌐 Deployment Deployed on Render (Public API Available)

🎯 Learning Outcomes

Complete REST API Development

Dynamic Route Parameters

Array-Based Data Mutation

Server-Side Aggregation Logic

PUT vs PATCH Semantic Difference

HTTP Status Code Best Practices

Backend Development Fundamentals