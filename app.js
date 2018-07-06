let express = require('express');
let path = require('path');

// Init app
app = express();

// View engine setup
app.set('view', path.join(__dirname ,'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Test
app.get('/', (res, req) => {
    res.send('working..');
});

// Start the server
let port = 3000
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
