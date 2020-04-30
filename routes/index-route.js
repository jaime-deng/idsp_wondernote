const express = require('express');
const router = express.Router()
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs')

// router.get('/home', checkAuthenticated,function (req, res) {
//     res.render('home', {name: "user"})
// });


// function checkAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next()
//     }
//     res.redirect("/")
// }
module.exports = router;