import React from 'react'

const Title = (props) => {
  return (
    <div>
        <h2 className='font-semibold text-4xl tracking-widest flex items-center justify-center pb-24' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
           {props.title}</h2>
 

    </div>
  )
}

export default Title