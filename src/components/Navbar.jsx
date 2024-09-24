import '../assets/css/core.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import React from 'react'
import { User2 } from 'lucide-react'
const Navbar = () => {

  const Navlinks = [
    {
      title: "Profile",
      path: "/profile"
    },
    {
      title: "Project",
      path: "/project"
    },
    {
      title: "Contact",
      path: "/contact"
    }]

  return (
    <>
      <div className="flex flex-col md:flex-row bg-black/80 mt-1 sticky top-0 h-auto md:h-[100%] items-center">

        <div className="flex items-center justify-between w-full md:w-1/2 ml-1 text-white">
          <NavLink to='/' className={' rounded-md'}>
            <h1 className='text-2xl md:text-3xl p-3 font-bold'>Vetrivel K</h1>
          </NavLink>

        </div>
        <div className="flex items-center justify-end w-full md:w-1/2 font-bold mr-4">
          <ul className='flex flex-row'>
            {
              Navlinks.map((navdata, index) => (
                <li key={index} className='text-lg md:text-xl text-white'>
                  <NavLink to={navdata.path} className={'p-4 m-3 rounded-md'}>
                    {navdata.title}
                  </NavLink>
                </li>
              ))
            }

          </ul>
          <User2 className='h-8 w-8 md:h-10 md:w-10 text-white rounded-full border-2' />
        </div>
      </div>
    </>

  )
}

export { Navbar };