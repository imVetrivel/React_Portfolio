import '../assets/css/core.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import React from 'react'
import {User2} from 'lucide-react'
const Navbar = () => {

  const Navlinks = [{
    title: "Profile",
    path: "/"
  },
  {
    title: "Projects",
    path: "/Projects"
  },
  {
    title: "Contact",
    path: "/Contact"
  }]

  return (
    <div className="flex flex-rpw h-[10%] bg-black/80 mt-1">
      <div className="flex text-3xl m-3 text-white w-1/2 pl-4 font-bold">
        <h1>Vetrivel K</h1>
      </div>
      <div className="flex items-center justify-center w-1/2 font-bold">
        <ul className='flex'>
          {
            Navlinks.map((navdata, index) => (
              // <NavLink key={index} to={navdata.path} >
                <li className='text-xl text-white mx-3' >{navdata.title}</li>
              // </NavLink> 
            ))
          }

        </ul>
        <User2 className='h-10 w-10 text-white rounded-full border-2'/>
      </div>
    </div>
  )
}

export { Navbar };