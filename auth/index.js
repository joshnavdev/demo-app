const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
  console.log(req.body);
  res.status(200).json({ data: 'Ok' });
});

app.listen(8001, () => {
  console.log('Listening on port 8001');
});
