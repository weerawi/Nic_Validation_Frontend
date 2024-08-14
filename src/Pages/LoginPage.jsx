import React, { useContext, useState } from 'react';
import Logo from '../Assets/mobios_logo.jpg';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NicContext } from '../Context/NicContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '', // For sign-up form
    confirmPassword: '', // For sign-up form
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and sign-up
   
  const { setIsSignedIn } = useContext(NicContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
        if (isSignUp) {
            // Sign-up logic
            const response = await axios.post(
                'http://localhost:8080/signup',
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }
            );

            console.log('Sign-up successful!', response.data);
            toast.success('Sign-up successful!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });

            localStorage.setItem('user_id', response.data.user_id);
            Cookies.set('access_token', response.data.token, { expires: 7 });

             
        } else {
            // Login logic
            const response = await axios.post(
                'http://localhost:8080/signin',
                {
                    username: formData.username,
                    password: formData.password,
                }
            );

            console.log('Login successful!', response.data);
            const { token } = response.data;

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
        }
    } catch (error) {
        let errorMessage = isSignUp ? 'Sign-up failed. Please try again.' : 'Login failed. Please check your credentials.';

        if (error.response && error.response.data) {
            errorMessage = error.response.data || errorMessage;
        }

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



  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//         if (isSignUp) {
//             // Sign-up logic
//             const response = await axios.post(
//                 'http://localhost:8080/signup',
//                 {
//                     username: formData.username,
//                     email: formData.email,
//                     password: formData.password,
//                 }
//             );

//             console.log('Sign-up successful!', response.data);
//             toast.success('Sign-up successful!', {
//                 position: "top-right",
//                 autoClose: 2000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 theme: "dark",
//             });

//             // Save user_id and token
//             localStorage.setItem('user_id', response.data.user_id); // Assuming the backend sends user_id
//             Cookies.set('access_token', response.data.token, { expires: 7 }); // Assuming 'token' is the correct field name

//             // Redirect to dashboard
//             // window.location.href = '/';
//         } else {
//             // Login logic
//             const response = await axios.post(
//                 'http://localhost:8080/signin',
//                 {
//                     username: formData.username,
//                     password: formData.password,
//                 }
//             );

//             console.log('Login successful!', response);
//             console.log('Response Data:', response.data);
//             console.log('Response Headers:', response.headers);

//             // Retrieve the token from the 'Authorization' header
//             const token = response.headers['authorization']?.split(' ')[1] || response.data.token;

//             // Store the token in a cookie or localStorage
//             Cookies.set('access_token', token, { expires: 1 });

//             if (token) {
//                 Cookies.set('access_token', token, { expires: 1 });
//                 setIsSignedIn(true);
//                 // Redirect to dashboard
//                 window.location.href = '/home';
//             } else {
//                 toast.error('Token not received', {
//                     position: "top-right",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     theme: "dark",
//                 });
//             }
//         }
//     } catch (error) {
//         let errorMessage = isSignUp ? 'Sign-up failed. Please try again.' : 'Login failed. Please check your credentials.';

//         // Extract backend error message if available
//         if (error.response && error.response.data) {
//             errorMessage = error.response.data || errorMessage;
//         }

//         console.error(isSignUp ? 'Sign-up failed:' : 'Login failed:', error.response ? error.response.data : error.message);

//         toast.error(errorMessage, {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "dark",
//         });
//     } finally {
//         setLoading(false);
//     }
// };

 

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'http://localhost:8080/forgotpassword', // Update this URL with your actual endpoint
        {
          email: formData.email,
        }
      );
      console.log('Password reset email sent!', response.data);
      setForgotPasswordMessage('A password reset link has been sent to your email.');
    } catch (error) {
      console.error('Failed to send password reset email:', error);
      setError('Failed to send password reset email. Please check your email.');
    } finally {
      setLoading(false);
    }
  };

  return (

    <>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

    
    <div className="flex flex-col items-center justify-center mx-auto mt-14 mb-20 py-4 min-h-[500px] max-w-[400px] bg-white rounded-3xl shadow-2xl">
      <img src={Logo} alt="Logo" className="h-28 mb-1" />
      <div className="w-80">
        <h2 className="text-3xl font-bold mb-4">
          {forgotPassword ? 'Forgot Password' : isSignUp ? 'Sign Up to mobiOs Nic Validation System' : 'Login to mobiOs Nic Validation System'}
        </h2>

        {forgotPassword ? (
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <label className="block mb-1">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              {loading ? 'Sending reset link...' : 'Send Password Reset Link'}
            </button>
            {forgotPasswordMessage && (
              <p className="text-green-500 mt-4">{forgotPasswordMessage}</p>
            )}
            <button
              type="button"
              className="w-full p-2 mt-4 text-gray-500 hover:text-blue-500 font-medium transition-all duration-500"
              onClick={() => setForgotPassword(false)}
            >
              Back to Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>


            {isSignUp &&<div className="mb-4">
              <label className="block mb-1">Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>}

             
              <div className="mb-4">
                <label className="block mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
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
              {loading ? (isSignUp ? 'Signing up...' : 'Logging in...') : (isSignUp ? 'Sign Up' : 'Login')}
            </button>
          </form>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {!forgotPassword && (
          <>
            <p className="mt-4 text-sm cursor-pointer text-gray-500 hover:text-blue-500 font-normal transition-all duration-500" onClick={() => setForgotPassword(true)}>
              Forgot password?
            </p>
            <p className="mt-2 text-sm cursor-pointer text-gray-500 hover:text-blue-500 font-normal transition-all duration-500" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
            </p>
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default LoginPage;

