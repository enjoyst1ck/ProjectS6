import React from 'react'

export default function PopularSearch() {
	const popularSearch = [
		{
			content: "Studio apartment",
			href: "#"
		},
		{
			content: "Resident house",
			href: "#"
		},
		{
			content: "Countryside",
			href: "#"
		},
		{
			content: "Family house",
			href: "#"
		},
	];
	return (
		<div className='p-3 w-[45%] m-auto'>
			<div className='bg-white w-full h-full p-2 rounded-2xl flex justify-around items-center '>
				<div className='p-1 px-2'>
					<span className='text-lg font-bold'>Popular search:</span>
				</div>
				{popularSearch.map((item, index) => (
					<div key={index} className=''>
						<a href={item.href} className='p-2 px-6 bg-slate-800 text-white flex justify-center items-center rounded-xl text-lg'>{item.content}</a>
					</div>
				))}
			</div>
		</div>
	)
}
