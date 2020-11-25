const router = require('express').Router();
const sequelize = require('../config/connection');
const { Language, Mentor, Review, Rate, User } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session)
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req,res) => {
    if(req.session.loggedIn) {
        res.direct('/');
        return;
    }
    res.render('signup');
});

module.exports = router;