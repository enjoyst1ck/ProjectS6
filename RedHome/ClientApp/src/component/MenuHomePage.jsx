import React from 'react'
import { FiLogIn } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

export default function MenuHomePage() {
	const centerLinks = [
		{
			name: "About us",
			href: "#"
		},
		{
			name: "Recently added",
			href: "#"
		},
		{
			name: "Liked",
			href: "#"
		}
	];

	const buttons = [
		{
			content: <FiLogIn size={22} color='white' />,
			href: "#"
		},
		{
			content: <IoAdd size={22} color='white' />,
			href: "#"
		},
		{
			content: "Contact us",
			href: "#"
		}
	];

	return (
		<nav className='h-[5vh] w-[100%] p-3 pt-5 flex items-center justify-between'>
			<div className='text-3xl font-bold'>
				<span className='text-red-600'>RED</span><span>HOME</span>
			</div>

			<div>
				<ul className='flex items-center h-full font-semibold text-lg'>
					{centerLinks.map((item, index) => (
						<li>
							<a href={item.href} className='mx-4 p-2 hover:text-red-600 transition-all' key={index}>{item.name}</a>
						</li>
					))}
				</ul>
			</div>

			<div>
				<div className='flex'>
					{buttons.map((item, index) => (
						<div className='mx-1' key={index}>
							<a href={item.href} className={item.content !== "Contact us" ? 
							  'size-10 flex justify-center items-center bg-red-600 rounded-lg' : 
							  'bg-slate-800 py-2 px-5 flex justify-center items-center rounded-lg text-white font-semibold'}>
								{item.content}
							</a>
						</div>
					))}
				</div>
			</div>
		</nav>
	)
}
