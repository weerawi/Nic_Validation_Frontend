import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NicForm = () => {
    const [nics, setNics] = useState([]);

    useEffect(() => {
        const fetchNics = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/all');
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
        <div className="flex flex-col items-center w-[80%] mx-auto mt-10 mb-28" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <h1 className="text-3xl font-bold p-5 ">NIC Details</h1>
            <div className="font-semibold items-center bg-black  text-white grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 justify-around 
            lg:w-[900px] md:w-[800px] w-[600px] ">
                 
                <p className='flex justify-center'>Id</p>
                <p className='flex justify-center'>NIC</p>
                <p className='flex justify-center'>Birthday</p>
                <p className='flex justify-center'>Age</p>
                <p className='flex justify-center'>Gender</p> 
            </div>

            <div className="my-5 py-5   overflow-y-scroll h-80 bg-gray-100 p-5">
                {nics.map((nic, i) => (
                    <div key={i} className="lg:w-[900px] md:w-[800px] w-[600px] items-center border-b-2 grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-2 border-gray-400">
                        <p className='flex justify-center'>{i+1}</p>
                        <p className='flex justify-center'>{nic.nicNumber}</p>
                        <p className='flex justify-center'>{nic.dob}</p>
                        <p className='flex justify-center'>{nic.age}</p>
                        <p className='flex justify-center'>{nic.gender}</p> 
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NicForm;
