import '../assets/css/core.css'
import profileimg from '../assets/img/profileimg.png'

const Profilepage = ()=>{
	return(
		<>
		<div className='flex  w-[70%] flex-row '>
			<div className=' w-2/3'>
				<h1 className='font-semibold text-3xl'>Hello! I am Vetrivel.K Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum provident eaque id dolores laborum reprehenderit debitis quasi? Sapiente neque illo provident voluptate voluptatibus quae atque sunt ipsam maxime, nesciunt officiis dolor pariatur earum ea eius.</h1>
			</div>
			<div className='w-1/3 px-10'>
				<img src={profileimg} alt="Profile photo" className='h-fit w-fit content-center' />
			</div>
		</div>
		</>
	)
}

export { Profilepage };