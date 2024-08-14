import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Assets/mobios_logo.jpg'; // Ensure this path is correct
import { NicContext } from '../Context/NicContext';
import Cookies from 'js-cookie';

const navData = [
    { name: 'home', path: '/home' },
    { name: 'Nic details', path: '/nicform' },
    { name: 'summary', path: '/summary' }, 
];

const Navbar = () => {
    const logout = () => {
        // Clear tokens or any authentication-related data
        localStorage.removeItem('user_id');
        Cookies.remove('access_token');
      
        // Redirect to login page
        window.location.href = '/';
      };

    const location = useLocation();
    const pathname = location.pathname;

    const {isFixed, isSignedIn} = useContext(NicContext);

    return (
        <nav className={`flex ${ !isFixed ? 'bg-black  rounded-bl-full rounded-br-full   top-0 py-10 px-24' : '   '} items-center justify-between uppercase text-sm md:text-base lg:tracking-widest  text-white`}>
            {/* Logo */}
            <div className='flex items-center'>
                <Link to="/home" className="flex items-center">
                    <img  src={Logo} alt="logo" className="h-14 w-14 rounded-full mr-2" />
                    <span className='font-bold tracking-widest uppercase text-xl'>NIC Validation</span>
                </Link>
            </div>
            
            {/* Main Navigation */}
            <div className='flex space-x-4'>
                {navData.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className={`hover:text-red-500 ${pathname === link.path ? 'text-red-500 font-bold' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

             {/* Logout Button */}
            {isSignedIn && <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
                Logout
            </button>}
        </nav>
    );
}

export default Navbar;
