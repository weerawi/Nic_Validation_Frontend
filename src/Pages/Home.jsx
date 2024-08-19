// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import nicaccount from '../Assets/account-svgrepo-com.svg';
// import Title from '../Components/Title';

// const Home = () => {
//     const [files, setFiles] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState('');

//     const handleFileChange = (e) => {
//         setFiles(Array.from(e.target.files)); // Convert FileList to Array
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);
//         setSuccessMessage('');

//         const formData = new FormData();
//         files.forEach((file, index) => {
//             formData.append('files', file); // Append all files with the 'files' key
//         });

//         try {
//             const token = Cookies.get('access_token');
//             console.log("JWT Token:", token); // Log the token to check

//             if (!token) {
//                 setError('No access token found. Please sign in.');
//                 setLoading(false);
//                 return;
//             }

//             const response = await axios.post('http://localhost:8080/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             });

//             setSuccessMessage('Files uploaded successfully!');
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error uploading files:', error.response || error.message);
//             setError('Failed to upload files. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='m-5 mb-20 flex flex-col items-center' data-aos="fade-down" data-aos-duration="800"> 
//                 <Title title="NIC Validation File Upload"/>
//             <div className="file-upload-form shadow-inner shadow-gray-500 p-10 rounded-2xl w-[800px] py-16 
//             bg-gradient-to-r from-green-300 via-yellow-300 to-sky-200 ">

//                 <div className='flex flex-col md:flex-row'>
//                     <div className='w-full md:w-1/3 flex justify-center items-center' 
//                         data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
//                         <img src={nicaccount} alt="nicaccount" className="h-[200px] w-auto rounded-full mr-2" />
//                     </div>

//                     <div className='w-full md:w-2/3 backdrop-blur-xl bg-[rgba(255,255,255,0.5)]  p-5 rounded-2xl shadow-inner shadow-gray-500' data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label className="block mb-1">Upload Files:</label>
//                                 <input
//                                     type="file"
//                                     multiple
//                                     onChange={handleFileChange}
//                                     className="w-full p-2 border border-gray-300 rounded"
//                                 />
//                             </div>
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="w-[150px] p-2 bg-blue-500 text-white rounded"
//                             >
//                                 {loading ? 'Uploading...' : 'Upload Files'}
//                             </button>
//                             {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
//                             {error && <p className="text-red-500 mt-4">{error}</p>}
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;



// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import nicaccount from '../Assets/account-svgrepo-com.svg';
// import Title from '../Components/Title';

// const Home = () => {
//     const [files, setFiles] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [invalidNicDetails, setInvalidNicDetails] = useState({});

//     const handleFileChange = (e) => {
//         setFiles(Array.from(e.target.files)); // Convert FileList to Array
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);
//         setSuccessMessage('');
//         setInvalidNicDetails({}); // Reset invalid NIC details

//         const formData = new FormData();
//         files.forEach((file) => {
//             formData.append('files', file); // Append all files with the 'files' key
//         });

//         try {
//             const token = Cookies.get('access_token');
//             console.log("JWT Token:", token); // Log the token to check

//             if (!token) {
//                 setError('No access token found. Please sign in.');
//                 setLoading(false);
//                 return;
//             }

//             const response = await axios.post('http://localhost:8080/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             });

//             setSuccessMessage('Files uploaded successfully!');

//             // Handle the invalid NIC details from the server response
//             if (response.data.invalidNicDetails) {
//                 setInvalidNicDetails(response.data.invalidNicDetails);
//             }

//             console.log(response.data);

//         } catch (error) {
//             console.error('Error uploading files:', error.response || error.message);
//             setError('Failed to upload files. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='m-5 mb-20 flex flex-col items-center' data-aos="fade-down" data-aos-duration="800"> 
//             <Title title="NIC Validation File Upload"/>
//             <div className="file-upload-form shadow-inner shadow-gray-500 p-10 rounded-2xl w-[800px] py-16 bg-gradient-to-r from-green-300 via-yellow-300 to-sky-200 ">

//                 <div className='flex flex-col md:flex-row'>
//                     <div className='w-full md:w-1/3 flex justify-center items-center' 
//                         data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
//                         <img src={nicaccount} alt="nicaccount" className="h-[200px] w-auto rounded-full mr-2" />
//                     </div>

//                     <div className='w-full md:w-2/3 backdrop-blur-xl bg-[rgba(255,255,255,0.5)] p-5 rounded-2xl shadow-inner shadow-gray-500' data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label className="block mb-1">Upload Files:</label>
//                                 <input
//                                     type="file"
//                                     multiple
//                                     onChange={handleFileChange}
//                                     className="w-full p-2 border border-gray-300 rounded"
//                                 />
//                             </div>
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="w-[150px] p-2 bg-blue-500 text-white rounded"
//                             >
//                                 {loading ? 'Uploading...' : 'Upload Files'}
//                             </button>
//                             {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
//                             {error && <p className="text-red-500 mt-4">{error}</p>}
//                         </form>

                        
//                     </div>
//                 </div>


//                 {/* Display invalid NIC details */}
//                 {Object.keys(invalidNicDetails).length > 0 && (
//                             <div className="mt-6">
//                                 <h2 className="text-red-500 font-bold mb-2">Invalid NIC Details:</h2>
//                                 <ul>
//                                     {Object.entries(invalidNicDetails).map(([fileName, errors]) => (
//                                         <li key={fileName}>
//                                             <p className="font-semibold">{fileName} - {errors.length} invalid NICs</p>
//                                             <ul className="list-disc pl-5">
//                                                 {errors.map((error, index) => (
//                                                     <li key={index}>{error}</li>
//                                                 ))}
//                                             </ul>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}

                        
//             </div>
//         </div>
//     );
// };

// export default Home;



// import React, { useState, useCallback } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { useDropzone } from 'react-dropzone'; // Import useDropzone from react-dropzone
// import nicaccount from '../Assets/account-svgrepo-com.svg';
// import Title from '../Components/Title';

// const Home = () => {
//     const [files, setFiles] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [invalidNicDetails, setInvalidNicDetails] = useState({});

//     const onDrop = useCallback((acceptedFiles) => {
//         setFiles(acceptedFiles);
//     }, []);

//     const { getRootProps, getInputProps, isDragActive } = useDropzone({
//         onDrop,
//         multiple: true,
//         accept: { 'text/csv': ['.csv'] } // Accept only CSV files
//     });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);
//         setSuccessMessage('');
//         setInvalidNicDetails({}); // Reset invalid NIC details

//         const formData = new FormData();
//         files.forEach((file) => {
//             formData.append('files', file); // Append all files with the 'files' key
//         });

//         try {
//             const token = Cookies.get('access_token');
//             console.log("JWT Token:", token); // Log the token to check

//             if (!token) {
//                 setError('No access token found. Please sign in.');
//                 setLoading(false);
//                 return;
//             }

//             const response = await axios.post('http://localhost:8080/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             });

//             setSuccessMessage('Files uploaded successfully!');

//             // Handle the invalid NIC details from the server response
//             if (response.data.invalidNicDetails) {
//                 setInvalidNicDetails(response.data.invalidNicDetails);
//             }

//             console.log(response.data);

//         } catch (error) {
//             console.error('Error uploading files:', error.response || error.message);
//             setError('Failed to upload files. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='m-5 mb-20 flex flex-col items-center' data-aos="fade-down" data-aos-duration="800">
//             <Title title="NIC Validation File Upload" />
//             <div className="file-upload-form shadow-inner shadow-gray-500 p-10 rounded-2xl w-[800px] py-16 bg-gradient-to-r from-green-300 via-yellow-300 to-sky-200">

//                 <div className='flex flex-col md:flex-row'>
//                     <div className='w-full md:w-1/3 flex justify-center items-center'
//                         data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
//                         <img src={nicaccount} alt="nicaccount" className="h-[200px] w-auto rounded-full mr-2" />
//                     </div>

//                     <div className='w-full md:w-2/3 backdrop-blur-xl bg-[rgba(255,255,255,0.5)] p-5 rounded-2xl shadow-inner shadow-gray-500' data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
//                         <div
//                             {...getRootProps()} // Spread dropzone props to the div
//                             className={`w-full p-5 border border-dashed rounded-lg text-center ${isDragActive ? 'border-blue-500' : 'border-gray-300'}`}
//                         >
//                             <input {...getInputProps()} /> {/* Spread dropzone input props */}
//                             {
//                                 isDragActive ?
//                                     <p className="text-blue-500">Drop the files here ...</p> :
//                                     <p>Drag 'n' drop some files here, or click to select files</p>
//                             }
//                         </div>
//                         <form onSubmit={handleSubmit} className="mt-4">
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="w-[150px] p-2 bg-blue-500 text-white rounded"
//                             >
//                                 {loading ? 'Uploading...' : 'Upload Files'}
//                             </button>
//                             {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
//                             {error && <p className="text-red-500 mt-4">{error}</p>}
//                         </form>
//                     </div>
//                 </div>

//                 {/* Display invalid NIC details */}
//                 {Object.keys(invalidNicDetails).length > 0 && (
//                     <div className="mt-6">
//                         <h2 className="text-red-500 font-bold mb-2">Invalid NIC Details:</h2>
//                         <ul>
//                             {Object.entries(invalidNicDetails).map(([fileName, errors]) => (
//                                 <li key={fileName}>
//                                     <p className="font-semibold">{fileName} - {errors.length} invalid NICs</p>
//                                     <ul className="list-disc pl-5">
//                                         {errors.map((error, index) => (
//                                             <li key={index}>{error}</li>
//                                         ))}
//                                     </ul>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Home;




// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import nicaccount from '../Assets/account-svgrepo-com.svg';
// import Title from '../Components/Title';

// const Home = () => {
//     const [files, setFiles] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [invalidNicDetails, setInvalidNicDetails] = useState({});

//     const handleFileChange = (e) => {
//         setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files)]);
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         setFiles((prevFiles) => [...prevFiles, ...Array.from(e.dataTransfer.files)]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);
//         setSuccessMessage('');
//         setInvalidNicDetails({}); // Reset invalid NIC details

//         const formData = new FormData();
//         files.forEach((file) => {
//             formData.append('files', file); // Append all files with the 'files' key
//         });

//         try {
//             const token = Cookies.get('access_token');
//             console.log("JWT Token:", token); // Log the token to check

//             if (!token) {
//                 setError('No access token found. Please sign in.');
//                 setLoading(false);
//                 return;
//             }

//             const response = await axios.post('http://localhost:8080/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`,
//                 },
//             });

//             setSuccessMessage('Files uploaded successfully!');

//             // Handle the invalid NIC details from the server response
//             if (response.data.invalidNicDetails) {
//                 setInvalidNicDetails(response.data.invalidNicDetails);
//             }

//             console.log(response.data);

//         } catch (error) {
//             console.error('Error uploading files:', error.response || error.message);
//             setError('Failed to upload files. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <div className='m-5 mb-20 flex flex-col items-center' data-aos="fade-down" data-aos-duration="800"> 
//             <Title title="NIC Validation File Upload"/>
//             <div className="file-upload-form shadow-inner shadow-gray-500 p-10 rounded-2xl w-[800px] py-16 bg-gradient-to-r from-green-300 via-yellow-300 to-sky-200 ">

//                 <div className='flex flex-col md:flex-row'>
//                     <div className='w-full md:w-1/3 flex justify-center items-center' 
//                         data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
//                         <img src={nicaccount} alt="nicaccount" className="h-[200px] w-auto rounded-full mr-2" />
//                     </div>

//                     <div 
//                         className='w-full md:w-2/3 backdrop-blur-xl bg-[rgba(255,255,255,0.5)] p-5 rounded-2xl shadow-inner shadow-gray-500' 
//                         data-aos="fade-left" 
//                         data-aos-anchor-placement="top-bottom" 
//                         data-aos-duration="1000"
//                         onDrop={handleDrop}
//                         onDragOver={handleDragOver}
//                     >
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label className="block mb-1">Drag and Drop Files Here or Click to Upload:</label>
//                                 <input
//                                     type="file"
//                                     multiple
//                                     onChange={handleFileChange}
//                                     className="w-full p-2 border border-gray-300 rounded"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <p>Uploaded Files:</p>
//                                 <ul>
//                                     {files.map((file, index) => (
//                                         <li key={index}>{file.name}</li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="w-[150px] p-2 bg-blue-500 text-white rounded"
//                             >
//                                 {loading ? 'Uploading...' : 'Upload Files'}
//                             </button>
//                             {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
//                             {error && <p className="text-red-500 mt-4">{error}</p>}
//                         </form>
//                     </div>
//                 </div>

//                 {/* Display invalid NIC details */}
//                 {Object.keys(invalidNicDetails).length > 0 && (
//                     <div className="mt-6">
//                         <h2 className="text-red-500 font-bold mb-2">Invalid NIC Details:</h2>
//                         <ul>
//                             {Object.entries(invalidNicDetails).map(([fileName, errors]) => (
//                                 <li key={fileName}>
//                                     <p className="font-semibold">{fileName} - {errors.length} invalid NICs</p>
//                                     <ul className="list-disc pl-5">
//                                         {errors.map((error, index) => (
//                                             <li key={index}>{error}</li>
//                                         ))}
//                                     </ul>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//             </div>
//         </div>
//     );
// };

// export default Home;



import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import nicaccount from '../Assets/account-svgrepo-com.svg';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Title from '../Components/Title';

const Home = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [invalidNicDetails, setInvalidNicDetails] = useState({});

    // Handle file input change
    const handleFileChange = (e) => {
        setFiles((prevFiles) => [...prevFiles, ...Array.from(e.target.files)]);
        // Clear messages and invalid NIC details when new files are added
        clearMessagesAndInvalidNics();
    };

    // Handle drag and drop
    const handleDrop = (e) => {
        e.preventDefault();
        setFiles((prevFiles) => [...prevFiles, ...Array.from(e.dataTransfer.files)]);
        // Clear messages and invalid NIC details when new files are dropped
        clearMessagesAndInvalidNics();
    };

    // Clear messages and invalid NIC details when new files are added
    const clearMessagesAndInvalidNics = () => {
        setError(null);
        setSuccessMessage('');
        setInvalidNicDetails({});
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        clearMessagesAndInvalidNics(); // Clear existing messages and invalid NIC details before upload

        const formData = new FormData();
        files.forEach((file) => {
            formData.append('files', file);
        });

        try {
            const token = Cookies.get('access_token');
            console.log("JWT Token:", token);

            if (!token) {
                setError('No access token found. Please sign in.');
                setLoading(false);
                return;
            }

            const response = await axios.post('http://localhost:8080/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });

            setSuccessMessage('Files uploaded successfully!');
            setInvalidNicDetails(response.data.invalidNicDetails || {});

            // Clear files after successful upload
            setFiles([]);

        } catch (error) {
            console.error('Error uploading files:', error.response || error.message);
            setError('Failed to upload files. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className='m-5 mb-20 flex flex-col items-center' data-aos="fade-down" data-aos-duration="800">
            <Title title="NIC Validation File Upload"/>
            <div className="file-upload-form shadow-inner shadow-gray-500 p-10 rounded-2xl w-[800px] py-16 bg-gradient-to-r from-green-300 via-yellow-300 to-sky-200 ">

                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/3 flex justify-center items-center'
                         data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <img src={nicaccount} alt="nicaccount" className="h-[200px] w-auto rounded-full mr-2" />
                    </div>

                    <div
                        className='w-full md:w-2/3 backdrop-blur-xl bg-[rgba(255,255,255,0.5)] p-5 rounded-2xl shadow-inner shadow-gray-500'
                        data-aos="fade-left"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 flex flex-col items-center">
                                {/* Drag and Drop Icon */}
                                <AiOutlineCloudUpload className="text-6xl text-gray-600 mb-4" />
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <p>Uploaded Files:</p>
                                <ul>
                                    {files.map((file, index) => (
                                        <li key={index}>{file.name}</li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-[150px] p-2 bg-blue-500 text-white rounded"
                            >
                                {loading ? 'Uploading...' : 'Upload Files'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Display Success or Error Message */}
                {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}

                {/* Display invalid NIC details */}
                {/* {Object.keys(invalidNicDetails).length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-red-500 font-bold mb-2">Invalid NIC Details:</h2>
                        <ul>
                            {Object.entries(invalidNicDetails).map(([fileName, errors]) => (
                                <li key={fileName}>
                                    <p className="font-semibold">{fileName} - {errors.length} invalid NICs</p>
                                    <ul className="list-disc pl-5">
                                        {errors.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )} */}


                {/* Display invalid NIC counts */}
                {Object.keys(invalidNicDetails).length > 0 && (
                    <div className="mt-6">
                        <h2 className="text-red-500 font-bold mb-2">Invalid NIC Count:</h2>
                        <ul>
                            {Object.entries(invalidNicDetails).map(([fileName, errors]) => (
                                <li key={fileName}>
                                    <p className="font-semibold">
                                        {fileName} - {errors.length} invalid NIC(s)
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
)}

            </div>
        </div>
    );
};

export default Home;
