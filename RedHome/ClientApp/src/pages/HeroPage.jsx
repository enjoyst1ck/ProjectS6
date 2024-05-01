import React from 'react'
import MenuHomePage from '../component/MenuHomePage'
import SearchBarHome from '../component/SearchBarHome'
import PopularSearch from '../component/PopularSearch'

export default function HeroPage() {
	return (
		<>
			<MenuHomePage />

			<div className="w-[100%] h-[95vh] p-3">
				<div className="h-full w-full object-contain rounded-3xl home-bg">
					<div className='bg-black w-full h-full rounded-3xl bg-opacity-40 flex justify-center items-center'>
						<div className='w-full'>
							<div className='flex flex-col text-white text-center p-3 w-full cursor-default'>
								<h1 className='text-5xl font-bold'>Journey to your perfect home</h1>
								<p className='mt-8 text-3xl m-auto xl:w-[50%]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
							</div>
							
							<SearchBarHome/>
							<PopularSearch/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
