// import model
const {Product} = require("../models/product.model")
const { request, response } = require("express");

// tests that our vackend and front are connected
module.exports.testAPI = (req, res) => {
    res.json("backend message")
}

// gets all products
module.exports.allProducts = (req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}

// get one 
module.exports.oneProduct = (req,res) => {
    Product.findOne({_id: req.params.id})
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

// create 
module.exports.createProduct = (req,res) => {
    Product.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(err => res.json(err))
}

// update
module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(product => res.json(product))
    .catch(err => res.json(err))
}

// deletes
module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}