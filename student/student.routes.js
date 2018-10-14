const express = require('express');
const router = express.Router();
const studentService = require('./student')

router.get('/:id', studentService.getStudent);
router.post('/', studentService.createStudent);
router.put('/:id/update', studentService.updateStudent);
router.delete('/:id/delete', studentService.deleteStudent);


module.exports = router;