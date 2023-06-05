const express = require('express');
const route = express.Router()


const controller = require('../controller/controller');


route.post('/api/products', controller.createProduct);
route.get('/api/products/list', controller.getProduct);
route.get('/api/products/:id', controller.find);



module.exports = route