const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

module.exports = () => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());
    app.use("/styles", express.static(__dirname + "/styles"));

    app.set('view engine', 'ejs');

    // gets login page
    const loginRouter = require('./routes/login-route');
    app.use("/", loginRouter)

    // gets signup page
    const signupRouter = require('./routes/signup-route');
    app.use(signupRouter)

    // gets signup page
    const indexRouter = require('./routes/index-route');
    app.use(indexRouter)

    return app;
}