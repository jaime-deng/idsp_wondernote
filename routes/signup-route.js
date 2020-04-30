const express = require('express');
const router = express.Router()
const app = express()
// const bcrypt = require("bcrypt")
// const { body } = require("express-validator");
app.set('view engine', 'ejs')
// const users = []


router.get('/signup', function (req, res) {
    res.render('signup')
});

// router.post("/signup",
// // body("confirmPassword").custom((value, { req }) => {
// //     if (value !== req.body.password) {
// //         throw new Error("Password confirmation does not match password");
// //     }

// //     // Indicates the success of this synchronous custom validator
// //     return true;
// // }),
//  async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)

//         users.push({
//             id: Date.now().toString(),
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword
//         })
//         res.redirect("/")
//     } catch {
//         res.redirect("/signup")
//     }
//     console.log(users)
// })

module.exports = router