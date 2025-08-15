'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Award, BookOpen, LampWallDown, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Statistics() {
	const [isVisible, setIsVisible] = useState(false)
	const [counters, setCounters] = useState({
		courses: 0,
		specialists: 0,
		users: 0,
		certificates: 0,
	})
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					// Start counter animation
					const targets = {
						courses: 120,
						specialists: 150,
						users: 1500,
						certificates: 900,
					}
					const duration = 2000
					const steps = 60
					const stepDuration = duration / steps

					Object.keys(targets).forEach(key => {
						const target = targets[key as keyof typeof targets]
						const increment = target / steps
						let current = 0

						const timer = setInterval(() => {
							current += increment
							if (current >= target) {
								current = target
								clearInterval(timer)
							}
							setCounters(prev => ({
								...prev,
								[key]: Math.floor(current),
							}))
						}, stepDuration)
					})
				}
			},
			{ threshold: 0.1 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const stats = [
		{
			icon: BookOpen,
			value: counters.courses,
			suffix: '+',
			label: 'Kurslar',
			color: 'from-blue-500 to-blue-600',
		},
		{
			icon: Users,
			value: counters.specialists,
			suffix: '+',
			label: 'Mutaxassislar',
			color: 'from-purple-500 to-purple-600',
		},
		{
			icon: Users,
			value: counters.users,
			suffix: '+',
			label: 'Foydalanuvchilar',
			color: 'from-indigo-500 to-indigo-600',
		},
		{
			icon: Award,
			value: counters.certificates,
			suffix: '+',
			label: 'Bitirganlar',
			color: 'from-teal-500 to-teal-600',
		},
	]

	return (
		<section
			id='statistics'
			ref={sectionRef}
			className='py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20'
		>
			<div className='container mx-auto px-6'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Content */}
					<div>
						<h2
							className={`text-3xl md:text-4xl  font-bold text-gray-900 dark:text-white mb-6 ${
								isVisible ? 'animate-fade-in' : 'opacity-0'
							}`}
						>
							Yuridik kadrlar malakasini oshirish bo‘yicha
							raqamlar
						</h2>

						<p
							className={`text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed ${
								isVisible ? 'animate-fade-in' : 'opacity-0'
							}`}
							style={{ animationDelay: '0.2s' }}
						>
							Biz yuridik sohaga oid mutaxassislarning bilim va
							ko‘nikmalarini zamonaviy metodlar orqali doimiy
							ravishda rivojlantiramiz. Raqamlar esa bu yo‘ldagi
							muvaffaqiyatlarimizni ko‘rsatib turadi.
						</p>

						<Button
							size='lg'
							className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group ${
								isVisible ? 'animate-fade-in' : 'opacity-0'
							}`}
							style={{ animationDelay: '0.4s' }}
						>
							<LampWallDown className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform' />
							Dastur haqida batafsil
						</Button>
					</div>

					
					<div className='grid grid-cols-2 gap-6'>
						{stats.map((stat, index) => (
							<Card
								key={index}
								className={`card-hover border-0 bg-white/30 backdrop:backdrop-blur-2xl ${
									isVisible ? 'animate-scale-in' : 'opacity-0'
								}`}
								style={{
									animationDelay: `${0.1 * (index + 1)}s`,
								}}
							>
								<CardContent className='p-8 text-center'>
									<div
										className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
									>
										<stat.icon className='h-8 w-8 text-white' />
									</div>
									<div className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2'>
										{stat.value}
										{stat.suffix}
									</div>
									<div className='text-gray-600 dark:text-gray-400 font-medium'>
										{stat.label}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
