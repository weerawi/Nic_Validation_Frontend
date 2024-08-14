import React from 'react';
import DashboardData from '../Assets/DashboardData';
import { FcBusinessman ,FcBusinesswoman} from "react-icons/fc";
import { PieChart } from 'react-minimal-pie-chart';

 

const Summary = () => {
  const { totalRecords, maleCount, femaleCount } = DashboardData;

  return (

    <div className='flex flex-col md:flex-row mb-20 items-center justify-center'>
      <div className=' p-4  my-20 md:mx-20  py-10 rounded-3xl shadow-2xl sm:w-[250px] md:w-[400px]' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"> 
        <div className='mb-4'>
          <h2 className='text-xl'>Total Records: {totalRecords}</h2>
        </div>
        <div className=' mb-4 flex group  '>
          <FcBusinessman  className='text-2xl group-hover:animate-bounce' /> 
          <h2 className='text-xl'>Male Count: {maleCount}</h2>
        </div>
        <div className=' mb-4 flex group '> 
          <FcBusinesswoman  className='text-2xl group-hover:animate-bounce' />  
          <h2 className='text-xl'>Female Count: {femaleCount}</h2>
        </div>
      </div>

      <div className='max-w-[500px] w-auto sm:w-[300px] md:w-[400px] '  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        <PieChart
          data={[
            { title: 'male', value: maleCount, color: '#5B99C2' },
            { title: 'female', value: femaleCount, color: '#FF4E88' }, 
          ]}
        />;
      </div>
 
    </div>
  );
};

export default Summary;