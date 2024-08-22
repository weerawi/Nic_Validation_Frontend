import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc"; 
import { RiPassValidFill,RiPassExpiredFill } from "react-icons/ri";
import { FaIdCard } from "react-icons/fa6";

import { PieChart } from '@mui/x-charts';
import NICPieChart from '../Components/NICPieChart'; 
import DataCard from '../Components/DataCard';
import Title from '../Components/Title';
import FileDataBarChart from '../Components/FileDataBarChart';
import SubTitle from '../Components/SubTitle';

const Summary = () => {
  const [summary, setSummary] = useState({
    totalValidRecords: 0,
    totalInvalidRecords: 0,
    maleUsers: 0,
    femaleUsers: 0,
    fileNameCounts: {},
    validCounts: {}, // Add this line
    invalidCounts: {} // Add this line
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

  const handleDownloadInvalidNICs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/download/invalid-nics/pdf', {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'invalid_nic_records_report.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading the invalid NIC report:', error);
    }
  };



  return (
    <div className='mb-10 m-5 flex flex-col items-center justify-center w-full'>
      <Title title="NIC Validation Summary" />

      
      {/* top data set */}
      <div className='bg-gray-100 shadow-lg rounded-2xl w-full p-10 grid grid-flow-row md:grid-flow-col md:grid-cols-5 gap-10' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
        <DataCard
          bgColor='bg-zinc-600'
          hoverColor='bg-zinc-900'
          text='Total Records'
          totalRecords={summary.totalValidRecords + summary.totalInvalidRecords}
          Icon={FaIdCard}
        />

        <DataCard
          bgColor='bg-red-600'
          hoverColor='bg-red-900'
          text='Total Valid Records'
          totalRecords={summary.totalValidRecords}
          Icon={RiPassValidFill}
        />

        <DataCard
          bgColor='bg-green-600'
          hoverColor='bg-green-900'
          text='Total Invalid Records'
          totalRecords={summary.totalInvalidRecords}
          Icon={RiPassExpiredFill}
        />

        <DataCard
          bgColor='bg-sky-600'
          hoverColor='bg-sky-900'
          text='Male Count'
          totalRecords={summary.maleUsers}
          Icon={FcBusinessman}
        />

        <DataCard
          bgColor='bg-purple-600'
          hoverColor='bg-purple-900'
          text='Female Count'
          totalRecords={summary.femaleUsers}
          Icon={FcBusinesswoman}
        />
      </div>


      {/* second level chart */}
      <div className='flex w-full flex-col lg:flex-row my-5 mt-10 justify-evenly gap-10'>
         {/* left side */}
        <div className='w-full  flex flex-col items-center justify-between gap-y-5 '>
          <div className='hover:scale-105 transition-all duration-700 bg-slate-200 shadow-lg py-10 px-10 rounded-2xl max-w-[700px] w-auto md:w-[600px]' data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <NICPieChart fileNameCounts={summary.fileNameCounts || {}} /> 
            <SubTitle title="nic valid data distribute among the files"/>
          </div>

          <div className='hover:scale-105 transition-all duration-700 bg-slate-200 shadow-lg py-10 px-20 rounded-2xl max-w-[700px] w-auto   md:w-[600px]' data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
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
            <SubTitle title="male and female "/>
          </div>
          
        </div>



         {/* right side */}
        <div className='w-full flex  flex-col items-center justify-center gap-10'>
          <div className='hover:scale-105 transition-all duration-700 bg-slate-200 shadow-lg py-10 px-20 rounded-2xl  w-auto md:w-[600px]' data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
            <FileDataBarChart
              validCounts={summary.validCounts || {}} // Fallback to empty object
              invalidCounts={summary.invalidCounts || {}} // Fallback to empty object
            />
            <SubTitle title="valid and invalid nic according to each file"/>
          </div>

          <div className='hover:scale-105 transition-all duration-700 bg-slate-200 shadow-lg py-10 px-10 rounded-2xl  w-auto   md:w-[600px]' data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
             <div className='group flex justify-around items-center'>
              <SubTitle title="download invalid nic report"/>
              <button className='p-5 bg-red-500 text-white animate-bounce group-hover:animate-none rounded-xl items-center justify-center'
              onClick={handleDownloadInvalidNICs}> Download</button>
             </div>
          </div>
        </div>

      </div>
  
    </div>
  );
};

export default Summary;
