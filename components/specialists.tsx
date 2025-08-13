'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'

interface Specialist {
	id: number
	name: string
	nameEn: string
	position: string
	positionEn: string
	experience: string
	experienceEn: string
	specialization: string
	specializationEn: string
	rating: number
	students: number
	location: string
	locationEn: string
	image: string
	certificates: string[]
	certificatesEn: string[]
	description: string
	descriptionEn: string
}

const specialists: Specialist[] = [
	{
		id: 1,
		name: 'Xasanov Shavkatbek Xaybatullayevich',
		nameEn: 'Xasanov Shavkatbek Xaybatullayevich',
		position: 'Bo`lim boshlig`i',
		positionEn: 'Doctor of Legal Sciences',
		rating: 5,
		locationEn: 'Tashkent',
		image: '/Shafkatbek.jpg',
		certificates: [
			'Yuridik fanlar doktori',
			'Arbitraj sudyasi',
			'Notarius',
		],
		certificatesEn: [
			'Doctor of Legal Sciences',
			'Arbitration Judge',
			'Notary',
		],
		description: 'Yuqori tajribaga ega mutaxassis',
		descriptionEn: 'Specialist with 15 years of experience in civil law',
		experience: '',
		experienceEn: '',
		specialization: '',
		specializationEn: '',
		students: 0,
		location: '',
	},
	{
		id: 2,
		name: 'Jalolov O`tkir Sayfuddinovich',
		nameEn: 'Jalolov O`tkir Sayfuddinovich',
		position: 'Tizizm rahbari',
		positionEn: 'Doctor of Legal Sciences',
		rating: 5,
		locationEn: 'Tashkent',
		image: '/otkir.jpg',
		certificates: [
			'Yuridik fanlar doktori',
			'Arbitraj sudyasi',
			'Notarius',
		],
		certificatesEn: [
			'Doctor of Legal Sciences',
			'Arbitration Judge',
			'Notary',
		],
		description: 'Yuqori tajribaga ega mutaxassis',
		descriptionEn: 'Specialist with 15 years of experience in civil law',
		experience: '',
		experienceEn: '',
		specialization: '',
		specializationEn: '',
		students: 0,
		location: '',
	},
	{
		id: 3,
		name: 'Xursanov Rustam Xolmuratovich',
		nameEn: 'Xursanov Rustam Xolmuratovich',
		position: 'Institut direktorning birinchi o`rinbosari',
		positionEn: 'Doctor of Legal Sciences',
		rating: 5,
		locationEn: 'Tashkent',
		image: '/xursanovrustam.jpg',
		certificates: [
			'Yuridik fanlar doktori',
			'Arbitraj sudyasi',
			'Notarius',
		],
		certificatesEn: [
			'Doctor of Legal Sciences',
			'Arbitration Judge',
			'Notary',
		],
		description: 'Yuqori tajribaga ega mutaxassis',
		descriptionEn: 'Specialist with 15 years of experience in civil law',
		experience: '',
		experienceEn: '',
		specialization: '',
		specializationEn: '',
		students: 0,
		location: '',
	},
	{
		id: 4,
		name: 'Alimov Ro‘zman To`ramurodovich',
		nameEn: 'Alimov Ro‘zman To`ramurodovich',
		position: 'Tizim administratori',
		positionEn: 'Doctor of Legal Sciences',
		rating: 5,
		locationEn: 'Tashkent',
		image: '/rozman.jpg',
		certificates: [
			'Yuridik fanlar doktori',
			'Arbitraj sudyasi',
			'Notarius',
		],
		certificatesEn: [
			'Doctor of Legal Sciences',
			'Arbitration Judge',
			'Notary',
		],
		description: 'Yuqori tajribaga ega mutaxassis',
		descriptionEn: 'Specialist with 15 years of experience in civil law',
		experience: '',
		experienceEn: '',
		specialization: '',
		specializationEn: '',
		students: 0,
		location: '',
	},
]

export default function Specialists() {
	return (
		<section
			id='specialists'
			className='py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden'
		>
			<div className='absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' />
			<div className='absolute bottom-0 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float' />

			<div className='container mx-auto px-6 relative z-10'>
				{/* Sarlavha */}
				<div className='text-center mb-16'>
					<h4 className='text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
						Bizning Mutaxassislar
					</h4>
					<p className='text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
						Tajribali yuridik ekspertlar va o‘qituvchilar
					</p>
					<div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full' />
				</div>

				{/* GRID: 1 / 2 / 4 ustun */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{specialists.map(s => (
						<div
							key={s.id}
							className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
						>
							<div className='flex items-center gap-4 mb-6'>
								<div className='relative'>
									<Image
										width={160}
										height={160}
										src={s.image || '/placeholder.svg'}
										alt={s.name}
										className='w-40 h-40 rounded-full object-cover border-4 border-blue-200 dark:border-blue-800'
									/>
								</div>
								<div className='flex-1'>
									<h3 className='font-bold text-lg text-gray-900 dark:text-white'>
										{s.name}
									</h3>
									<p className='text-blue-600 dark:text-blue-400 font-medium'>
										{s.position}
									</p>
								</div>
							</div>

							<div className='flex items-center justify-between mb-4'>
								<div className='flex items-center gap-1'>
									<Star className='w-4 h-4 text-yellow-500 fill-current' />
									<span className='font-semibold text-gray-900 dark:text-white'>
										{s.rating}
									</span>
								</div>
							</div>

							<div className='border-t border-gray-200 dark:border-gray-700 pt-4'>
								<p className='text-sm text-gray-600 dark:text-gray-300'>
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
