import React, { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';

export const NicContext = createContext(null);


const NicContextProvider = (props) => {

    const [isFixed, setIsFixed] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false); // Track if user is signed in

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
            setIsFixed(true);
          } else {
            setIsScrolled(false);
            setIsFixed(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        // Check if user is signed in based on token presence
        const token = Cookies.get('access_token');
        if (token) {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
    }, []);

    const contextValue = {
        isFixed,
        isScrolled,
        isSignedIn,
        setIsSignedIn
    }

  return (
    <NicContext.Provider value = {contextValue}>
        {props.children}
    </NicContext.Provider>
  )
}

export default NicContextProvider;