const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const PORT = 5050

const app = express()

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.listen(PORT, () => console.log('hello'))

