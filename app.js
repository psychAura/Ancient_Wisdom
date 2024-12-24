require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();
const PORT = 4000 || process.env.PORT;

// MIDDLEWARES

app.use(express.static('public'));

//Template engine 
app.use(expressEjsLayouts)
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//routes
app.use('/', require('./server/routes/main'))

//
app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`)
}   
)
