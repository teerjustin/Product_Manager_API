const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

//config middle
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//require files
require("./config/mongoose.config")
const Routes = require("./routes/routes");
Routes(app);


app.listen(PORT, () => console.log(`>>>SERVER IS UP ON ${PORT}<<<`))