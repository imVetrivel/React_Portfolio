import '../assets/css/core.css'
import Java from '../assets/img/java.png'
import Weather from '../assets/img/weather.png'
import Node from '../assets/img/Nodefarm.png'
import React, { useRef, useState } from 'react'

import { ProjectDesc } from './ProjectDesc'

const ProjectCard = () => {

	const [visible, setvisible] = useState(false)
	const onClose = () => {
		setvisible(false);
	}

	const Projects = [
		{
			title: "Pet Shop",
			desc: "pet",
			img: Java
		},
		{
			title: "Weather App",
			desc: "weather",
			img: Weather
		},
		{
			title: "Node-Farm",
			desc: "node",
			img: Node
		}

	]

	return (
		<>
			<div className='flex space-x-6 flex-wrap justify-center items-center'>
				{
					Projects.map((projectdata, index) =>
					(
						<div key={index} className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
							<div className="w-[95%] h-[50%] bg-sky-300 rounded-2xl"><img src={projectdata.img} alt="" className='h-[100%]' /></div>
							<div className="">
								<p className="font-extrabold">{projectdata.title}</p>
								<p className="">4 popular types of cards in UI design.</p>
							</div>
							<button className="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors" onClick={() => setvisible(true)}>See more</button>
						</div>
					))
				}
				{
					visible && <ProjectDesc exit={onClose} />
				}
			</div>

		</>
	)
}

export { ProjectCard };