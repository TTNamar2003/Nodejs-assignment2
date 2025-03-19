const express = require('express');
const { getUsers, createUser, deleteUser ,searchUsers} = require('../controllers/userController');
const { addCreatedOn } = require('../middleware/addCreatedOn');

const router = express.Router();

router.get('/', getUsers);
router.post('/', addCreatedOn, createUser);
router.get('/search', searchUsers);
router.delete('/:username', deleteUser);

module.exports = router;