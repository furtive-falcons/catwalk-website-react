const express = require('express');
const qaController = require('../controllers/qaController.js');

const router = express.Router();

router.get('/', qaController.getQA);

router.post('/', qaController.postQuestion);

router.post('/:question_id/answers', qaController.postAnswer);

module.exports = router;
