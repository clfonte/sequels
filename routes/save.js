const express = require('express');
const router = express.Router();
const users = require('../controllers/insert');

router.post('/', users.save);

module.exports = router;