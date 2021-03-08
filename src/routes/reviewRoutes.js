const express = require('express');
const reviewController = require('../controllers/reviewController.js');

const router = express.Router();

router.get('/', reviewController.getReviews);
router.get('/meta', reviewController.getMeta);
router.post('/post', reviewController.post);
router.post('/upvote', reviewController.upVote);
router.post('/report', reviewController.report);

module.exports = router;
