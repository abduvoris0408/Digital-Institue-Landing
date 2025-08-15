'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { coursesData } from '@/lib/course-data'
import { ArrowRight, Clock, Star, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Courses() {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setIsVisible(true)
			},
			{ threshold: 0.1 }
		)
		if (sectionRef.current) observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [])

	const showcaseItems = coursesData.map((course, index) => ({
		id: course.id,
		title: course.title,
		description: (course.description || '').slice(0, 160) + '…',
		image: '/coursecard1.png', // public/ ichida bo‘lsin
		category: course.category,
		students: course.students || Math.floor(Math.random() * 300) + 50,
		rating: Number((course.rating ?? 4.6 + Math.random() * 0.3).toFixed(1)),
		duration: course.duration,
		level:
			index % 3 === 0
				? "Boshlang'ich"
				: index % 3 === 1
				? "O'rta"
				: "Ilg'or",
		instructor: course.instructor,
	}))

	return (
		<section
			id='courses'
			ref={sectionRef}
			className='py-20 bg-gray-50/50 dark:bg-gray-900/30'
		>
			<div className='container mx-auto px-6'>
				<div className='text-center mb-16'>
					<h2
						className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 ${
							isVisible ? 'animate-fade-in' : 'opacity-0'
						}`}
					>
						Bizning kurslarimiz
					</h2>
					<p
						className={`text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 ${
							isVisible ? 'animate-fade-in' : 'opacity-0'
						}`}
						style={{ animationDelay: '0.1s' }}
					>
						Zamonaviy yuridik bilimlar va professional ko‘nikmalarni
						rivojlantirish uchun maxsus ishlab chiqilgan kurslar
						to‘plami
					</p>
				</div>

				{/* Responsive grid: 1 / 2 / 3 / 4 ustun */}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-16'>
					{showcaseItems.map((item, index) => (
						<Card
							key={item.id}
							className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 rounded-2xl flex flex-col h-full ${
								isVisible ? 'animate-fade-in' : 'opacity-0'
							}`}
							style={{ animationDelay: `${0.06 * (index + 1)}s` }}
						>
							{/* Rasm (16:9) */}
							<div className='relative w-full aspect-video overflow-hidden'>
								<Image
									src={item.image || '/placeholder.svg'}
									alt={item.title}
									fill
									priority={index < 4}
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
									className='object-cover transition-transform duration-500 group-hover:scale-105'
								/>
								<Badge
									className='absolute top-3 left-3 bg-white/90 text-gray-800 backdrop-blur-sm'
									variant='secondary'
								>
									{item.category}
								</Badge>
								<div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-800'>
									{item.level}
								</div>
							</div>

							{/* Kontent */}
							<CardContent className='p-6 flex flex-col flex-1'>
								<h3 className='text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2'>
									{item.title}
								</h3>

								<p className='text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-1 line-clamp-3'>
									{item.description}
								</p>

								<div className='flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4'>
									<div className='flex items-center gap-1'>
										<Clock className='h-4 w-4' />
										<span className='whitespace-nowrap'>
											{item.duration}
										</span>
									</div>
									<div className='flex items-center gap-1'>
										<Users className='h-4 w-4' />
										<span>{item.students}</span>
									</div>
									<div className='flex items-center gap-1'>
										<Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
										<span>{item.rating.toFixed(1)}</span>
									</div>
								</div>

								<Link
									href={`/courses/${item.id}`}
									className='mt-auto'
								>
									<Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 cursor-pointer'>
										Kursni ko‘rish
										<ArrowRight className='ml-2 h-4 w-4' />
									</Button>
								</Link>
							</CardContent>
						</Card>
					))}
				</div>

				{/* CTA */}
				<div
					className={`text-center ${
						isVisible ? 'animate-fade-in' : 'opacity-0'
					}`}
					style={{ animationDelay: '0.9s' }}
				>
					<div className='bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden'>
						<div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10" />
						<div className='relative z-10'>
							<h3 className='text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight'>
								Yuridik Karyerangizni <br />
								<span className='text-yellow-300'>
									Rivojlantiring
								</span>
							</h3>
							<p className='text-base md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto'>
								150+ dan ortiq kurslar, 1000+ muvaffaqiyatli
								bitiruvchilar va davlat tomonidan tan olingan
								sertifikatlar
							</p>
							<div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center'>
								<Button
									size='lg'
									variant='secondary'
									className='bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg cursor-pointer'
									onClick={() =>
										document
											.getElementById('courses')
											?.scrollIntoView({
												behavior: 'smooth',
											})
									}
								>
									Barcha Kurslar
									<ArrowRight className='ml-2 h-5 w-5' />
								</Button>
								<Button
									size='lg'
									variant='outline'
									className='border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent cursor-pointer'
									onClick={() =>
										document
											.getElementById('faq')
											?.scrollIntoView({
												behavior: 'smooth',
											})
									}
								>
									Bepul Konsultatsiya
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
