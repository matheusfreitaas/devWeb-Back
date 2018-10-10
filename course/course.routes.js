const express = require('express');
const router = express.Router();
const courseService = require('./course');

router.get('/:id', courseService.getCourse);
router.post('/', courseService.createCourse);
router.put('/:id/update', courseService.updateCourse);
// router.delete('/:id/delete', courseService.deleteCourse);

module.exports = router;