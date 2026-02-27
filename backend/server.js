require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const config = {
  server: 'localhost',
  port: 1433,
  database: 'ContactsDB',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    trustServerCertificate: true,
  }
};

app.get('/', (req, res) => {
  res.send('Backend is running! ✅');
});

app.post('/contact', async (req, res) => {
  const { name, phone } = req.body;
  try {
    await sql.connect(config);
    await sql.query`INSERT INTO Contacts (name, phone) VALUES (${name}, ${phone})`;
    res.json({ success: true, message: 'Contact saved!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});