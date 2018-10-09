const express = require('express');
const router = express.Router();
const adminService = require('./administrator');

router.get('/:id', adminService.getAdmin);

router.post('/', adminService.createAdmin);

router.put('/:id/update', adminService.updateAdmin);

router.delete('/:id/delete', adminService.deleteAdmin);

module.exports = router;
