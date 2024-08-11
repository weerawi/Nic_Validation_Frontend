import React, { Fragment, useEffect } from 'react' 
import Footer from './Footer'
import Header from './Header'
import { useLocation } from 'react-router-dom';

const Layout = (props) => {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location.pathname]); 


  return (
    <div>
        <Header />
        <div className="bg-red-100 ">
            <main className='px-5 py-3 w-full lg:w-[80%] max-w-[1300px] mx-auto pt-28'>
            {props.children}
            </main>
        </div>
        <Footer />
    </div>
  )
}

export default Layout