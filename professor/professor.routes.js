const express = require('express');
const router = express.Router();
const profService = require('./professor');

router.get('/:id', profService.getProf);
router.get('/:profId/courses', profService.getCoursesByProf);
router.post('/', profService.createProf);
router.put('/:id/update', profService.updateProf);
router.delete('/:id/delete', profService.deleteProf);

module.exports = router;