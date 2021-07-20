const Product = require("../controllers/Product.controller");

module.exports = (app) => {
    app.get("/api/products", Product.findAll);
    app.get("/api/products/:id", Product.findOne);
    app.post("/api/products", Product.create);
    app.put("/api/products/:id", Product.findOneAndUpdate);
    app.delete("/api/products/:id", Product.deleteOne);
}