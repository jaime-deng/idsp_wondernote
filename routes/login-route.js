const express = require('express');
const router = express.Router()
const app = express()
app.set('view engine', 'ejs')

router.get('/', function (req, res) {
    res.render('login')
});

module.exports = router;