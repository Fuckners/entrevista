const router = require('express').Router();
const db = require('../database/database');

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;