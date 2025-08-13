'use client'

import Carousel from '@/components/carousel'
import MotionWrapper from '@/components/motion-wrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Play } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
	const [currentSlide, setCurrentSlide] = useState(0)

	const heroSlides = [
		{
			badge: 'Yuridik kadrlarni qayta tayyorlash va malakasini oshirish instituti',
			title: 'Uzluksiz kasbiy rivojlantirish platformasi',
			subtitle:
				"Yuridik sohadagi eng so'nggi bilimlar va amaliy ko'nikmalarni o'rganing. Professional rivojlanish yo'lida ishonchli hamkoringiz bo'ling.",
			image: '/placeholder.svg?height=600&width=800',
			stats: [
				{ value: '2500+', label: "Yurist o'quvchilar" },
				{ value: '150+', label: 'Yuridik kurslar' },
				{ value: '98%', label: 'Muvaffaqiyat darajasi' },
			],
		},
		{
			badge: "Huquqiy ta'lim sohasida yetakchi",
			title: 'Zamonaviy yuridik bilimlar markazi',
			subtitle:
				"Davlat va xususiy sektor uchun malakali yuridik kadrlar tayyorlash. Amaliy ko'nikmalar va nazariy bilimlarni mukammal uyg'unlashtiramiz.",
			image: '/placeholder.svg?height=600&width=800',
			stats: [
				{ value: '15+', label: 'Yillik tajriba' },
				{ value: '50+', label: "Ekspert o'qituvchilar" },
				{ value: '95%', label: 'Ishga joylashish' },
			],
		},
		{
			badge: "Sertifikatlangan ta'lim dasturlari",
			title: 'Professional yuristlar uchun maxsus kurslar',
			subtitle:
				"Fuqarolik, jinoyat, ma'muriy va boshqa huquq sohalarida chuqur bilimlar. Amaliy mashg'ulotlar va real ish tajribasi.",
			image: '/placeholder.svg?height=600&width=800',
			stats: [
				{ value: '25+', label: 'Huquq sohalari' },
				{ value: '1000+', label: 'Bitiruvchilar' },
				{ value: '100%', label: 'Sertifikat olish' },
			],
		},
	]

	const carouselItems = [
		{
			id: 1,
			image: '/slider2.jpg',
			description: "Malakali yuristlar uchun zamonaviy o'quv dasturlari",
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('courses'),
			},
		},
		{
			id: 2,
			image: '/slider1.jpg',
			description:
				'Davlat tomonidan tan olingan sertifikat olish imkoniyati',
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('about'),
			},
		},
		{
			id: 3,
			image: '/slider2.jpg',
			description: "Malakali yuristlar uchun zamonaviy o'quv dasturlari",
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('courses'),
			},
		},
		{
			id: 4,
			image: '/slider1.jpg',
			description:
				'Davlat tomonidan tan olingan sertifikat olish imkoniyati',
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('about'),
			},
		},
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % heroSlides.length)
		}, 6000)
		return () => clearInterval(interval)
	}, [heroSlides.length])

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'
		>
			<div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20' />

			<div className='container mx-auto px-4 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<MotionWrapper animation='fade-in' delay={0.2}>
						<div className='space-y-6'>
							<h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight'>
								{heroSlides[currentSlide].title
									.split(' ')
									.map((word, i) => (
										<span
											key={i}
											className='inline animate-fade-in-up'
											style={{
												animationDelay: `${i * 0.1}s`,
											}}
										>
											{word === 'kasbiy' ? (
												<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover-glow'>
													{word}
												</span>
											) : word === 'yuridik' ? (
												<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 hover-glow'>
													{word}
												</span>
											) : word === 'yuristlar' ? (
												<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover-glow'>
													{word}
												</span>
											) : (
												word
											)}{' '}
										</span>
									))}
							</h1>

							<p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-up'>
								{heroSlides[currentSlide].subtitle}
							</p>

							<div className='flex flex-col sm:flex-row gap-4 animate-scale-in'>
								<Button
									size='lg'
									onClick={() => scrollToSection('courses')}
									className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover-scale hover-glow'
								>
									<BookOpen className='mr-2 h-5 w-5 group-hover:rotate-12 transition-transform' />
									Kurslarni ko'rish
									<ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
								</Button>

								<Button
									variant='outline'
									size='lg'
									onClick={() => scrollToSection('about')}
									className='px-8 py-4 text-lg group border-2 glass-morphism hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer hover-scale'
								>
									<Play className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform' />
									Batafsil ma'lumot
								</Button>
							</div>

							<div className='grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700 animate-fade-in-up'>
								{heroSlides[currentSlide].stats.map(
									(stat, index) => (
										<div
											key={index}
											className=' cursor-pointer hover-scale'
										>
											<div className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 '>
												{stat.value}
											</div>
											<div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
												{stat.label}
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</MotionWrapper>

					<MotionWrapper animation='scale-in' delay={0.4}>
						<div className='relative'>
							<Carousel
								items={carouselItems}
								autoPlay={true}
								interval={8000}
								showDots={true}
								showArrows={true}
								className='shadow-2xl'
								loop={false}
							/>
						</div>
					</MotionWrapper>
				</div>
			</div>
		</section>
	)
}
