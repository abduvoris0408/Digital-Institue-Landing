'use client'

import { Button } from '@/components/ui/button'
import { Instagram, Mail, MapPin, Phone, Send, Youtube } from 'lucide-react'
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
			<div className='container mx-auto px-6 py-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
					<div className='flex flex-col items-center md:items-start'>
						<div
							className='flex items-center gap-2  cursor-pointer mb-4 '
							onClick={() => scrollToSection('hero')}
						>
							<div className='relative '>
								<div
									className={` bg-white rounded-xl flex items-center justify-center  transition-all duration-500 `}
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
									className={`text-gray-200  transition-all duration-500 `}
								>
									Yuridik kadrlarni qayta tayyorlash
								</span>
								<div
									className={`text-gray-200 transition-all duration-500`}
								>
									va malakasini oshirish instituti
								</div>
							</div>
						</div>
						<div className='flex flex-col items-center px-2'>
							<h3 className=' text-md mb-4 flex text-white'>
								BIZ BILAN BOG'LANISH:
							</h3>
							<div className='space-y-3 text-gray-300'>
								<div className='flex items-center gap-3 justify-center md:justify-start'>
									<Phone className='h-5 w-5 text-blue-400 flex-shrink-0' />
									<span>+998 71 200 02 35</span>
								</div>
								<div className='flex items-center gap-3 justify-center md:justify-start'>
									<Mail className='h-5 w-5 text-blue-400 flex-shrink-0' />
									<span>uzmarkaz@adliya.uz</span>
								</div>
							</div>
						</div>
					</div>

					<div className='space-y-8 text-center md:text-left'>
						<div>
							<h3 className='font- text-md mb-4 text-white'>
								IJTIMOIY TARMOQLARIMIZ:
							</h3>
							<div className='flex flex-wrap gap-2 justify-center md:justify-start'>
								<Button
									variant='ghost'
									size='sm'
									className='text-gray-300 hover:text-blue-400 hover:bg-gray-800 p-2'
								>
									<Send className='h-4 w-4' />
									<span className='ml-2 text-xs'>
										TELEGRAM
									</span>
								</Button>
								<Button
									variant='ghost'
									size='sm'
									className='text-gray-300 hover:text-pink-400 hover:bg-gray-800 p-2'
								>
									<Instagram className='h-4 w-4' />
									<span className='ml-2 text-xs'>
										INSTAGRAM
									</span>
								</Button>
								<Button
									variant='ghost'
									size='sm'
									className='text-gray-300 hover:text-red-400 hover:bg-gray-800 p-2'
								>
									<Youtube className='h-4 w-4' />
									<span className='ml-2 text-xs'>
										YOUTUBE
									</span>
								</Button>
							</div>
						</div>

						<div>
							<h3 className=' text-md mb-4 text-white'>
								MANZIL:
							</h3>
							<div className='flex items-center'>
								<MapPin className='h-5 w-5 text-blue-400 flex-shrink-0 mt-1' />
								<div className='text-sm leading-relaxed'>
									<p>
										Toshkent sh. Mirobod tumani, Inqolobod
										MFY, Hamal ko'chasi 29v-uy
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='md:col-span-2 lg:col-span-1 flex justify-center'>
						<div className='w-full max-w-md lg:max-w-none'>
							<div className='bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-lg shadow-lg'>
								<div className='bg-white rounded-lg overflow-hidden h-40'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890'
										width='100%'
										height='100%'
										style={{ border: 0 }}
										allowFullScreen
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
										className='hover:scale-105 transition-transform duration-300'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm'>
					Copyright © Next Developers Team 2025
				</div>
			</div>
		</footer>
	)
}
