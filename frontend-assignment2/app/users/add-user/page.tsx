'use client';

import { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [form, setForm] = useState({ username: '', password: '', firstName: '', lastName: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/users', form);
        alert('User added successfully');
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-xl font-bold mb-4">Add User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} className="border p-2 w-full mb-2" required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full mb-2" required />
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="border p-2 w-full mb-2" required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-2 w-full mb-2" required />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;