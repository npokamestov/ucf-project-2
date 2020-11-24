const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const mentorRoutes = require('./mentor-routes');
const reviewRoutes = require('./review-routes');
// const languageRoutes = require('./language-routes');



router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/mentors', mentorRoutes);
router.use('/reviews', reviewRoutes);
// router.use('/language', languageRoutes);



module.exports = router;