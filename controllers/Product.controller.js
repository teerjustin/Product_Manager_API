const Product = require("../models/Product")

console.log("Product Controller")
module.exports = {
    //read ALL --------------------------------------------
    findAll: (req, res) => {
        Product.find()
                .then( allProducts => {
                    console.log("allProducts: ", allProducts);
                    res.json(allProducts);
                })
                .catch( err => {
                    console.log("read all err: ", err);
                    res.json(err);
                })
    },
    // READ ONE --------------------------------------------
    findOne: (req, res) => {
        // Product.findById(req.params.id)
        console.log("I am finding this object")
        Product.findOne({_id: req.params.id})
                .then( product => {
                    console.log("product: ", product);
                    res.json(product);
                })
                .catch( err => {
                    console.log("ERROR", err);
                    res.json(err);
                })
    },

    //CREATE -------------------------------------------------------------------
    create: (req, res) => {
        Product.create(req.body)
                .then(newProduct => {
                    console.log("created a new product: ", newProduct);
                    res.json(newProduct);
                })
                .catch(err => {
                    console.log("ERROR", err);
                    res.json(err);
                })
    },
    
    //DELETE ----------------------------------------------------------------
    deleteOne: (req, res) => {
        console.log("This is getting the req params id" , req.params.id);
        Product.deleteOne({_id: req.params.id})
                .then( result => res.json({result: result}))
                .catch( err => res.json({message: "ERROR delete", error: err}))
    },

    //UPDATE ------------------------------------------------------------
    findOneAndUpdate: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
                .then( updatedProduct => {
                    console.log("updatedProduct: ", updatedProduct);
                    res.json(updatedProduct);
                })
                .catch(err => {
                    console.log("ERROR", err);
                    res.json(err);
                })
    },

}