const express = require('express');
const qaController = require('../controllers/qaController.js');

const router = express.Router();

router.get('/questions', qaController.getQA);

router.post('/questions', qaController.postQuestion);

router.post('/questions/:question_id/answers', qaController.postAnswer);

router.put('/questions/:question_id/helpful', qaController.putQuestionHelpful);

router.put('/answers/:answer_id/helpful', qaController.putAnswerHelpful);

router.put('/answers/:answer_id/report', qaController.putAnswerReport);

module.exports = router;
