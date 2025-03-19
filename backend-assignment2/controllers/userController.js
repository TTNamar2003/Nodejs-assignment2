const userModel = require('../models/userModel');



exports.searchUsers = (req, res) => {
    const { query } = req.query;
    console.log(query);
    res.json(userModel.searchUsersByUsername(query));
};

exports.getUsers = (req, res) => {
    res.json(userModel.getAllUsers());
};

exports.createUser = (req, res) => {
    const { username, password, firstName, lastName, created_on } = req.body;
    const newUser = { username, password, firstName, lastName, created_on };
    res.status(201).json(userModel.addUser(newUser));
};

exports.deleteUser = (req, res) => {
    const { username } = req.params;
    const deletedUser = userModel.deleteUserByUsername(username);
    if (deletedUser) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};
