import React from 'react'
import { ArrowLeftToLine, Github } from 'lucide-react'
const ProjectDesc = ( props ) => {
	return (
		<>
			<div className='h-screen w-screen bg-gray-400/60  z-50 absolute top-0 right-0 flex justify-center items-center'>
				<div className='bg-black text-white h-auto w-[70%] p-10 rounded-xl'>
					<ArrowLeftToLine className='absolute top-5 left-5 text-black size-8' onClick={props.exit} />

					<h1 className='text-2xl font-bold'>Title - {props.data.title}</h1>
						<br />
					<h1 className='text-2xl font-bold'>Description :-</h1>

					<p> &nbsp; &nbsp; &nbsp; {props.data.desc}</p>
					<br />
					<p>Tools - {props.data.Tools}</p>
					<p>Language - {props.data.Language}</p>
					<br />
					<div className='flex  '>
					<a href={props.data.gitRepo} target='_blank' className='hover:scale-150 duration-700 hover:text-black hover:bg-white rounded-full'><Github /></a>
					</div>
				</div>
			</div>
		</>
	)
}


export { ProjectDesc };