'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

type User = {
    username: string;
    firstName: string;
    lastName: string;
};

const Home = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users').then(res => setUsers(res.data));
    }, []);

    const deleteUser = (username: string) => {
        axios.delete(`http://localhost:5000/users/${username}`).then(() => {
            setUsers(users.filter(user => user.username !== username));
        });
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-xl font-bold mb-4">User List</h1>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Username</th>
                        <th className="border p-2">First Name</th>
                        <th className="border p-2">Last Name</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.username} className="border">
                            <td className="border p-2">{user.username}</td>
                            <td className="border p-2">{user.firstName}</td>
                            <td className="border p-2">{user.lastName}</td>
                            <td className="border p-2">
                                <button onClick={() => deleteUser(user.username)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;