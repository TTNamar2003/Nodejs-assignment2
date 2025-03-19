'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

type Student = {
    id: string;
    name: string;
    branch: string;
};

const StudentHome = () => {
    const [students, setStudents] = useState<Student[]>([]);
    // const [branch, setBranch] = useState<string>('');

    useEffect(() => {
        axios.get('http://localhost:5000/students').then(res => setStudents(res.data));
    }, []);

    const filterByBranch = (branch: string) => {
        axios.get(`http://localhost:5000/students/filter?branch=${branch}`).then(res => setStudents(res.data));
    };

    const deleteStudent = (id: string) => {
        axios.delete(`http://localhost:5000/students/${id}`).then(() => {
            setStudents(students.filter(student => student.id !== id));
        });
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <div className="flex gap-2 mb-4">
                <button onClick={() => filterByBranch('CSE')} className="bg-blue-500 text-white p-2 rounded">CSE</button>
                <button onClick={() => filterByBranch('ECE')} className="bg-blue-500 text-white p-2 rounded">ECE</button>
                <button onClick={() => filterByBranch('ME')} className="bg-blue-500 text-white p-2 rounded">ME</button>
            </div>
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Branch</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="border">
                            <td className="border p-2">{student.name}</td>
                            <td className="border p-2">{student.branch}</td>
                            <td className="border p-2">
                                <button onClick={() => deleteStudent(student.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentHome;
