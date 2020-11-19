const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Language, Mentor, User, Review } = require('../../models');
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
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
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
                attributes: ['id', 'first_name', 'last_name', 'email'],
                include: {
                    model: Review,
                    attributes: ['review_text'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            },
            // {
            //     model: User,
            //     attributes: ['username']
            // }
        ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;