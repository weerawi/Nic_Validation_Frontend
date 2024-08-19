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
      
      <div className={`${ isFixed ? '   w-full mx-auto   ' : ' '}`}>

   

         

        <div 
        style={{  
            backdropFilter:isScrolled ?'blur(10px)':'',
            background:isScrolled ?'rgba(0,0,0,0.8)':'' , 
            transition: "background 0.5s ease-in-out",
             
              boxShadow: isFixed? " rgba(255,255,255, 0.55) 0px -4px 10px 0px inset":'',
          
      }}
       className={`  rounded-bl-full rounded-br-full  ${ isFixed ? ' py-5 px-24 ' : ' '}`} 
       >
            <Navbar/>
        </div>
        
        
    </div>


    </div>
  )
}

export default Header