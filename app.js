const express = require('express');
const app = express();

require('dotenv').config();
const api = process.env.API_URL;
const bodyParser = require('body-parser');
//https://localhost:3000/api/iba/i/

//middleware
app.use(bodyParser.json());



app.get(`${api}products`, (req, res) => {
    const products ={
        name: 'Iphone 14',
        price: 1000,
        description: 'The latest iPhone model with advanced features.',
        image: 'https://example.com/iphone14.jpg'
    }
    res.json(products);
});  

app.post(`${api}NewProduct`, (req, res) => {
  const NewProduct = req.body;
  console.log('New product added:', NewProduct);
  res.json(NewProduct);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});