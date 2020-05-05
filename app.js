// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config()
// }
require("dotenv").config()
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require("method-override")


module.exports = () => {

    app.use("/styles", express.static(__dirname + "/styles"));

    // // passport
    const initializePassport = require('./passport-config')
    initializePassport(
        passport,
        email => users.find(user => user.email === email),
        id => users.find(user => user.id === id)
    )


    // mongo 
    // const mongoose = require("mongoose")
    // mongoose.connect(process.env.DATABASE_URL, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false
    // })

 

    // const db = mongoose.connection
    // db.on("error", error => console.error(error))
    // db.once("open", () => console.log("Connected to mongo: " + mongoose.version))

    // app
    const users = []

    app.set('view engine', 'ejs')
    app.set("views", __dirname + "/views")
    app.use(express.urlencoded({ extended: false }))
    app.use(flash())
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(methodOverride('_method'))

    app.get('/home', checkAuthenticated, (req, res) => {
        res.render('home', { name: req.user.name })
    })

    app.get('/', checkNotAuthenticated, (req, res) => {
        res.render('login')
    })

    app.post('/', checkNotAuthenticated, passport.authenticate('local', {
        successRedirect: '/home',
        failureRedirect: '/',
        failureFlash: true
    }))

    app.get('/signup', checkNotAuthenticated, (req, res) => {
        res.render('signup')
    })

    app.post('/signup', checkNotAuthenticated, async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            users.push({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            })
            res.redirect('/')
        } catch {
            res.redirect('/signup')
        }
    })

    app.delete('/logout', (req, res) => {
        req.logOut()
        res.redirect('/')
    })

    function checkAuthenticated(req, res, next) {
        if (req.user) {
            next();
        } else {
            res.redirect('/');
        }
    }

    function checkNotAuthenticated(req, res, next) {
        if (!req.user) {
            next();
        } else {
            res.redirect('/home');
        }
    }


    // console.log(req.users.name)
    return app;
}