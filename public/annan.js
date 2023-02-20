// Vet inte om denna behöver vara med för apin, vi får diskuter i grupp

var fs = require('fs')

// json file with the data
var data = fs.readFileSync('product.json')

var products = JSON.parse(data)
const express = require('express')
const app = express()

// To solve the cors issue
const cors = require('cors')

app.listen(process.env.PORT, () => console.log('Server Start at the Port'))

app.use(express.static('public'))
app.use(cors())

// when get request is made, alldata() is called
app.get('/products', alldata)

function alldata(request, response) {
  // Returns all information about the products
  response.send(products)
  console.log(products)
}
app.get('/products/:element/', searchProducts)

function searchProducts(request, response) {
  var word = request.params.products
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

  if (products[word]) {
    var reply = products[word]
  } else {
    var reply = {
      status: 'Not Found'
    }
  }

  response.send(reply)
}
