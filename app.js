let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let config = require('./config/database')

// Connect to db
mongoose.connect(config.database);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected.');
});

// Init app
app = express();

// View engine setup
app.set('views', path.join(__dirname ,'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static('public'));

// Test
app.get('/', (req, res) => {
    res.render('index',{
        title: 'Home',
        heading: "Hello there"
    });
});

// Start the server
let port = 3000
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
