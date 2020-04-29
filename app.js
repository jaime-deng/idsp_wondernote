const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

module.exports = () => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());
    app.use("/styles", express.static(__dirname + "/styles"));

    // const users = []

    app.set('view engine', 'ejs');

    // gets login page
    const loginRouter = require('./routes/login-route');
    app.use("/", loginRouter)

    // gets signup page
    const signupRouter = require('./routes/signup-route');
    app.use(signupRouter)
    // app.get('/signup', function (req, res) {
    //     res.render('signup')
    // });

    // app.post("/signup", async (req, res) => {
    //     try {
    //         const hashedPassword = await bcrypt.hash(req.body.password, 10)

    //         users.push({
    //             id: Date.now().toString(),
    //             name: req.body.name,
    //             email: req.body.email,
    //             password: hashedPassword
    //         })
    //         res.redirect("login")
    //     } catch {
    //         res.redirect("signup")
    //     }
    //     console.log(users)
    // })


    // gets home page
    const indexRouter = require('./routes/index-route');
    app.use(indexRouter)

    return app;
}