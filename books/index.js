const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const mysql = require('mysql2');
const keys = require('./keys');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: keys.mysqlHost,
  port: keys.mysqlPort,
  user: keys.mysqlUser,
  password: keys.mysqlPassword,
  database: keys.mysqlDatabase,
});

db.connect((err) => {
  if (err) throw err;

  db.query('CREATE TABLE IF NOT EXISTS books (id VARCHAR(60) PRIMARY KEY, name VARCHAR(120))');
});

app.get('/books', async (req, res) => {
  try {
    const [books] = await db.promise().query('SELECT * FROM books;');
    res.json(books);
  } catch (error) {
    throw error;
  }
});

app.post('/books', async (req, res) => {
  const { name } = req.body;

  const newUniqueId = crypto.randomBytes(16).toString('hex');

  const sql = `INSERT INTO books VALUES('${newUniqueId}', '${name}');`;

  await db.promise().query(sql);

  res.json({ id: newUniqueId, name });
});

app.listen(8000, () => {
  console.log('v3');
  console.log('Listening on port 8000');
});
