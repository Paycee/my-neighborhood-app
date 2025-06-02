# Neighborhood Info App

This is a Node.js + Express project that presents the details of a neighborhood in my hometown.  
It connects to a MySQL database to display various information like streets, local businesses, types of transport, and more.  
There’s also a fun internal page where you can submit a “visa” request to enter our neighborhood — this part is just an inside joke because we are a bit isolated from the rest of the city.

> **Note:** This project was developed in Serbian as required — apologies to international readers!

## Features

✅ View streets, local businesses, types of public transport, banks, schools, healthcare, and more  
✅ Separate pages for cafes, restaurants, supermarkets, barbers, and betting shops  
✅ Submit a playful “visa” application form to enter the neighborhood  
✅ Backend API built with Express and MySQL  
✅ CORS enabled for frontend-backend communication  

## Technologies Used

- Backend: Node.js, Express.js, MySQL, CORS  
- Database: MySQL with structured tables for streets, businesses, services, and visa submissions  
- Frontend (in `client` folder): HTML, CSS, JavaScript (simple pages interacting with backend)

## How to Run

1️⃣ Navigate to the `server` folder:
```bash
cd server
```

2️⃣ Install backend dependencies:
```bash
npm install
```

3️⃣ Start the server:
```bash
node server.js
```

The backend will run on `http://localhost:5018`.

Make sure your MySQL database is running and matches the expected schema.

## About

This project was created as part of a school project to present local neighborhood data.  
While most features show real data, the visa submission form is a humorous internal feature.

---

Thank you for checking out the project!  
Feel free to connect if you have any questions or suggestions.
