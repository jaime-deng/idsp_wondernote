const express = require('express');
const router = express.Router()
const app = express()
const bcrypt = require("bcrypt")
app.set('view engine', 'ejs')
const users = []

router.get('/signup', function (req, res) {
    res.render('signup')
});

router.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect("/")
    } catch {
        res.redirect("/signup")
    }
    console.log(users)
})

module.exports = router;