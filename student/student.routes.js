const express = require('express');
const router = express.Router;
const student = require('./student');

router.get('/me', student.get);

router.get('/register', student.register);

router.post('/login', student.login);

router.delete('/delete', student.delete);

module.exports = router;