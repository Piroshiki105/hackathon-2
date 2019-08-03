var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/apply/', controllers.apply_controller.all);
router.get('/apply/:id(\\d+)', controllers.apply_controller.findById);
router.post('/apply/new', controllers.apply_controller.save);

router.get('/bbs/', controllers.bbs_controller.fetch);
router.post('/bbs/new', controllers.bbs_controller.save);

router.get('/chat/', controllers.chat_controller.fetch);
router.post('/chat/new', controllers.chat_controller.save);

router.get('/history/', controllers.history_controller.fetch);

router.get('/image/', controllers.image_controller.fetch);

router.get('/link/', controllers.link_controller.fetch);


module.exports = router;