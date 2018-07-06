let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.render('index',{
        title: 'Admin',
        heading: "Admin, area"
    });
});

router.get('/test', (req, res) => {
    res.render('index',{
        title: 'Admin',
        heading: "Admin, area - Test"
    });
});

module.exports = router;