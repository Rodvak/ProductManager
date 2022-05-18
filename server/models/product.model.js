const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title has to be at least 2 characters long"]
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Must have a price"]
    },

    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description has to be at least 5 characters long"]
    }

}, {timestamps: true})

// creating Product schema and calling it Product
module.exports.Product = mongoose.model('Product', ProductSchema)