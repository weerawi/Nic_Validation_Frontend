import React, { useState } from 'react'
import Logo from '../Assets/mobios_logo.jpg';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginPage = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '', 
      });
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        try {
          const response = await axios.post(
            'http://localhost:8080/signin', //http://localhost:8000/users/login/',
            {
              username: formData.username,
              password: formData.password, 
            }
          );
          console.log('Login successful!', response.data);
          
          // Save user_id in local storage
          localStorage.setItem('user_id', response.data.user_id);
          localStorage.setItem('user_type', response.data.user_type);
    
    
          
          // Save access token in cookie
          Cookies.set('access_token', response.data.access, { expires: 7 }); // Expires in 7 days
          
          // Redirect to dashboard
          window.location.href = '/dashboard';
        } catch (error) {
          console.error('Login failed:', error);
          setError('Login failed. Please check your credentials.');
        } finally {
          setLoading(false);
        }
      };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img src={Logo} alt="Logo" className="h-24 mb-8" /> {/* Include the logo image */}
      <div className="w-80">
        <h2 className="text-3xl font-bold mb-4">Login to mobiOs Nic Validation System</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
           
          <div className="mb-4">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
       
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        
        {/* Message for enrollment */}
        <p className="mt-4 text-sm text-gray-600">To enroll, please email onboard@mathru.lk</p>
      </div>
    </div>
  )
}

export default LoginPage