import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import nicaccount from '../Assets/account-svgrepo-com.svg';
import Title from '../Components/Title';

const Home = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files)); // Convert FileList to Array
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage('');

        const formData = new FormData();
        files.forEach((file, index) => {
            formData.append('files', file); // Append all files with the 'files' key
        });

        try {
            const token = Cookies.get('access_token');
            console.log("JWT Token:", token); // Log the token to check

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
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading files:', error.response || error.message);
            setError('Failed to upload files. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='m-5 mb-20 flex flex-col items-center' data-aos="fade-down" data-aos-duration="800"> 
                <Title title="NIC Validation File Upload"/>
            <div className="file-upload-form shadow-2xl p-10 rounded-2xl w-[800px] py-16
            bg-gradient-to-r from-green-300 via-yellow-300 to-sky-200 ">

                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/3 flex justify-center items-center' 
                        data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <img src={nicaccount} alt="nicaccount" className="h-[200px] w-auto rounded-full mr-2" />
                    </div>

                    <div className='w-full md:w-2/3 backdrop-blur-xl bg-[rgba(255,255,255,0.5)]  p-5 rounded-2xl shadow-inner shadow-gray-500' data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-1">Upload Files:</label>
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleFileChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-[150px] p-2 bg-blue-500 text-white rounded"
                            >
                                {loading ? 'Uploading...' : 'Upload Files'}
                            </button>
                            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                            {error && <p className="text-red-500 mt-4">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
