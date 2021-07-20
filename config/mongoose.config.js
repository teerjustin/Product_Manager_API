const mongoose = require("mongoose");
const DB = "product_manager_db_2"

mongoose.connect("mongodb://localhost/" + DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
} )
.then( () => console.log("DB connected at product_manager_db_2"))
.catch( (err) => console.log("Something went wrong", err));