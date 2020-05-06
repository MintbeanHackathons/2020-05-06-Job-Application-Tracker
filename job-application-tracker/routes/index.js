const express = require('express');
const router = express.Router();
const jatCtrl = require('../controllers/jat')

router.get('/', (req, res, next) => {
  res.redirect('/jobapplicationtracker')
});

module.exports = router;
