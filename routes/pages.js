let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.render('index',{
        title: 'Home',
        heading: "Hello there"
    });
});

module.exports = router;