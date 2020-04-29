const express = require('express');
const router = express.Router()
const app = express()
app.set('view engine', 'ejs')

router.get('/home', function (req, res) {
    res.render('home', {name: "Jaime"})
});

module.exports = router;