const express = require('express')
const router = express.Router()
const users = require('./controller')

router.get('/', users.getAll);
router.get('/user', users.getOne);
router.post('/user', users.post);
router.delete('/user', users.delete);

module.exports = router