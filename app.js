require('dotenv').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');

const connectDB = require('./server/config/db');

const app = express();
const PORT = 4000 || process.env.PORT;

connectDB();
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
