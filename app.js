let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let config = require('./config/database');
let bodyParser = require('body-parser');
let session = require('express-session')


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

// Set routers
let pages = require('./routes/pages');
let admin_pages = require('./routes/admin_pages')

app.use('/', pages);
app.use('/admin', admin_pages);

// Set public folder
app.use(express.static('public'));

// Body-parser - middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Express-Sessions - middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// Express-Validator - middleware
app.use(express.json());
app.post('/user', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    }).then(user => res.json(user));
});

// Express-Messages - middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// Start the server
let port = 3000
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
