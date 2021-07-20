const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must have a name"],
        minLength: [3, "Name must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "This product must have a price"],
        minLength: [1, "Must have at least one number"],
    },
    description: {
        type: String,
        required: [true, "This product must have a description"],
        minLength: [5, "This product must have a short description"]
    }
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;