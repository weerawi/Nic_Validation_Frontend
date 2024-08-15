import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc"; 
import nicaccount from '../Assets/account-summary.svg' ; 
import { BarChart, PieChart } from '@mui/x-charts';

const Summary = () => {
  const [summary, setSummary] = useState({
    totalRecords: 0,
    maleUsers: 0,
    femaleUsers: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/summary');
        setSummary(response.data);
      } catch (error) {
        console.error('Error fetching summary data:', error);
      }
    };

    fetchSummary();
  }, []);

  const downloadReport = async (format) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/download/${format}`, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
      });

      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `NIC_Records_Report.${format}`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading report:', error);
    }
  };

  return (
    <div className='mb-10 flex flex-col items-center justify-center'>

      <h2 className='font-semibold text-4xl tracking-widest flex items-center justify-center pb-32' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">NIC Validation Summary</h2>
 

      <div className='h-[40vh] p-4 flex items-center justify-center  mb-20 md:mx-20 py-10 rounded-3xl shadow-2xl sm:w-[250px] md:w-[400px] bg-black text-white' data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        <div>
          <img src={nicaccount} alt="nicaccount" className="h-[100px] md:h-[150px] w-auto rounded-full mr-2 " />
        </div>
        <div>
          <div className='mb-4'>
            <h2 className='text-xl'>Total Records: {summary.totalRecords}</h2>
          </div>
          <div className='mb-4 flex group'>
            <FcBusinessman className='text-2xl group-hover:animate-bounce' />
            <h2 className='text-xl'>Male Count: {summary.maleUsers}</h2>
          </div>
          <div className='mb-4 flex group'>
            <FcBusinesswoman className='text-2xl group-hover:animate-bounce' />
            <h2 className='text-xl'>Female Count: {summary.femaleUsers}</h2>
          </div>
        </div>  
      </div>


      <div className='h-[80vh] flex flex-col md:flex-row mb-20 items-center justify-center'>
  
        <div className='max-w-[500px] w-auto sm:w-[300px] md:w-[400px]' data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
           
        <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
        </div>
  
        <div className='max-w-[500px] w-auto sm:w-[300px] md:w-[400px]' data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        <PieChart
            series={[
              {
                data: [
                  { id: 0, value: summary.maleUsers, label: 'Male' },
                  { id: 1, value: summary.femaleUsers, label: 'Female' },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>

      </div>
 
      <div className=' bg-black p-5 rounded-3xl w-[500px]'> 

      <h2 className='font-semibold text-white text-2xl tracking-widest flex items-center justify-center ' 
      data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        Download your report here
        </h2>
 


        <div className='mx-auto  my-10 flex flex-col md:flex-row justify-between items-center'data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">

          <div className='mb-4  '>
              <button
                onClick={() => downloadReport('csv')}
                className='p-2  bg-red-500 text-white rounded'
              >
                Download Pdf
              </button>
            </div>
            <div className='mb-4 '>
              <button
                onClick={() => downloadReport('csv')}
                className='p-2  bg-red-500 text-white rounded'
              >
                Download CSV
              </button>
            </div>
            <div className='mb-4  '>
              <button
                onClick={() => downloadReport('excel')}
                className='p-2  bg-red-500  text-white rounded'
              >
                Download Excel
              </button>
            </div>
          </div>
          
        </div>
      
    </div>
  );
};

export default Summary;
