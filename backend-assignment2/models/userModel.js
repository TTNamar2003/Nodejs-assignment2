const users = [];

exports.getAllUsers = () => users;

exports.addUser = (user) => {
    users.push(user);
    return user;
};

exports.searchUsersByUsername = (query) => {
    return users.filter(user => user.username.includes(query)).map(({ password, ...user }) => user);
};

exports.deleteUserByUsername = (username) => {
    const index = users.findIndex(user => user.username === username);
    if (index !== -1) {
        return users.splice(index, 1);
    }
    return null;
};