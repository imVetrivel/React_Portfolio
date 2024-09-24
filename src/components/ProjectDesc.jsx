import React from 'react'
import {ArrowLeftToLine} from 'lucide-react'
 const ProjectDesc = ({exit}) => {
	return (
		<>
			<div className='h-screen w-screen bg-gray-400/60  z-50 absolute top-0 left-0 flex justify-center items-center'>
				<div className='bg-yellow-300 h[60%] w-'>
					<ArrowLeftToLine className='absolute top-5 left-5' onClick={exit}/>

					<h1>Description</h1>
				</div>
			</div>
		</>
	)
}


export {ProjectDesc};