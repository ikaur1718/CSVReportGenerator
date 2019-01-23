const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  console.log('I am in the get');
  res.send("Hello");
});

const PORT = 9000;

app.listen(PORT, () =>{
  console.log(`listening on port ${PORT}`)
})