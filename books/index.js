const express = require('express');
const crypto = require('crypto');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const books = [];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const { name } = req.body;

  const newUniqueId = crypto.randomBytes(16).toString('hex');

  const newBook = { id: newUniqueId, name };
  books.push(newBook);

  res.json(newBook);
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
