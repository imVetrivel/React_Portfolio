import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
       return (
        <>
            <div className='h-screen w-screen overflow-x-hidden '>

                <Navbar />
                <div className='h-[95vh] w-full flex flex-col justify-start items-center'>

                            <Outlet />

                </div>
            </div>
        </>
    )
}

export {Weblayout}