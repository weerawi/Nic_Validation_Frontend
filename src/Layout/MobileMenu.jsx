import React, { useContext } from 'react'
import Cookies from 'js-cookie';
import { Link, useLocation } from 'react-router-dom';
import { NicContext } from '../Context/NicContext';

const navData = [
    { name: 'upload', path: '/home' },
    { name: 'Nic details', path: '/nicform' },
    { name: 'dashboard', path: '/summary' }, 
];


const Mobilemenu = ({mobileclick}) => {

    const logout = () => {
        // Clear tokens or any authentication-related data
        localStorage.removeItem('user_id');
        Cookies.remove('access_token');
      
        // Redirect to login page
        window.location.href = '/';
      };

    const location = useLocation();
    const pathname = location.pathname;
    const {  isSignedIn} = useContext(NicContext);

  return (
    <div>
        
        <div className='flex justify-center mt-20 text-white text-sm md:text-base uppercase tracking-widest'> 
                
                
                {/* Main Navigation */}
                <div className='flex flex-col space-y-8 items-center justify-center'>
                    {navData.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`hover:text-red-500 text-white${pathname === link.path ? 'text-red-500 font-bold' : ''}`}
                            onClick={() => mobileclick(false)} 
                        >
                            {link.name}
                        </Link>
                    ))}


                    {/* Logout Button */}
                        {isSignedIn && <button
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full uppercase tracking-widest"
                        >
                            Logout
                        </button>}
                </div> 
            </div>


    </div>
  )
}

export default Mobilemenu