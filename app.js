if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const passport = require("passport")
const flash = require("express-flash")
const session = require('express-session')
const bcrypt = require("bcrypt")
const users = []

module.exports = () => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());
    app.use(flash())
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }))
    app.use(passport.initialize())
    app.use(passport.initialize())

    app.use("/styles", express.static(__dirname + "/styles"));

    // passport
    const initializerPassport = require("./passport-config")
    initializerPassport(passport, 
        email => users.find(user => user.email === email)
    )

    app.post("/", passport.authenticate("local", {
        successRedirect: "/home",
        failureRedirect: "/",
        failureFlash: true
    }))
    


    app.set('view engine', 'ejs');

    // gets login page
    const loginRouter = require('./routes/login-route');
    app.use("/", loginRouter)

    // gets signup page
    // const users = []
    const signupRouter = require('./routes/signup-route');
    app.use(signupRouter)
    app.post("/signup",
    // body("confirmPassword").custom((value, { req }) => {
    //     if (value !== req.body.password) {
    //         throw new Error("Password confirmation does not match password");
    //     }
    
    //     // Indicates the success of this synchronous custom validator
    //     return true;
    // }),
     async (req, res) => {
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

    

    // gets home page
    const indexRouter = require('./routes/index-route');
    app.use(indexRouter)

    return app;
}