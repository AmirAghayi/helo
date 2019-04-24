const express = require('express');
const passport = require ('passport');


const AuthRouter = express.Router();

AuthRouter.post('/register', passport.authenticate('register'), (req, res) => {
    res.send ({ message: 'Successfully registered', user: req.user });
});


AuthRouter.post(
    '/login',
    passport.authenticate('login', { failWithError: true }),
    (req, res) => {
     res.send({ message: 'Successfuly logged in ', user: req.user });
    },
    (err, req, res, next) => {
        if (typeof err == 'string') {
            res.status(401).send({ message: err });
        }
        next(err);
    });


AuthRouter.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});


module.exports = {
    AuthRouter,
};