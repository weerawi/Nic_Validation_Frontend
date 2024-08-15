import React, { useState  } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import { toast } from 'react-toastify';

const SignIn = ({ setLoading, setIsSignedIn, setError }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!formData.username || !formData.password) {
        toast.error('All fields are required.', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(
        'http://localhost:8080/signin',
        {
          username: formData.username,
          password: formData.password,
        }
      );

      const token = response.headers['authorization']?.split(' ')[1] || response.data.token;

      if (token) {
        Cookies.set('access_token', token, { expires: 1 });
        setIsSignedIn(true);
        window.location.href = '/home';
      } else {
        toast.error('Token not received', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data || 'Login failed. Please check your credentials.';
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
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
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </form>
  );
};

export default SignIn;
