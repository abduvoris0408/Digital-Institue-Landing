'use client'

import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
	const handleLogin = () => {
		window.open('https://digital-admin.nextdevteam.uz/signin', '_blank')
	}

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<footer className='bg-gray-900 text-white'>
			<div className='container mx-auto px-4 py-16'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 text-center sm:text-left'>
					{/* Company Info */}
					<div className='lg:col-span-1'>
						<div
							className='flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-6 cursor-pointer'
							onClick={() => scrollToSection('hero')}
						>
							<div className='bg-white rounded-xl flex items-center justify-center p-1'>
								<Image
									src='/logo1.png'
									alt='Logo'
									width={40}
									height={40}
								/>
							</div>
							<div className='text-gray-200 text-sm leading-snug mt-2 sm:mt-0'>
								<p>Yuridik kadrlarni qayta tayyorlash</p>
								<p>va malakasini oshirish instituti</p>
							</div>
						</div>

						<div className='space-y-4 text-gray-300'>
							<div className='flex flex-col sm:flex-row items-center sm:items-start gap-2'>
								<Phone className='h-5 w-5 text-blue-400' />
								<div>
									<p className='font-medium text-white'>
										Bog'lanish
									</p>
									<p>71-200-02-35</p>
								</div>
							</div>

							<div className='flex flex-col sm:flex-row items-center sm:items-start gap-2'>
								<Mail className='h-5 w-5 text-blue-400' />
								<div>
									<p className='font-medium text-white'>
										Email
									</p>
									<p>uzmarkaz@adliya.uz</p>
								</div>
							</div>

							<div className='flex flex-col sm:flex-row items-center sm:items-start gap-2'>
								<MapPin className='h-5 w-5 text-blue-400' />
								<div>
									<p className='font-medium text-white'>
										Manzil
									</p>
									<p>Toshkent sh., Mirzo Ulug‘bek tumani</p>
								</div>
							</div>
						</div>

						<div className='flex justify-center sm:justify-start space-x-4 mt-6'>
							<Button
								variant='ghost'
								size='icon'
								className='text-gray-400 hover:text-blue-400'
							>
								<Facebook className='h-5 w-5' />
							</Button>
							<Button
								variant='ghost'
								size='icon'
								className='text-gray-400 hover:text-blue-400'
							>
								<Instagram className='h-5 w-5' />
							</Button>
							<Button
								variant='ghost'
								size='icon'
								className='text-gray-400 hover:text-blue-400'
							>
								<Send className='h-5 w-5' />
							</Button>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='font-serif font-semibold text-xl mb-6'>
							Biz haqimizda
						</h3>
						<ul className='space-y-3 text-gray-300'>
							{[
								{ label: 'Biz haqimizda', id: 'about' },
								{ label: 'Kurslar', id: 'courses' },
								{ label: 'Modullar', id: 'statistics' },
								{ label: 'Mutaxassislar', id: 'partners' },
								{ label: 'Webinarlar', id: '' },
							].map((link, i) => (
								<li key={i}>
									<button
										onClick={() =>
											link.id && scrollToSection(link.id)
										}
										className='hover:text-blue-400 transition-colors'
									>
										{link.label}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className='font-serif font-semibold text-xl mb-6'>
							Foydali manzillar
						</h3>
						<ul className='space-y-3 text-gray-300'>
							{[
								'Web sayt',
								"Masofaviy ta'lim",
								'Hamkorlar',
								'Sertifikat',
								'Adliya vazirligi',
							].map((item, i) => (
								<li key={i}>
									<a
										href='#'
										className='hover:text-blue-400 transition-colors'
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='font-serif font-semibold text-xl mb-6'>
							Aloqa
						</h3>
						<ul className='space-y-3 text-gray-300'>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-colors'
								>
									Bog'lanish
								</a>
							</li>
							<li>
								<Button
									onClick={handleLogin}
									className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-4 w-full sm:w-auto'
								>
									Tizimga kirish
								</Button>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm'>
					&copy; 2025 Yuridik kadrlarni qayta tayyorlash va malakasini
					oshirish instituti. Barcha huquqlar himoyalangan.
				</div>
			</div>
		</footer>
	)
}
