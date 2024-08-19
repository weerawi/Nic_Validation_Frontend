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
    <Fragment>
        <Header />
        <div className="bg-white overflow-x-hidden ">
            <main className='px-5 py-3 w-full lg:w-[1300px] max-w-[1500px] mx-auto pt-24'>
            {props.children}
            </main>
        </div>
        <Footer />
    </Fragment>
  )
}

export default Layout