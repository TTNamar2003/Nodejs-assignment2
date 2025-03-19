const studentModel = require('../models/studentModel');

exports.getStudents = (req, res) => {
    res.json(studentModel.getAllStudents());
};

exports.createStudent = (req, res) => {
    const { id, name, branch } = req.body;
    const newStudent = { id, name, branch };
    res.status(201).json(studentModel.addStudent(newStudent));
};

exports.filterStudents = (req, res) => {
    const { branch } = req.query;
    res.json(studentModel.getStudentsByBranch(branch));
};

exports.deleteStudent = (req, res) => {
    const { id } = req.params;
    const deletedStudent = studentModel.deleteStudent(id);
    if (deletedStudent) {
        res.json({ message: 'Student deleted successfully' });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};
