import '../assets/css/core.css'
import profileimg from '../assets/img/profileimg.png'

const Profilepage = ()=>{
	return(
		<>
		
		<div className='flex  w-[70%] flex-row text-white h-[100%] justify-center items-center'>
			<div className=' w-2/3'>
				<h1 className='font-semibold text-3xl'>Hello! I am Vetrivel.K </h1>
				<p className='text-xl pt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt porro placeat eum quod id quo asperiores qui voluptatem. Animi quo perferendis enim, ea at adipisci rem temporibus ut quas incidunt.</p>
			</div>
			<div className='w-1/3 px-10 '>
				<img src={profileimg} alt="Profile photo" className='h-fit w-fit content-center rounded-full' />
			</div>
		</div>
		</>
	)
}

export { Profilepage };