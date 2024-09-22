import React from 'react'
import {Navbar} from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
       return (
        <>
            <div className='h-screen w-screen overflow-x-hidden '>
                <div className='h-[10vh]'>
                <Navbar />

                </div>

                <div className='h-[90vh] w-full flex justify-center items-center'>

                            <Outlet />

                </div>
            </div>
        </>
    )
}

export {Weblayout}