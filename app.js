let express = require("express");
let todocontroller = require("./controllers/todocontroller");

let app = express();
app.set("view engine", "ejs");
app.use('/assets', express.static('public/assets'));

app.listen(3000);
console.log("listening on localhost:3000");


todocontroller(app);