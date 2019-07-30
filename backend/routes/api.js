var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/apply/', controllers.apply_controller.all);
router.get('/apply/:id(\\d+)', controllers.apply_controller.findById);
router.post('/apply/new', controllers.apply_controller.save);


module.exports = router;