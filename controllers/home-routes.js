const router = require('express').Router();
// const { request } = require('express');
const sequelize = require('../config/connection');
const { Language, Mentor, Review, Rate, User } = require('../models');
const withAuth = require('../utils/auth');

// get all languages for homepage
router.get('/', (req,res) => {
    Language.findAll({
        // attributes: [
        //     'id',
        //     'language'
        // ],
        // include: [
        //     {
        //         model: Mentor,
        //         attributes: ['first_name', 'last_name']
        //     }
        // ]
    })
    .then((dbLanguageData) => {
        const languages = dbLanguageData.map(language => language.get({ plain:true }));

        res.render('homepage', {
            languages,
            loggedIn: req.session.loggedIn
        });
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

// get a single language with associated mentors
router.get('/languages/:id', (req,res) => {
    Language.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'language'
        ],
        include: [
            {
                model: Mentor,
                attributes: ['email'],
                include: {
                    model: Review,
                    attributes: ['review_text'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            }
        ],
    })
    .then((dbLanguageData) => {
        if(dbLanguageData) {
            const language = dbLanguageData.get({ plain:true });

            res.render('single-language', { language });
        }
        else {
            res.status(404).end();
        }
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.direct('/');
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
})

module.exports = router;