const router = require('express').Router();

const homeRoutes = require('/home-routes.js')
const blogRoutes = require('./blog-routes.js');
const blogDashboardRoutes = require('./blog-dashboard-routes.js');
const userDashboardRoutes = require('./user-dashboard-routes.js');
const apiRoutes = require('./api/');

router.use('/', homeRoutes);
router.use('/blog', blogRoutes);
router.use('/blog-dashboard', blogDashboardRoutes);
router.use('/user-dashboard', userDashboardRoutes);
router.use('/api/', apiRoutes);

module.exports = router;