var Jat = require('../models/jat');

function index(req, res) {
  Jat.find({}, (err, jat) => {
    res.render('jobapplicationtracker/index', { title: 'Job Application Tracker', jat });
  });
}


module.exports = {
  index,
};