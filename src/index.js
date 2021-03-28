const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');
const port = 3000;

//config handlebars
app.engine('hbs',handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => {
    console.log("App listening on port 3000")
})

app.get("/", (req, res) => {
    res.render('home')
})