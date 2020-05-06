'use strict'

const db = require('./database')


const JobApp = require('./models/JobApp')


module.exports = {
  // Include your models in this exports object as well!
  db,
  JobApp
}
