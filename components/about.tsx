'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
	Award,
	BookOpen,
	Building,
	FileText,
	Gavel,
	Scale,
	Shield,
	Users,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function About() {
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.1 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	const features = [
		{
			icon: Scale,
			title: 'Fuqarolik huquqi',
			description:
				"Fuqarolik-huquqiy munosabatlar, shartnomalar va mulkiy huquqlar bo'yicha chuqur bilimlar",
			color: 'from-blue-500 to-blue-600',
		},
		{
			icon: Gavel,
			title: 'Jinoyat huquqi',
			description:
				"Jinoyat-huquqiy masalalar, sud jarayoni va himoya strategiyalari bo'yicha mutaxassislik",
			color: 'from-purple-500 to-purple-600',
		},
		{
			icon: Building,
			title: "Ma'muriy huquq",
			description:
				"Davlat boshqaruvi, ma'muriy javobgarlik va xizmat huquqi sohasidagi bilimlar",
			color: 'from-indigo-500 to-indigo-600',
		},
		{
			icon: Shield,
			title: 'Mehnat huquqi',
			description:
				"Mehnat munosabatlari, ijtimoiy himoya va kadrlar bilan ishlash bo'yicha ekspertiza",
			color: 'from-teal-500 to-teal-600',
		},
		{
			icon: FileText,
			title: 'Soliq huquqi',
			description:
				"Soliq qonunchiligini qo'llash, soliq nizolari va moliyaviy huquq masalalari",
			color: 'from-emerald-500 to-emerald-600',
		},
		{
			icon: Users,
			title: 'Oilaviy huquq',
			description:
				'Oilaviy munosabatlar, nikoh-oilaviy nizolar va bolalar huquqlarini himoya qilish',
			color: 'from-rose-500 to-rose-600',
		},
		{
			icon: Award,
			title: 'Xalqaro huquq',
			description:
				'Xalqaro shartnomalar, diplomatik huquq va xalqaro arbitraj jarayonlari',
			color: 'from-amber-500 to-amber-600',
		},
		{
			icon: BookOpen,
			title: 'Konstitutsiya huquqi',
			description:
				'Konstitutsiyaviy asoslar, inson huquqlari va davlat hokimiyati tuzilishi',
			color: 'from-cyan-500 to-cyan-600',
		},
	]

	return (
		<section
			id='about'
			ref={sectionRef}
			className='py-20 relative overflow-hidden'
		>
			<div className='absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10' />

			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float' />
				<div
					className='absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float'
					style={{ animationDelay: '3s' }}
				/>
				<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-pulse-slow' />
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='text-center mb-16'>
					<h2
						className={`text-3xl md:text-4xl  font-bold text-gray-900 dark:text-white mb-6 ${
							isVisible ? 'animate-fade-in' : 'opacity-0'
						}`}
					>
						Yuridik{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
							sohalarda
						</span>{' '}
						chuqur mutaxassislik
					</h2>
					<p
						className={`text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed ${
							isVisible ? 'animate-fade-in' : 'opacity-0'
						}`}
						style={{ animationDelay: '0.2s' }}
					>
						Huquqning barcha asosiy sohalarida professional bilimlar
						va amaliy ko'nikmalar. Zamonaviy yuridik amaliyot
						talablariga mos keluvchi keng qamrovli ta'lim
						dasturlari.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
					{features.map((feature, index) => (
						<Card
							key={index}
							className={`card-hover border-0 shadow-lg glass-morphism backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ${
								isVisible ? 'animate-slide-up' : 'opacity-0'
							}`}
							style={{ animationDelay: `${0.1 * (index + 1)}s` }}
						>
							<CardContent className='p-6 text-center'>
								<div
									className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
								>
									<feature.icon className='h-7 w-7 text-white' />
								</div>
								<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>
									{feature.title}
								</h3>
								<p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
