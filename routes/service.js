const express = require('express')
const router = express.Router()
const servicesController = require('../Controllers/serviceController')

router.get('/', servicesController.services)

module.exports = router