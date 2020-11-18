const router = require('express');
// const sequelize = require('../config/connection');
const { Language, Mentor, Review, Rate, User } = require('../models');
const withAuth = require('../utils/auth');

// get all languages for homepage
router.get('/', (req,res) => {
    Language.findAll({})
    .then((dbLanguageData) => {
        const languages = dbLanguageData.map((language) => languauge.get({ plain:true }));

        res.render('all-languages', { languages });
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

// get a single language with associated mentors
router.get('/language/:id', (req,res) => {
    Language.findByPk(req.params.id, {
        include: [
            Mentor,
            {
                model: Review,
                include: [User],
            },
            {
                model: Rate
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
    if(res.session.loggedIn) {
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