var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

/* API of controling employees */
router.get('/employees/', controllers.employee_controller.all);
router.get('/employees/:id(\\d+)', controllers.employee_controller.findById);

module.exports = router;