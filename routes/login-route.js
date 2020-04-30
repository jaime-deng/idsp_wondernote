const express = require('express');
const router = express.Router()
const app = express()
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

app.set('view engine', 'ejs')

router.get('/', function (req, res) {
    res.render('login')
});

// router.post("/", passport.authenticate("local", {
//     successRedirect: "/home",
//     failureRedirect: "/",
//     failureFlash: true
// }))


module.exports = router;