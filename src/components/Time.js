import React from 'react'
const Time = ({ time, text }) => {

  return (
    <div className='container f2 ma5'>
    <label className='white'>{time}</label>
    <p className='white'>{text}</p>
    </div>

  )

}
export default Time;
