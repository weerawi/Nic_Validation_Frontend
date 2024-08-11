import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Assets/mobios_logo.jpg'; // Ensure this path is correct
import { NicContext } from '../Context/NicContext';

const navData = [
    { name: 'home', path: '/home' },
    { name: 'nicform', path: '/nicform' },
    { name: 'summary', path: '/summary' }, 
];

const Navbar = () => {


    const location = useLocation();
    const pathname = location.pathname;

    const {isFixed} = useContext(NicContext);

    return (
        <nav className={`flex ${ !isFixed ? 'bg-black p-4 rounded-full top-0' : ' '} items-center justify-between uppercase text-sm md:text-base lg:tracking-widest  text-white`}>
            {/* Logo */}
            <div className='flex items-center'>
                <Link to="/home" className="flex items-center">
                    <img src={Logo} alt="logo" className="h-14 w-14 rounded-full mr-2" />
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
        </nav>
    );
}

export default Navbar;
