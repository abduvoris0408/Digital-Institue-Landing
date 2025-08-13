'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Building2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Partners() {
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

	const partners = [
		{
			name: 'Adliya Vazirligi',
			logo: '/adliya.png',
			category: 'Davlat organi',
			description: "O'zbekiston Respublikasi Adliya vazirligi",
		},
		{
			name: 'Oliy Majlis',
			logo: '/advokatlar.png',
			category: 'Qonunchilik',
			description: "O'zbekiston Respublikasi Oliy Majlisi",
		},
		{
			name: 'TDYU',
			logo: '/lawstate.png',
			category: "Ta'lim",
			description: 'Toshkent Davlat Yuridik Universiteti',
		},
		{
			name: 'Adliya Akademiyasi',
			logo: '/notarial.png',
			category: 'Akademiya',
			description: 'Adliya xodimlarini tayyorlash akademiyasi',
		},
		{
			name: 'Huquqshunoslar Uyushmasi',
			logo: '/sudyalarmaktabi.png',
			category: 'Uyushma',
			description: "O'zbekiston Huquqshunoslar Uyushmasi",
		},
		{
			name: 'UZSTAT',
			logo: '/uzstat.png',
			category: 'Statistika',
			description: "Davlat statistika qo'mitasi",
		},
	]

	return (
		<section
			id='partners'
			ref={sectionRef}
			className='py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
		>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<div
						className={`inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6 ${
							isVisible ? 'animate-fade-in' : 'opacity-0'
						}`}
					>
						<Building2 className='h-4 w-4' />
						Biz ko'plab tashkilotlar bilan hamkorlik qilamiz
					</div>
				</div>

				{/* Autoplay Slider */}
				<div className='mb-16 overflow-hidden'>
					<div
						className={`partners-slide-container flex gap-8 w-max ${
							isVisible ? 'partners-animate' : ''
						}`}
					>
						{partners.map((partner, index) => (
							<PartnerCard key={`first-${index}`} {...partner} />
						))}
						{/* Duplicate set for infinite loop */}
						{partners.map((partner, index) => (
							<PartnerCard key={`second-${index}`} {...partner} />
						))}
					</div>
				</div>

				{/* CTA Block */}
				<div
					className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
					style={{ animationDelay: '0.8s' }}
				>
					<div className='relative bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-white overflow-hidden'>
						<div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10" />
						<div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32' />
						<div className='absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24' />

						<div className='relative z-10 text-center'>
							<h3 className='text-3xl md:text-4xl font-bold mb-6'>
								Bizga Qo'shiling
							</h3>
							<p className='text-xl mb-8 opacity-90 max-w-2xl mx-auto'>
								Yuridik ta'limda yangi standartlarni yaratish
								uchun hamkorlik qiling
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Button
									size='lg'
									variant='secondary'
									className='bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4'
								>
									Hamkor Bo'lish
									<ArrowRight className='ml-2 h-5 w-5' />
								</Button>
								<Button
									size='lg'
									variant='outline'
									className='border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-4 bg-transparent'
								>
									Batafsil Ma'lumot
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes partnersSlide {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.partners-animate {
					animation: partnersSlide 15s linear infinite;
					will-change: transform;
				}
				.partners-slide-container:hover {
					animation-play-state: paused;
				}
				@media (prefers-reduced-motion: reduce) {
					.partners-animate {
						animation: none;
					}
				}
			`}</style>
		</section>
	)
}

function PartnerCard({
	name,
	logo,
	category,
	description,
}: {
	name: string
	logo: string
	category: string
	description: string
}) {
	return (
		<div className='group relative  p-8  hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-60'>
			<div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
			<div className='relative z-10'>
				<div className='flex items-center justify-center mb-6'>
					<div className='w-40 h-40 bg-gray-50 dark:bg-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
						<img
							src={logo || '/placeholder.svg'}
							alt={name}
							className='max-w-16 max-h-16 object-contain'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
