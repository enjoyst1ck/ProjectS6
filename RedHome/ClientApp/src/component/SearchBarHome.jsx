import React from 'react'

export default function SearchBarHome() {
	return (
		<div className='lg:mt-10 mt-5 p-3 2xl:w-[55%] xl:w-[65%] lg:w-[78%] w-96 m-auto max-w-4xl'>
			<div className='bg-white w-full h-full p-2 rounded-2xl flex flex-wrap'>
				<div className='p-1 px-4 lg:w-[25%] w-96 flex flex-col justify-center'>
					<select className='text-xl'>
						<option className='text-lg'>Property type</option>
						<option className='text-lg'>Property1</option>
						<option className='text-lg'>Property2</option>
					</select>
					<p className='p-1 text-black text-opacity-75'>Select property type</p>
				</div>

				<div className='p-1 px-4 lg:w-[25%] w-96 flex flex-col justify-center lg:border lg:border-y-0 lg:border-black lg:border-opacity-10'>
					<select className='text-xl'>
						<option className='text-lg'>Location</option>
						<option className='text-lg'>Property1</option>
						<option className='text-lg'>Property2</option>
					</select>
					<p className='p-1 text-black text-opacity-75'>Select Location</p>
				</div>

				<div className='p-1 px-4 lg:w-[25%] w-96 flex flex-col justify-center'>
					<select className='text-xl'>
						<option className='text-lg'>Offer type</option>
						<option className='text-lg'>Property1</option>
						<option className='text-lg'>Property2</option>
					</select>
					<p className='p-1 text-black text-opacity-75'>Select offer type</p>
				</div>

				<div className='p-1 px-4 lg:w-[25%] w-96 flex flex-col justify-center'>
					<button className='bg-slate-800 text-2xl p-2 flex justify-center items-center text-white rounded-2xl hover:scale-105 transition-all'>Search</button>
				</div>
			</div>
		</div>
	)
}
