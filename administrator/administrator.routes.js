const express = require('express');
const router = express.Router;
const admin = require('./administrator');

router.get('/me', admin.get);

router.post('/register', admin.register);

router.post('/login', admin.login);

router.delete('/delete', admin.delete);

module.exports = router;