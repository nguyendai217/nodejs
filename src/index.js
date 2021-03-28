const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const port = 3000;
const route = require("./routes/index");

//config handlebars
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("views", path.join(__dirname, "resources/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
route(app);

app.listen(port, () => {
  console.log("App listening on port 3000");
});
