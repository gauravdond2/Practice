const express = require('express');
const path = require('path');
const override = require('method-override');
const {v4:uuidv4} = require('uuid');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(override('_method'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});