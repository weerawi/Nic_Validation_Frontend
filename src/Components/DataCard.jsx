import React from 'react'

const DataCard = ({ bgColor, hoverColor, text, totalRecords, Icon }) => {
  return (
    <div
      style={{
        backdropFilter: 'blur(10px)',
      }}
      className={`text-white cursor-pointer group ${bgColor} hover:backdrop-blur-2xl hover:scale-105 transition-all
      duration-700 rounded-xl flex flex-col items-center p-5  shadow-md hover:shadow-xl`}
      onMouseEnter={(e) => e.currentTarget.classList.add(hoverColor)}
      onMouseLeave={(e) => e.currentTarget.classList.remove(hoverColor)}
    >
      <Icon className='text-2xl group-hover:animate-bounce' />
      <p className='text-lg'>{text}</p>
      <h2 className='text-2xl group-hover:animate-bounce font-semibold'>
        {totalRecords}
      </h2>
    </div>
  )
}

export default DataCard;
