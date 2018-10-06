const express = require('express');
const router = express.Router;
const professor = require('./professor');

router.get('/me', professor.get);

router.delete('/delete', professor.delete);

router.post('/login', professor.login);

router.post('/register', professor.register);

module.exports = router;