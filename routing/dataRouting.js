const { mockTestsController } = require('../controller/dataController');

const dataRouting = require('express').Router();

dataRouting.get('/mocktests',mockTestsController)
// dataRouting.get('/practicetests',practiceTestsController)

module.exports = {dataRouting}