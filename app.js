const express = require('express');
const path = require('path'); 

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err))

const app = express();

// Handlebars Middleware
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static("public"));

// Index route
app.get('/', (req, res) => res.render('home'));

// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));