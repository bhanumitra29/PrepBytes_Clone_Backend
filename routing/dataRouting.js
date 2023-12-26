const { mockTestsController } = require('../controller/dataController');

const dataRouting = require('express').Router();

dataRouting.get('/mocktests',mockTestsController)

module.exports = {dataRouting}