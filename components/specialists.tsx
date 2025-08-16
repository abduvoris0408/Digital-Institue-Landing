'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'

interface Specialist {
	id: number
	name: string
	position: string
	rating: number
	image: string
	certificates: string[]
	description: string
}

const specialists: Specialist[] = [
	{
		id: 1,
		name: 'Fayziev Xayriddin Sirojiddinovich',
		position: 'Pedagoglar markazi mudiri',
		rating: 5,
		image: '/Xayriddin.png',
		certificates: [
			'Yuridik fanlar doktori',
			'Arbitraj sudyasi',
			'Notarius',
		],
		description: 'Yuqori tajribaga ega mutaxassis',
	},
	{
		id: 2,
		name: 'Jalolov O`tkir Sayfuddinovich',
		position: 'Tizizm rahbari',
		rating: 5,
		image: '/otkir.jpg',
		certificates: [
			'Yuridik fanlar doktori',
			'Arbitraj sudyasi',
			'Notarius',
		],
		description: 'Yuqori tajribaga ega mutaxassis',
	},
	{
		id: 3,
		name: 'Xursanov Rustam Xolmuratovich',
		position: 'Institut direktorning birinchi o`rinbosari',
		rating: 5,
		image: '/xursanovrustam.jpg',
		certificates: [
			'Yuridik fanlar doktori',
			'Arbitraj sudyasi',
			'Notarius',
		],
		description: 'Yuqori tajribaga ega mutaxassis',
	},
	{
		id: 4,
		name: "Alimov Ro'zman To`ramurodovich",
		position: 'Tizim administratori',
		rating: 5,
		image: '/rozman.jpg',
		certificates: [
			'Yuridik fanlar doktori',
			'Arbitraj sudyasi',
			'Notarius',
		],
		description: 'Yuqori tajribaga ega mutaxassis',
	},
]

export default function Specialists() {
	return (
		<section
			id='specialists'
			className='py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden'
		>
			<div className='absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' />
			<div className='absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' />

			<div className='container mx-auto px-6 sm:px-6 relative z-10'>
				<div className='text-center mb-12 sm:mb-16'>
					<h4 className='text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						Bizning Mutaxassislar
					</h4>
					<p className='text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4'>
						Tajribali yuridik ekspertlar va o'qituvchilar
					</p>
					<div className='w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 sm:mt-6 rounded-full' />
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
					{specialists.map(s => (
						<div
							key={s.id}
							className='bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
						>
							<div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6'>
								<div className='relative flex-shrink-0'>
									<Image
										width={80}
										height={80}
										src={
											s.image ||
											'/placeholder.svg?height=80&width=80&query=professional headshot'
										}
										alt={s.name}
										className='w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-blue-200 dark:border-blue-800'
										sizes='(max-width: 640px) 64px, 80px'
									/>
								</div>
								<div className='flex-1 text-center sm:text-left'>
									<h3 className='font-bold text-sm sm:text-base lg:text-lg text-gray-900 dark:text-white leading-tight mb-1'>
										{s.name}
									</h3>
									<p className='text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-medium'>
										{s.position}
									</p>
								</div>
							</div>

							<div className='flex items-center justify-center sm:justify-between mb-3 sm:mb-4'>
								<div className='flex items-center gap-1'>
									<Star className='w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current' />
									<Star className='w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current' />
									<Star className='w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current' />
									<Star className='w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current' />
									<Star className='w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current' />
									<span className='font-semibold text-sm text-gray-900 dark:text-white'>
										{s.rating}
									</span>
								</div>
							</div>

							<div className='border-t border-gray-200 dark:border-gray-700 pt-3 sm:pt-4'>
								<p className='text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left'>
									{s.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
