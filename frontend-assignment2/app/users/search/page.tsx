'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

type User = {
    username: string;
    firstName: string;
    lastName: string;
};

const UserSearch = () => {
    const [query, setQuery] = useState<string>('');
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (query) {
                axios.get(`http://localhost:5000/users/search?query=${query}`).then(res => setUsers(res.data));
            } else {
                setUsers([]);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    return (
        <div className="p-4 max-w-lg mx-auto">
            <input 
                type="text" 
                placeholder="Search username..." 
                className="border p-2 w-full rounded"
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
            />
            <ul className="mt-2 border rounded p-2">
                {users.map((user, index) => (
                    <li key={index} className="p-2 border-b">{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserSearch;
