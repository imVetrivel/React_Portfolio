import React from 'react'
import '../assets/css/core.css'

 const Homepage = () => {
  return (
	<div className='flex flex-col items-center' >
    <h1 className='font-extrabold text-6xl'>
      WELCOME TO MY PORTFOLIO!!!
    </h1>
    <p className='font-semibold text-3xl content-center'>
      I made this using React
    </p>
  </div>
  )
}

export { Homepage };