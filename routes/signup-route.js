const express = require('express');
const router = express.Router()
const app = express()
app.set('view engine', 'ejs')

router.get('/signup', function (req, res) {
    res.render('signup')
});

module.exports = router;