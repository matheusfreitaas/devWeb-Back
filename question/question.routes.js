const express = require('express');
const router = express.Router();
const questionService = require('./question');

router.get('/allQuestions', questionService.getAllQuestions);
router.get('/:id', questionService.getQuestion);
router.post('/', questionService.createQuestion);
router.put('/:id/update', questionService.updateQuestion);
router.delete('/:id/delete', questionService.deleteQuestion);

module.exports = router;