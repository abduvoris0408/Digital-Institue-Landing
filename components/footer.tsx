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
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
					{/* Company Info */}
					<div className='lg:col-span-1'>
						<div
							className='flex items-center gap-2 mb-4 cursor-pointer '
							onClick={() => scrollToSection('hero')}
						>
							<div className='relative'>
								<div
									className={`bg-white rounded-xl flex items-center justify-center  transition-all duration-500 `}
								>
									<Image
										src='/logo1.png'
										alt='Logo'
										width={36}
										height={36}
									/>
								</div>
							</div>
							<div className='hidden sm:block'>
								<span
									className={`text-gray-200 dark:text-gray-100 transition-all duration-500 `}
								>
									Yuridik kadrlarni qayta tayyorlash
								</span>
								<div
									className={`text-gray-200 dark:text-gray-100 transition-all duration-500`}
								>
									va malakasini oshirish instituti
								</div>
							</div>
						</div>

						<div className='space-y-4 text-gray-300'>
							<div className='flex items-start space-x-3'>
								<Phone className='h-5 w-5 mt-1 text-blue-400' />
								<div>
									<div className='font-medium text-white'>
										Bog'lanish
									</div>
									<div>71-200-02-35</div>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<Mail className='h-5 w-5 mt-1 text-blue-400' />
								<div>
									<div className='font-medium text-white'>
										Email
									</div>
									<div>uzmarkaz@adliya.uz</div>
								</div>
							</div>

							<div className='flex items-start space-x-3'>
								<MapPin className='h-5 w-5 mt-1 text-blue-400' />
								<div>
									<div className='font-medium text-white'>
										Manzil
									</div>
									<div>
										Toshkent sh. Mirzo ulug'bek tumani,
										
									</div>
								</div>
							</div>
						</div>

						<div className='flex space-x-4 mt-6'>
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
							<li>
								<button
									onClick={() => scrollToSection('about')}
									className='hover:text-blue-400 transition-colors'
								>
									Biz haqimizda
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection('courses')}
									className='hover:text-blue-400 transition-colors'
								>
									Kurslar
								</button>
							</li>
							<li>
								<button
									onClick={() =>
										scrollToSection('statistics')
									}
									className='hover:text-blue-400 transition-colors'
								>
									Modullar
								</button>
							</li>
							<li>
								<button
									onClick={() => scrollToSection('partners')}
									className='hover:text-blue-400 transition-colors'
								>
									Mutaxassislar
								</button>
							</li>
							<li>
								<button className='hover:text-blue-400 transition-colors'>
									Webinarlar
								</button>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className='font-serif font-semibold text-xl mb-6'>
							Foydali manzillar
						</h3>
						<ul className='space-y-3 text-gray-300'>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-colors'
								>
									Web sayt
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-colors'
								>
									Masofaviy ta'lim
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-colors'
								>
									Hamkorlar
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-colors'
								>
									Sertifikat
								</a>
							</li>
							<li>
								<a
									href='#'
									className='hover:text-blue-400 transition-colors'
								>
									Adliya vazirligi
								</a>
							</li>
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
									className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-4'
								>
									Tizimga kirish
								</Button>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
					<p>
						&copy; 2025 Yuridik kadrlarni qayta tayyorlash va
						malakasini oshirish instituti. Barcha huquqlar
						himoyalangan.
					</p>
				</div>
			</div>
		</footer>
	)
}
