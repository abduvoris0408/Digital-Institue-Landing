'use client'

import Carousel from '@/components/carousel'
import MotionWrapper from '@/components/motion-wrapper'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Play } from 'lucide-react'

export default function Hero() {
	const heroContent = {
		badge: 'Yuridik kadrlarni qayta tayyorlash va malakasini oshirish instituti',
		title: 'Raqamli institut platformasi',
		subtitle:
			"Yuridik sohadagi eng so'nggi bilimlar va amaliy ko'nikmalarni o'rganing. Professional rivojlanish yo'lida ishonchli hamkorimiz bo'ling.",
		stats: [
			{ value: '2500+', label: "Yurist o'quvchilar" },
			{ value: '150+', label: 'Yuridik kurslar' },
			{ value: '98%', label: 'Muvaffaqiyat darajasi' },
		],
	}

	const courseItems = [
		{
			id: 1,
			image: '/slider1.jpg',
			title: 'Mediatorlik kurslari',
			description:
				"Nizolarni tinch yo'l bilan hal qilish bo'yicha professional tayyorgarlik",
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('courses'),
			},
		},
		{
			id: 2,
			image: '/slider2.jpg',
			title: 'Qisqa muddatli kurslar',
			description:
				"Tezkor o'qitish dasturlari orqali yangi bilimlarni egallash",
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('courses'),
			},
		},
		{
			id: 3,
			image: '/slider3.jpeg',
			title: 'Malaka oshirish kurslari',
			description:
				'Mavjud bilimlarni yangilash va chuqurlashtirish dasturlari',
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('courses'),
			},
		},
		{
			id: 4,
			image: '/slider4.jpeg',
			title: 'Qayta tayyorlash kurslari',
			description: "Yangi mutaxassislik yo'nalishlarini o'zlashtirish",
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('courses'),
			},
		},
		{
			id: 5,
			image: '/slider1.jpg',
			title: 'Arxiv ishi kurslari',
			description:
				"Huquqiy hujjatlar bilan ishlash va arxivlash bo'yicha o'qitish",
			action: {
				label: 'Batafsil',
				onClick: () => scrollToSection('courses'),
			},
		},
	]

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center justify-center overflow-hidden pt-22 lg:pt-20'
		>
			<div className='absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20' />

			<div className='container mx-auto px-6 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<MotionWrapper animation='fade-in' delay={0.4}>
						<div className='space-y-6'>
							<div className='inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4'>
								{heroContent.badge}
							</div>

							<h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight'>
								{heroContent.title.split(' ').map((word, i) => (
									<span
										key={i}
										className='inline animate-fade-in-up'
										style={{
											animationDelay: `${i * 0.1}s`,
										}}
									>
										{word === 'Raqamli' ? (
											<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover-glow'>
												{word}
											</span>
										) : word === 'institut' ? (
											<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 hover-glow'>
												{word}
											</span>
										) : word === 'platformasi' ? (
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
								{heroContent.subtitle}
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
								{heroContent.stats.map((stat, index) => (
									<div
										key={index}
										className='cursor-pointer hover-scale'
									>
										<div className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
											{stat.value}
										</div>
										<div className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</MotionWrapper>

					<MotionWrapper animation='scale-in' delay={0.4}>
						<div className='relative'>
							<Carousel
								items={courseItems}
								autoPlay={true}
								interval={5000}
								showDots={true}
								showArrows={true}
							/>
						</div>
					</MotionWrapper>
				</div>
			</div>
		</section>
	)
}
