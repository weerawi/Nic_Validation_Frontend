import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AllData from '../Assets/AllData';

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
   
        <div className="flex flex-col items-center w-[80%] mx-auto mt-10 mb-28" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <h1 className="text-3xl font-bold p-5">NIC Details</h1>
            <div className="font-semibold items-center grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 justify-around max-w-[1000px]">
                <p className='flex justify-center'>Image</p>
                <p className='flex justify-center'>Title</p>
                <p className='flex justify-center'>Sub Title</p>
                <p className='flex justify-center'>Date</p>
                <p className='flex justify-center'>Album</p> 
            </div>

            <div className="my-5 py-5 bg-gray-50 overflow-y-scroll h-72">
                {AllData.map((nic, i) => (
                    <div key={i} className="max-w-[1000px] items-center border-b-2 grid grid-cols-5 gap-1 md:gap-2 lg:gap-10 py-1 border-gray-400">
                        <>
                                
                                <p className='flex justify-center'>{nic.id}</p>
                                <p className='flex justify-center'>{nic.nic}</p>
                                <p className='flex justify-center'>{nic.birthday}</p>
                                <p className='flex justify-center'>{nic.age}</p>
                                <p className='flex justify-center'>{nic.gender}</p>
                            
                            </>
                    </div>
                ))}
            </div>
        </div>
 
    );
};


export default NicForm