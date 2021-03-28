const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const port = 3000;
app.engine('handlebars',handlebars());
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

app.listen(3000, () => {
    console.log("App listening on port 3000")
})

app.get("/", (req, res) => {
    res.render('home')
})