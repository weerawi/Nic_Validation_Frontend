import React, { createContext, useEffect, useState } from 'react'


export const NicContext = createContext(null);


const NicContextProvider = (props) => {

    const [isFixed, setIsFixed] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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



    const contextValue = {
        isFixed,
        isScrolled,
    }

  return (
    <NicContext.Provider value = {contextValue}>
        {props.children}
    </NicContext.Provider>
  )
}

export default NicContextProvider;