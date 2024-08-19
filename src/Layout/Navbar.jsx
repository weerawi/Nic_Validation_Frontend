import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Assets/mobios_logo.jpg'; // Ensure this path is correct
import { NicContext } from '../Context/NicContext';
import Cookies from 'js-cookie';
import Mobilemenu from './Mobilemenu';
import { Drawer, makeStyles } from '@material-ui/core';
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";



const navData = [
    { name: 'upload', path: '/home' },
    { name: 'Nic details', path: '/nicform' },
    { name: 'dashboard', path: '/summary' }, 
];

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 250,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 250,
      background: "rgb(0,0,0 )",
    },
  }));


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const classes = useStyles();

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
        
        <nav className={`${ !isFixed ? 'bg-black   top-0 py-5 px-24' : '   '} flex flex-row justify-between rounded-bl-full rounded-br-full   uppercase text-sm md:text-base tracking-widest  text-white`}>
            <Drawer
                anchor="left" // Set the anchor to the left side
                open={mobileMenu}
                onClose={() => setMobileMenu(false)}
                classes={{
                paper: classes.drawerPaper, // Use the defined styles for the paper
                }}
                //  style={{backgroundColor: 'cyan'}}
            >
                <Mobilemenu mobileclick={setMobileMenu} />
            </Drawer>


            {/* Logo */}
            <div className='flex items-center'>
                <Link to="/home" className="flex items-center">
                    <img  src={Logo} alt="logo" className="h-14 w-14 rounded-full mr-2" />
                    <span className='font-bold tracking-widest uppercase text-xl'>NIC Validation</span>
                </Link>
            </div>

            <div className='hidden lg:flex   '> 
                
                
                {/* Main Navigation */}
                <div className='flex space-x-4 items-center justify-center'>
                    {navData.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className={`hover:text-red-500 ${pathname === link.path ? 'text-red-500 font-bold' : ''}`}
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
            
            

             {/* Mobile icon start */}
             <div
              className="w-10 lg:w-12 h-10 lg:h-12 rounded-full flex lg:hidden justify-center 
                      items-center text-gray-500 bg-gray-300 hover:bg-gray-500 hover:text-gray-200 cursor-pointer   shadow-gray-800 shadow-inner "
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? (
                <VscChromeClose className="text-[16px]" />
              ) : (
                <BiMenuAltRight
                  className="text-[20px] z-10"
                  // onClick={() => setMobileMenu(true)}
                />
              )}
            </div>
            {/* Mobile icon end */}

             
        </nav>
    );
}

export default Navbar;
