const students = [];

exports.getAllStudents = () => students;

exports.addStudent = (student) => {
    students.push(student);
    return student;
};

exports.getStudentsByBranch = (branch) => {
    return students.filter(student => student.branch === branch);
};

exports.deleteStudent = (id) => {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        return students.splice(index, 1);
    }
    return null;
};
