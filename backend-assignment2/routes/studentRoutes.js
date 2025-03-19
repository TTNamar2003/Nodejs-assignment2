const express = require('express');
const { getStudents, createStudent, filterStudents, deleteStudent } = require('../controllers/studentController');

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
router.get('/filter', filterStudents);
router.delete('/:id', deleteStudent);

module.exports = router;