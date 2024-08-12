import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NicForm = () => {
    const [nics, setNics] = useState([]);

    useEffect(() => {
        const fetchNics = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/nic/all');
                console.log(response.data); // Log the data to verify it's an array
                if (Array.isArray(response.data)) {
                    setNics(response.data);
                } else {
                    console.error("Unexpected data format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching NIC data:", error);
            }
        };

        fetchNics();
    }, []);

    return (
        <div className='min-h-screen'>
            <h2 className="text-2xl font-bold mb-4">NIC Details</h2>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">NIC</th>
                        <th className="border border-gray-300 px-4 py-2">Birthday</th>
                        <th className="border border-gray-300 px-4 py-2">Age</th>
                        <th className="border border-gray-300 px-4 py-2">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {nics.map(nic => (
                        <tr key={nic.id}>
                            <td className="border border-gray-300 px-4 py-2">{nic.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{nic.nic}</td>
                            <td className="border border-gray-300 px-4 py-2">{nic.birthday}</td>
                            <td className="border border-gray-300 px-4 py-2">{nic.age}</td>
                            <td className="border border-gray-300 px-4 py-2">{nic.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default NicForm