import React from 'react'

export default function SearchBarHome() {
	return (
		<div className='mt-10 p-3 w-[50%] m-auto'>
			<div className='bg-white w-full h-full p-2 rounded-2xl flex '>
				<div className='p-1 px-4 w-[25%] flex flex-col justify-center'>
					<select className='text-xl'>
						<option className='text-lg'>Property type</option>
						<option className='text-lg'>Property1</option>
						<option className='text-lg'>Property2</option>
					</select>
					<p className='p-1 text-black text-opacity-75'>Select property type</p>
				</div>

				<div className='p-1 px-4 w-[25%] flex flex-col justify-center border border-y-0 border-black border-opacity-10'>
					<select className='text-xl'>
						<option className='text-lg'>Location</option>
						<option className='text-lg'>Property1</option>
						<option className='text-lg'>Property2</option>
					</select>
					<p className='p-1 text-black text-opacity-75'>Select Location</p>
				</div>

				<div className='p-1 px-4 w-[25%] flex flex-col justify-center'>
					<select className='text-xl'>
						<option className='text-lg'>Offer type</option>
						<option className='text-lg'>Property1</option>
						<option className='text-lg'>Property2</option>
					</select>
					<p className='p-1 text-black text-opacity-75'>Select offer type</p>
				</div>

				<div className='p-1 px-4 w-[25%] flex flex-col justify-center'>
					<button className='bg-slate-800 text-2xl p-2 flex justify-center items-center text-white rounded-2xl hover:scale-105 transition-all'>Search</button>
				</div>
			</div>
		</div>
	)
}
