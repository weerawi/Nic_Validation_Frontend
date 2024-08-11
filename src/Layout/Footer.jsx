
import React from "react";  
import logo from "../Assets/mobios_logo.jpg"

import { MdCall, MdEmail ,MdLocationOn} from "react-icons/md";

import {
  TiSocialLinkedin,
  TiSocialFacebook, 
  TiSocialInstagram,
} from "react-icons/ti";

 
const Footer = () => {
    return (
        <footer 
         className="bg-black  text-gray-200 pt-8   pb-3 relative font-custom-robot ">

        <svg 
          className="absolute top-0 w-full h-5 -mt-4  lg:-mt-8 lg:h-8   sm:-mt-6 sm:h-6 text-black  "
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path  
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>

 

      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className=" flex justify-between max-w-[1000px] mx-auto">
           
             
            <div className="md:flex justify-between items-center hidden ">
              <div data-aos="zoom-in-up"
                data-aos-delay="200"
                data-aos-duration="800">
                <img src={logo} className="rounded-md" alt="" width={100}/>
              </div>
              
              
               
            </div>


            <div className="">
              <div>
                <a 
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
                  href="tel:+940114366998" 
                  className='rounded-2xl group p-3 gap-2 w-96 flex items-center'>
                  <MdCall className='text-xl group-hover:animate-pulse' /> 0114 366 998
                </a>

                <a 
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
                 href="mailto:hrmobios1@gmail.com" 
                  className='rounded-2xl group p-3 gap-2 w-96 flex items-center'>
                  <MdEmail className='text-xl group-hover:animate-pulse'/> hrmobios1@gmail.com
                </a>
                <a
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
                 href="https://www.google.com/maps/place/mobiOs+(Pvt)+Ltd./@6.8801661,79.8558999,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae25b007f1d630b:0x96fb46170709196f!8m2!3d6.8801661!4d79.8584748!16s%2Fg%2F11vpccxhw_?entry=ttu" target="_blank" rel="noopener noreferrer" 
                className='rounded-2xl group p-3 gap-2 w-96 flex items-center'>
                  <MdLocationOn className='text-xl group-hover:animate-pulse'/> Delgahawatta Rd, Colombo
                </a>

                <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                 className="flex group items-center mt-4 text-xl space-x-4 sm:mt-0 p-3">

                {/* <div className="flex gap-4 pt-3 text-xl"> */}
                  <a href="https://www.facebook.com/mobios.lk/">
                    <TiSocialFacebook className="text-2xl hover:text-blue-600 hover:animate-pulse" />
                  </a>
                  <a href="https://www.facebook.com/mobios.lk/">
                    <TiSocialLinkedin className="text-2xl hover:text-sky-600 hover:animate-pulse" />
                  </a> 
                  <a href="https://www.facebook.com/mobios.lk/">
                    <TiSocialInstagram className="text-2xl hover:text-pink-500 hover:animate-pulse" />
                  </a> 
                  
                </div>
            
              </div> 
            </div>
            
          
        </div>
        <div className="flex flex-col justify-center pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2024 mobiOs. All rights reserved.
          </p>
          
        </div>
      </div>

            
        </footer>
    );
};

export default Footer;