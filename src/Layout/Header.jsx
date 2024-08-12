import React, { useContext } from 'react'
 
 
import Navbar from './Navbar';
import { NicContext } from '../Context/NicContext';




const Header = () => {

  const {isFixed,isScrolled} = useContext(NicContext);


  return (
    <div   
    style={{
    //   backdropFilter: isFixed ? 'blur(10px)':'',
    //   backgroundColor: isScrolled || isFixed ? 'transparent' : 'rgba(0, 0, 0, 0.8)',

    //   borderBottom: isScrolled || isFixed ? '' : '1px solid rgba(255,255,255, 0.55) ',
      
      transition: "background 0.8s ease-in-out",
      position:  'fixed' ,
      top: 0 , 
      // height: '4.5rem',
      zIndex: isFixed ? 100 : 1,
      width: '100%', 
    }}
 
  
  >
      
      <div className={`${ isFixed ? '   w-full lg:w-[80%] max-w-[1300px] mx-auto' : ' '}`}>

   

         

        <div 
        style={{  
            backdropFilter:isScrolled ?'blur(10px)':'',
            background:isScrolled ?'rgba(0,0,0,0.8)':'' , 
            transition: "background 0.5s ease-in-out",
             
              boxShadow: isFixed? " rgba(255,255,255, 0.55) 0px -4px 10px 0px inset":'',
          
      }}
       className={`rounded-full  ${ isFixed ? 'my-2 py-9 px-5 mt-7 ' : ' '}`} 
       >
            <Navbar/>
        </div>
        
        
    </div>


    </div>
  )
}

export default Header