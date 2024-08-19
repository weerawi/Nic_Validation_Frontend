import React from 'react'

const Title = (props) => {
  return (
    <div>
        <h2 className='font-semibold text-2xl tracking-widest flex items-center justify-center pb-10' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
           {props.title}</h2>
 

    </div>
  )
}

export default Title