import React, { useState } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

const Home = () => {
    const [files, setFiles] = useState({
        file1: null,
        file2: null,
        file3: null,
        file4: null,
      });
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [successMessage, setSuccessMessage] = useState('');
    
      const handleFileChange = (e) => {
        setFiles({
          ...files,
          [e.target.name]: e.target.files[0],
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage('');
      
        const formData = new FormData();
        Object.keys(files).forEach((key) => {
          if (files[key]) {
            formData.append(key, files[key]);
          }
        });
      
        try {
          const token = Cookies.get('access_token');
          console.log("JWT Token:", token); // Log the token to check
      
          if (!token) {
            setError('No access token found. Please sign in.');
            setLoading(false);
            return;
          }
      
          const response = await axios.post('http://localhost:8080/api/nic/upload', formData, {
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
        
        <div className=' min-h-screen '>
            <div className="file-upload-form shadow-2xl p-10 rounded-2xl">
          <h2>Upload 4 Files</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">File 1:</label>
              <input
                type="file"
                name="file1"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">File 2:</label>
              <input
                type="file"
                name="file2"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">File 3:</label>
              <input
                type="file"
                name="file3"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">File 4:</label>
              <input
                type="file"
                name="file4"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              {loading ? 'Uploading...' : 'Upload Files'}
            </button>
            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
        </div>
        
      );
    };


export default Home