var express = require('express');
var router = express.Router();
var apply_controller = require('../controllers/apply_controller');
var bbs_controller = require('../controllers/bbs_controller');
var chat_controller = require('../controllers/chat_controller');
var counter_controller = require('../controllers/counter_controller');
var history_controller = require('../controllers/history_controller');
var image_controller = require('../controllers/image_controller');
var link_controller = require('../controllers/link_controller');

router.get('/apply/', apply_controller.all);
router.get('/apply/:id(\\d+)', apply_controller.findById);
router.post('/apply/new', apply_controller.save);

router.get('/bbs/', bbs_controller.fetch);
router.post('/bbs/new', bbs_controller.save);

router.get('/chat/', chat_controller.fetch);
router.post('/chat/new', chat_controller.save);

router.get('/counter/', counter_controller.fetch);

router.get('/history/', history_controller.fetch);

router.get('/image/', image_controller.fetch);

router.get('/link/', link_controller.fetch);


module.exports = router;