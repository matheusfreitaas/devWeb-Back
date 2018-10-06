const express = require('express');
const router = express.Router;
const course = require('./course');

router.get('/me', course.get);

router.post('/register', course.register);

router.delete('/delete', course.delete);

router.put('/edit', course.edit);

module.exports = router;