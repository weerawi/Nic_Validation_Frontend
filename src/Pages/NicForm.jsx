import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Title from '../Components/Title';

const NicForm = () => {
    const [nics, setNics] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchNics = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/all?page=${page}&size=${size}`);
                console.log(response.data); // Log the data to verify
                if (response.data && response.data.content) {
                    setNics(response.data.content);
                    setTotalPages(response.data.totalPages);
                } else {
                    console.error("Unexpected data format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching NIC data:", error);
            }
        };

        fetchNics();
    }, [page, size]);

    return (
        <div className=" flex flex-col items-center w-[80%] mx-auto   mb-20 min-h-screen " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"> 
            <Title title="NIC Details"/>
            <div className="font-semibold items-center py-3 bg-black text-white grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 justify-around lg:w-[900px] md:w-[800px] w-[600px] ">
                <p className='flex justify-center'>Id</p>
                <p className='flex justify-center'>NIC</p>
                <p className='flex justify-center'>Birthday</p>
                <p className='flex justify-center'>Age</p>
                <p className='flex justify-center'>Gender</p>
                <p className='flex justify-center'>FileName</p>
            </div>

            <div className="my-5 py-5 overflow-y-scroll h-auto bg-gray-100 p-5">
                {nics.map((nic, i) => (
                    <div key={i} className="lg:w-[900px] md:w-[800px] w-[600px] items-center border-b-2 grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 py-2 border-gray-400">
                        <p className='flex justify-center'>{i + 1 + (page * size)}</p>
                        <p className='flex justify-center'>{nic.nicNumber}</p>
                        <p className='flex justify-center'>{nic.dob}</p>
                        <p className='flex justify-center'>{nic.age}</p>
                        <p className='flex justify-center'>{nic.gender}</p>
                        <p className='flex justify-center'>{nic.fileName}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between w-[600px]">
                <button
                    onClick={() => setPage(prev => Math.max(prev - 1, 0))}
                    disabled={page === 0}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Previous
                </button>
                <span>Page {page + 1} of {totalPages}</span>
                <button
                    onClick={() => setPage(prev => (prev < totalPages - 1 ? prev + 1 : prev))}
                    disabled={page >= totalPages - 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default NicForm;
