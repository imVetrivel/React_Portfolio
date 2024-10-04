import '../assets/css/core.css'

import React, { useRef, useState } from 'react'



const ProjectCard = (props) => {

	return (
		<>
			<div className='h-[100%] w-[100vw] flex flex-wrap justify-center items-center space-x-10 '>
				{
					props.data.map((projectdata, index) =>
					(
						<div key={index} className="h-1/2 w-1/5 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow hover:scale-105 items-start hover:duration-700 ">
							<div className="w-[95%] h-[50%] bg-sky-300 rounded-2xl"><img src={projectdata.img} alt="" className='rounded-lg h-[100%] w-[100%] ' /></div>
							<div className="">
								<p className="font-extrabold">{projectdata.title}</p>
								<p className="">{projectdata.oneline}</p>
							</div>
							<button className="bg-sky-700 font-extrabold p-2 rounded-xl hover:bg-sky-500 transition-colors "onClick={()=>{props.open();props.setvalue(index);}}>See more</button>
						</div>
					))
				}
				
			</div>

		</>
	)
}

export { ProjectCard };