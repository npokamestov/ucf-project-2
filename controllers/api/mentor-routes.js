const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Mentor , User, Review, Language } = require('../../models');
// const withAuth = require('../../utils/auth');

// get all mentors
router.get('/', (req, res) => {
    console.log('======================');
    Mentor.findAll({
        attributes: [
            'id',
            'first_name',
            'last_name',
            'email',
            'language_id'
        ],
        include: [
            {
                model: Review,
                attributes: ['id', 'review_text', 'mentor_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            // {
            //     model: User,
            //     attributes: ['username']
            // }
        ]
    })
    .then(dbMentorData => res.json(dbMentorData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Mentor.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'first_name',
            'last_name',
            'email',
            'language_id'
        ],
        include: [
            {
                model: Language,
                attributes: ['id', 'language']
            },
            {
                model: Review,
                attributes: ['id', 'review_text', 'mentor_id', 'user_id', 'created_at'],
                order: [['created_at', 'DESC']],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbMentorData => {
        if (dbMentorData) {
            // res.json(dbMentorData);
            const mentor = dbMentorData.get({ plain:true });
            res.render('single-mentor', {
                mentor,
                loggedIn:true
            });
        }
        else {
            res.status(404).json({ message: 'No mentor found with this id' });
            return;
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;