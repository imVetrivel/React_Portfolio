import '../assets/css/core.css'
import profileimg from '../assets/img/profileimg.png'

const Profilepage = ()=>{
	return(
		<>
		<div className='flex flex-row items-center w-[60%]  '>
			<div>
				<h1 className='font-semibold text-3xl'>Hello! I am Vetrivel.K Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum provident eaque id dolores laborum reprehenderit debitis quasi? Sapiente neque illo provident voluptate voluptatibus quae atque sunt ipsam maxime, nesciunt officiis dolor pariatur earum ea eius.</h1>
			</div>
			<div className=' '>
				<img src={profileimg} alt="Profile photo" />
			</div>
		</div>
		</>
	)
}

export { Profilepage };