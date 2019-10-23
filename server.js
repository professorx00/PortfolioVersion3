const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use("/", require("./routes/index.js"));

app.listen(PORT, () => {
  console.log("App listening on port 3000");
});