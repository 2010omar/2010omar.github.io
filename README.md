# omarahmed.github.io

# My Portfolio Website

A full stack web portfolio built with HTML, CSS, JavaScript, Node.js, and SQL Server.

## 🌐 Live Site
https://omarahmed.github.io

## 📁 Project Structure
```
omarahmed.github.io/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── style.css
└── backend/
    ├── server.js
    ├── package.json
    └── .env (not on GitHub - contains password)
```

## 🚀 How to Run the Backend

### 1 - Make sure SQL Server is running
- Open services.msc
- Start SQL Server (SQLEXPRESS)

### 2 - Create the .env file inside /backend
```
DB_PASSWORD=yourpassword
```

### 3 - Install dependencies
```bash
cd backend
npm install
```

### 4 - Start the server
```bash
node server.js
```
Server runs on http://localhost:3000

## 🗄️ Database Setup (first time only)
Open SSMS and run:
```sql
CREATE DATABASE ContactsDB;
GO
USE ContactsDB;
GO
CREATE TABLE Contacts (
  id INT IDENTITY(1,1) PRIMARY KEY,
  name NVARCHAR(100),
  phone NVARCHAR(20),
  created_at DATETIME DEFAULT GETDATE()
);
GO
```

## 📦 Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: SQL Server (SSMS)
- Hosting: GitHub Pages


