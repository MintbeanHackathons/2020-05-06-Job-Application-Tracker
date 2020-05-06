'use strict'

const router = require('express').Router()
const JobApp = require('../db/models/JobApp')


router.get('/:id', async (req, res, next) => {
  try {
    let singleApp = await JobApp.findOne({
      where: {id: req.params.id}})
    res.send(singleApp)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    let singleApp = await JobApp.findById(req.params.id)
    singleApp.update(req.body)
    res.send(singleApp)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    let singleApp = await JobApp.findById(req.params.id)
    await singleApp.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {
  try {
    let jobApps = await JobApp.findAll()
    res.send(jobApps)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    let newApp = await JobApp.create(req.body)
    res.status(201).send(newApp)
  } catch (error) {
    next(error)
  }
})

module.exports = router
