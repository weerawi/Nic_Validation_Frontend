// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Title from '../Components/Title';

// const NicForm = () => {
//     const [nics, setNics] = useState([]);
//     const [page, setPage] = useState(0);
//     const [size, setSize] = useState(10);
//     const [totalPages, setTotalPages] = useState(0);

//     useEffect(() => {
//         const fetchNics = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/all?page=${page}&size=${size}`);
//                 console.log(response.data); // Log the data to verify
//                 if (response.data && response.data.content) {
//                     setNics(response.data.content);
//                     setTotalPages(response.data.totalPages);
//                 } else {
//                     console.error("Unexpected data format:", response.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching NIC data:", error);
//             }
//         };

//         fetchNics();
//     }, [page, size]);

//     return (
//         <div className=" flex flex-col items-center w-[80%] mx-auto   mb-20 min-h-screen " data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"> 
//             <Title title="NIC Details"/>
//             <div className="font-semibold items-center py-3 bg-black text-white grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 justify-around lg:w-[900px] md:w-[800px] w-[600px] ">
//                 <p className='flex justify-center'>Id</p>
//                 <p className='flex justify-center'>NIC</p>
//                 <p className='flex justify-center'>Birthday</p>
//                 <p className='flex justify-center'>Age</p>
//                 <p className='flex justify-center'>Gender</p>
//                 <p className='flex justify-center'>FileName</p>
//             </div>

//             <div className="my-5 py-5 overflow-y-scroll h-auto bg-gray-100 p-5">
//                 {nics.map((nic, i) => (
//                     <div key={i} className="lg:w-[900px] md:w-[800px] w-[600px] items-center border-b-2 grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 py-2 border-gray-400">
//                         <p className='flex justify-center'>{i + 1 + (page * size)}</p>
//                         <p className='flex justify-center'>{nic.nicNumber}</p>
//                         <p className='flex justify-center'>{nic.dob}</p>
//                         <p className='flex justify-center'>{nic.age}</p>
//                         <p className='flex justify-center'>{nic.gender}</p>
//                         <p className='flex justify-center'>{nic.fileName}</p>
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-between w-[600px]">
//                 <button
//                     onClick={() => setPage(prev => Math.max(prev - 1, 0))}
//                     disabled={page === 0}
//                     className="px-4 py-2 bg-blue-500 text-white rounded"
//                 >
//                     Previous
//                 </button>
//                 <span>Page {page + 1} of {totalPages}</span>
//                 <button
//                     onClick={() => setPage(prev => (prev < totalPages - 1 ? prev + 1 : prev))}
//                     disabled={page >= totalPages - 1}
//                     className="px-4 py-2 bg-blue-500 text-white rounded"
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NicForm;




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Title from '../Components/Title';

// const NicForm = () => {
//     const [nics, setNics] = useState([]);
//     const [filteredNics, setFilteredNics] = useState([]);
//     const [page, setPage] = useState(0);
//     const [size, setSize] = useState(10);
//     const [totalPages, setTotalPages] = useState(0);

//     const [genderFilter, setGenderFilter] = useState('');
//     const [minAgeFilter, setMinAgeFilter] = useState('');
//     const [maxAgeFilter, setMaxAgeFilter] = useState('');
//     const [filenameFilter, setFilenameFilter] = useState('');

//     useEffect(() => {
//         // Fetch all NICs initially
//         const fetchNics = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/all?page=0&size=10000'); // Fetch a large number of records
//                 console.log(response.data); // Log the data to verify
//                 if (response.data && response.data.content) {
//                     setNics(response.data.content);
//                     setFilteredNics(response.data.content);
//                     setTotalPages(Math.ceil(response.data.content.length / size)); // Calculate total pages
//                 } else {
//                     console.error("Unexpected data format:", response.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching NIC data:", error);
//             }
//         };

//         fetchNics();
//     }, []);

//     const applyFilters = () => {
//         let filteredData = nics;

//         if (genderFilter) {
//             filteredData = filteredData.filter(nic => nic.gender.toLowerCase() === genderFilter.toLowerCase());
//         }
//         if (minAgeFilter) {
//             filteredData = filteredData.filter(nic => nic.age >= parseInt(minAgeFilter, 10));
//         }
//         if (maxAgeFilter) {
//             filteredData = filteredData.filter(nic => nic.age <= parseInt(maxAgeFilter, 10));
//         }
//         if (filenameFilter) {
//             filteredData = filteredData.filter(nic => nic.fileName.toLowerCase().includes(filenameFilter.toLowerCase()));
//         }

//         setFilteredNics(filteredData);
//         // setPage(0); // Reset to first page
//         setTotalPages(Math.ceil(filteredData.length / size)); // Recalculate total pages based on filtered data
//     };

//     const displayedNics = filteredNics.slice(page * size, page * size + size);

//     return (
//         <div className="flex flex-col items-center w-[80%] mx-auto m-5 mb-20 min-h-screen">
//             <Title title="NIC Details" />
            
//             <div className="mb-4">
//                 <input
//                     type="text"
//                     placeholder="Gender"
//                     value={genderFilter}
//                     onChange={(e) => setGenderFilter(e.target.value)}
//                     className="px-2 py-1 border border-gray-300 rounded"
//                 />
//                 <input
//                     type="number"
//                     placeholder="Min Age"
//                     value={minAgeFilter}
//                     onChange={(e) => setMinAgeFilter(e.target.value)}
//                     className="px-2 py-1 border border-gray-300 rounded ml-2"
//                 />
//                 <input
//                     type="number"
//                     placeholder="Max Age"
//                     value={maxAgeFilter}
//                     onChange={(e) => setMaxAgeFilter(e.target.value)}
//                     className="px-2 py-1 border border-gray-300 rounded ml-2"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Filename"
//                     value={filenameFilter}
//                     onChange={(e) => setFilenameFilter(e.target.value)}
//                     className="px-2 py-1 border border-gray-300 rounded ml-2"
//                 />
//                 <button
//                     onClick={applyFilters}
//                     className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
//                 >
//                     Apply Filters
//                 </button>
//             </div>
            
//             <div className="font-semibold items-center py-3 bg-black text-white grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 justify-around lg:w-[900px] md:w-[800px] w-[600px]">
//                 <p className='flex justify-center'>Id</p>
//                 <p className='flex justify-center'>NIC</p>
//                 <p className='flex justify-center'>Birthday</p>
//                 <p className='flex justify-center'>Age</p>
//                 <p className='flex justify-center'>Gender</p>
//                 <p className='flex justify-center'>FileName</p>
//             </div>
    
//             <div className="my-5 py-5 overflow-y-scroll h-auto bg-gray-100 p-5">
//                 {displayedNics.map((nic, i) => (
//                     <div key={i} className="lg:w-[900px] md:w-[800px] w-[600px] items-center border-b-2 grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 py-2 border-gray-400">
//                         <p className='flex justify-center'>{i + 1 + (page * size)}</p>
//                         <p className='flex justify-center'>{nic.nicNumber}</p>
//                         <p className='flex justify-center'>{nic.dob}</p>
//                         <p className='flex justify-center'>{nic.age}</p>
//                         <p className='flex justify-center'>{nic.gender}</p>
//                         <p className='flex justify-center'>{nic.fileName}</p>
//                     </div>
//                 ))}
//             </div>
    
//             <div className="flex justify-between w-[600px]">
//                 <button
//                     onClick={() => setPage(prev => Math.max(prev - 1, 0))}
//                     disabled={page === 0}
//                     className="px-4 py-2 bg-blue-500 text-white rounded"
//                 >
//                     Previous
//                 </button>
//                 <span>Page {page + 1} of {totalPages}</span>
//                 <button
//                     onClick={() => setPage(prev => (prev < totalPages - 1 ? prev + 1 : prev))}
//                     disabled={page >= totalPages - 1}
//                     className="px-4 py-2 bg-blue-500 text-white rounded"
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default NicForm;




// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Title from '../Components/Title';

// const NicForm = () => {
//     const [nics, setNics] = useState([]);
//     const [filteredNics, setFilteredNics] = useState([]);
//     const [page, setPage] = useState(0);
//     const [size, setSize] = useState(10);
//     const [totalPages, setTotalPages] = useState(0);

//     const [genderFilter, setGenderFilter] = useState('');
//     const [minAgeFilter, setMinAgeFilter] = useState('');
//     const [maxAgeFilter, setMaxAgeFilter] = useState('');
//     const [filenameFilter, setFilenameFilter] = useState('');
//     const [nicSearch, setNicSearch] = useState(''); // For NIC search

//     const [uploadedFiles, setUploadedFiles] = useState([]);

//     useEffect(() => {
//         // Fetch all NICs initially
//         const fetchNics = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/all?page=0&size=10000'); // Fetch a large number of records
//                 if (response.data && response.data.content) {
//                     setNics(response.data.content);
//                     setFilteredNics(response.data.content);
//                     setTotalPages(Math.ceil(response.data.content.length / size)); // Calculate total pages

//                     // Collect unique filenames from the fetched NIC data
//                     const uniqueFilenames = [...new Set(response.data.content.map(nic => nic.fileName))];
//                     setUploadedFiles(uniqueFilenames);
//                 } else {
//                     console.error("Unexpected data format:", response.data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching NIC data:", error);
//             }
//         };

//         fetchNics();
//     }, []);

//     const applyFilters = () => {
//         let filteredData = nics;

//         if (nicSearch) {
//             filteredData = filteredData.filter(nic => nic.nicNumber.toLowerCase().includes(nicSearch.toLowerCase()));
//         }
//         if (genderFilter) {
//             filteredData = filteredData.filter(nic => nic.gender.toLowerCase() === genderFilter.toLowerCase());
//         }
//         if (minAgeFilter) {
//             filteredData = filteredData.filter(nic => nic.age >= parseInt(minAgeFilter, 10));
//         }
//         if (maxAgeFilter) {
//             filteredData = filteredData.filter(nic => nic.age <= parseInt(maxAgeFilter, 10));
//         }
//         if (filenameFilter) {
//             filteredData = filteredData.filter(nic => nic.fileName.toLowerCase().includes(filenameFilter.toLowerCase()));
//         }

//         setFilteredNics(filteredData);
//         setTotalPages(Math.ceil(filteredData.length / size)); // Recalculate total pages based on filtered data
//     };

//     const displayedNics = filteredNics.slice(page * size, page * size + size);

//     return (
//         <div className="flex flex-col items-center w-[90%] mx-auto m-5 mb-20 min-h-screen">
//             <Title title="NIC Details" />

//             <div className='flex gap-10 bg-gray-200 rounded-2xl p-10'>


//                 {/* left side */}
//                 <div className='my-auto'>
                    
//                     <div className="mb-4 flex flex-col items-start  space-y-5">
//                         {/* NIC Search */}
//                         <input
//                             type="text"
//                             placeholder="Search by NIC Number"
//                             value={nicSearch}
//                             onChange={(e) => setNicSearch(e.target.value)}
//                             className="px-2 py-1 border border-gray-300 rounded mr-2"
//                         />

//                         {/* Gender Filter */}
//                         <select
//                             value={genderFilter}
//                             onChange={(e) => setGenderFilter(e.target.value)}
//                             className="px-2 py-1 border border-gray-300 rounded"
//                         >
//                             <option value="">All Gender</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>

//                         <input
//                             type="number"
//                             placeholder="Min Age"
//                             value={minAgeFilter}
//                             onChange={(e) => setMinAgeFilter(e.target.value)}
//                             className="px-2 py-1 border border-gray-300 rounded ml-2"
//                         />
//                         <input
//                             type="number"
//                             placeholder="Max Age"
//                             value={maxAgeFilter}
//                             onChange={(e) => setMaxAgeFilter(e.target.value)}
//                             className="px-2 py-1 border border-gray-300 rounded ml-2"
//                         />

//                         {/* Filename Filter */}
//                         <select
//                             value={filenameFilter}
//                             onChange={(e) => setFilenameFilter(e.target.value)}
//                             className="px-2 py-1 border border-gray-300 rounded ml-2"
//                         >
//                             <option value="">Select All Files</option>
//                             {uploadedFiles.map((file, index) => (
//                                 <option key={index} value={file}>
//                                     {file}
//                                 </option>
//                             ))}
//                         </select>

//                         <button
//                             onClick={applyFilters}
//                             className="px-4 py-2 bg-blue-500 text-white rounded ml-2"
//                         >
//                             Apply Filters
//                         </button>
//                     </div>

//                 </div>


//                 {/* right side */}
//                 <div className='flex flex-col justify-center items-center'>
                     
//                     {/* NIC Details Table */}
//                     <div className="font-semibold items-center py-3 bg-black text-white grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 justify-around lg:w-[900px] md:w-[800px] w-[600px]">
//                         <p className='flex justify-center'>Id</p>
//                         <p className='flex justify-center'>NIC</p>
//                         <p className='flex justify-center'>Birthday</p>
//                         <p className='flex justify-center'>Age</p>
//                         <p className='flex justify-center'>Gender</p>
//                         <p className='flex justify-center'>FileName</p>
//                     </div>
            
//                     <div className="my-5 py-5 overflow-y-scroll h-auto bg-gray-100 p-5">
//                         {displayedNics.map((nic, i) => (
//                             <div key={i} className="lg:w-[900px] md:w-[800px] w-[600px] items-center border-b-2 grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 py-2 border-gray-400">
//                                 <p className='flex justify-center'>{i + 1 + (page * size)}</p>
//                                 <p className='flex justify-center'>{nic.nicNumber}</p>
//                                 <p className='flex justify-center'>{nic.dob}</p>
//                                 <p className='flex justify-center'>{nic.age}</p>
//                                 <p className='flex justify-center'>{nic.gender}</p>
//                                 <p className='flex justify-center'>{nic.fileName}</p>
//                             </div>
//                         ))}
//                     </div>
            
//                     {/* Pagination */}
//                     <div className="flex justify-between w-[600px]">
//                         <button
//                             onClick={() => setPage(prev => Math.max(prev - 1, 0))}
//                             disabled={page === 0}
//                             className="px-4 py-2 bg-blue-500 text-white rounded"
//                         >
//                             Previous
//                         </button>
//                         <span>Page {page + 1} of {totalPages}</span>
//                         <button
//                             onClick={() => setPage(prev => (prev < totalPages - 1 ? prev + 1 : prev))}
//                             disabled={page >= totalPages - 1}
//                             className="px-4 py-2 bg-blue-500 text-white rounded"
//                         >
//                             Next
//                         </button>
//                     </div>
 
//                 </div>
 
//             </div>
            

            
//         </div>
//     );
// };

// export default NicForm;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Title from '../Components/Title';

const NicForm = () => {
    const [nics, setNics] = useState([]);
    const [filteredNics, setFilteredNics] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);

    const [genderFilter, setGenderFilter] = useState('');
    const [minAgeFilter, setMinAgeFilter] = useState('');
    const [maxAgeFilter, setMaxAgeFilter] = useState('');
    const [filenameFilter, setFilenameFilter] = useState('');
    const [nicSearch, setNicSearch] = useState(''); // For NIC search

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDownload = (type) => {
        setShowDropdown(false); // Close the dropdown after selection
        downloadReport(type);
    };

    useEffect(() => {
        // Fetch all NICs initially
        const fetchNics = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/all?page=0&size=10000'); // Fetch a large number of records
                if (response.data && response.data.content) {
                    setNics(response.data.content);
                    setFilteredNics(response.data.content);
                    setTotalPages(Math.ceil(response.data.content.length / size)); // Calculate total pages

                    // Collect unique filenames from the fetched NIC data
                    const uniqueFilenames = [...new Set(response.data.content.map(nic => nic.fileName))];
                    setUploadedFiles(uniqueFilenames);
                } else {
                    console.error("Unexpected data format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching NIC data:", error);
            }
        };

        fetchNics();
    }, []);

    const applyFilters = () => {
        let filteredData = nics;

        if (nicSearch) {
            filteredData = filteredData.filter(nic => nic.nicNumber.toLowerCase().includes(nicSearch.toLowerCase()));
        }
        if (genderFilter) {
            filteredData = filteredData.filter(nic => nic.gender.toLowerCase() === genderFilter.toLowerCase());
        }
        if (minAgeFilter) {
            filteredData = filteredData.filter(nic => nic.age >= parseInt(minAgeFilter, 10));
        }
        if (maxAgeFilter) {
            filteredData = filteredData.filter(nic => nic.age <= parseInt(maxAgeFilter, 10));
        }
        if (filenameFilter) {
            filteredData = filteredData.filter(nic => nic.fileName.toLowerCase().includes(filenameFilter.toLowerCase()));
        }

        setFilteredNics(filteredData);
        setTotalPages(Math.ceil(filteredData.length / size)); // Recalculate total pages based on filtered data
    };

    const resetFilters = () => {
        setGenderFilter('');
        setMinAgeFilter('');
        setMaxAgeFilter('');
        setFilenameFilter('');
        setNicSearch('');
        setFilteredNics(nics); // Reset filtered NICs to initial data
        setTotalPages(Math.ceil(nics.length / size)); // Recalculate total pages based on initial data
    };

    const displayedNics = filteredNics.slice(page * size, page * size + size);

 
    const downloadReport = async (type) => {
        try {
            const filters = {};
    
            // Only add filters if they are not empty
            if (genderFilter) filters.gender = genderFilter;
            if (minAgeFilter) filters.minAge = minAgeFilter;
            if (maxAgeFilter) filters.maxAge = maxAgeFilter;
            if (filenameFilter) filters.filename = filenameFilter;
            if (nicSearch) filters.nicSearch = nicSearch;
    
            const response = await axios.get(`http://localhost:8080/api/download/${type}`, {
                params: filters,
                responseType: 'blob',
            });
    
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            const fileExtension = type === 'excel' ? 'xlsx' : type;
            link.href = url;
            link.setAttribute('download', `nic_records.${fileExtension}`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error("Error downloading report:", error);
        }
    };
    



    return (
        <div className="flex flex-col items-center w-[90%] mx-auto m-5 my-10 min-h-screen"> 

            <div className='flex gap-10 bg-gray-200 rounded-2xl p-10 shadow-lg'>

                {/* left side */}
                <div className='my-auto'>
                    
                    <div className="mb-4 flex flex-col items-start space-y-5">
                        <div className='ml-2'>
                            <Title title="NIC Details" />
                        </div>
                         
                        {/* NIC Search */}
                        <input
                            type="text"
                            placeholder="Search by NIC Number"
                            value={nicSearch}
                            onChange={(e) => setNicSearch(e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded ml-2 w-40 "
                        />

                        {/* Gender Filter */}
                        <select
                            value={genderFilter}
                            onChange={(e) => setGenderFilter(e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded ml-2 w-40"
                        >
                            <option value="">All Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Min Age"
                            value={minAgeFilter}
                            onChange={(e) => setMinAgeFilter(e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded ml-2 w-40"
                        />
                        <input
                            type="number"
                            placeholder="Max Age"
                            value={maxAgeFilter}
                            onChange={(e) => setMaxAgeFilter(e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded ml-2 w-40"
                        />

                        {/* Filename Filter */}
                        <select
                            value={filenameFilter}
                            onChange={(e) => setFilenameFilter(e.target.value)}
                            className="px-2 py-1 border border-gray-300 rounded ml-2 w-40"
                        >
                            <option value="">All Files</option>
                            {uploadedFiles.map((file, index) => (
                                <option key={index} value={file}>
                                    {file}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={applyFilters}
                            className="px-4 py-2 bg-red-500 hover:scale-105 transition-all text-white rounded ml-2 w-40"
                        >
                            Apply Filters
                        </button>

                        {/* Reset Button */}
                        <button
                            onClick={resetFilters}
                            className="px-4 py-2 bg-gray-500  hover:scale-105 transition-all text-white rounded ml-2 w-40"
                        >
                            Reset Filters
                        </button>

                        <div className='my-5 bg-gray-200 rounded-2xl   relative'>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="px-4 py-2 bg-green-500  hover:scale-105 transition-all text-white rounded ml-2 w-40  "
                            >
                                Download Report
                            </button>
                            {showDropdown && (
                                <div className="absolute mt-2 bg-white shadow-lg rounded-md  ">
                                    <ul className="py-1">
                                        <li>
                                            <button
                                                onClick={() => handleDownload('csv')}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                                            >
                                                Download CSV
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => handleDownload('excel')}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                                            >
                                                Download Excel
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => handleDownload('pdf')}
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                                            >
                                                Download PDF
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                    </div>

                </div>

                {/* right side */}
                <div className='flex flex-col  items-center'>
                     
                    {/* NIC Details Table */}
                    <div className="font-semibold items-center py-3 bg-black text-white grid grid-cols-6 gap-1 md:gap-2 lg:gap-10 justify-around lg:w-[900px] md:w-[800px] w-[600px]">
                        <p className='flex justify-center'>Id</p>
                        <p className='flex justify-center'>NIC</p>
                        <p className='flex justify-center'>Birthday</p>
                        <p className='flex justify-center'>Age</p>
                        <p className='flex justify-center'>Gender</p>
                        <p className='flex justify-center'>FileName</p>
                    </div>
            
                    <div className="my-5 py-5 overflow-y-scroll h-auto bg-gray-100 p-5">
                        {displayedNics.map((nic, i) => (
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
            
                    {/* Pagination */}
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
 
            </div>

  

        </div>
    );
};

export default NicForm;
