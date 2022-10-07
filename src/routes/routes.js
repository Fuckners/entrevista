const router = require('express').Router();
const UserController = require('../controllers/UserController');
const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.home);

router.get('/register', UserController.register);
router.post('/create', UserController.create);

router.use((req, res) => {
  res.redirect('/');
});

module.exports = router;