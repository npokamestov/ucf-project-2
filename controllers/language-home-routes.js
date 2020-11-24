const router = require('express').Router();
const sequelize = require('../config/connection');
const { Language, Mentor, User, Review } = require('../models');
const withAuth = require('../utils/auth');
// const withAuth = require('../../utils/auth');

// get all languages
router.get('/', (req, res) => {
    console.log('======================');
    Language.findAll({
        attributes: [
            'id',
            'language'
        ],
        // include: [
        //     {
        //         model: Mentor,
        //         attributes: ['id', 'first_name', 'last_name', 'email'],
        //         include: {
        //             model: Review,
        //             attributes: ['review_text'],
        //             include: {
        //                 model: User,
        //                 attributes: ['username']
        //             }
        //         }
        //     },
            // {
            //     model: User,
            //     attributes: ['username']
            // }
        // ]
    })
    .then(dbLangData => {
        // res.json(dbLangData)
        // console.log(dbLangData)
        const languages = dbLangData.map(lang => lang.get({ plain:true}));
        res.render('all-languages', { languages, loggedIn:true })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
    Language.findByPk(req.params.id, {
        attributes: [
            'id',
            'language'
        ],
        include: [
            {
                model: Mentor,
                attributes: ['id', 'first_name', 'last_name', 'email'],
                order: [['created_at', 'DESC']],
                include: {
                    model: Review,
                    attributes: ['review_text'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            }
        ]
    })
    .then(dbLangData => {
        if (dbLangData) {
        
            // res.json(dbLangData);
            // console.log(dbLangData)
            const language = dbLangData.get({ plain:true });
            res.render('single-language', { 
                language, 
                loggedIn:true 
            });
        }
        else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;