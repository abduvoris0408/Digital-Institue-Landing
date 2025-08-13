'use client'

import Tooltip from '@/components/tooltip'
import { Button } from '@/components/ui/button'
import {
	ArrowRight,
	Award,
	BarChart3,
	BookOpen,
	ChevronDown,
	Clock,
	Globe,
	GraduationCap,
	HelpCircle,
	LogIn,
	Mail,
	MapPin,
	Menu,
	Moon,
	Phone,
	Scale,
	Star,
	Sun,
	Users,
	X,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)
	const [language, setLanguage] = useState('uz')
	const [showSpecialistsDropdown, setShowSpecialistsDropdown] =
		useState(false)
	const [activeTab, setActiveTab] = useState('navigation')
	const { theme, setTheme } = useTheme()
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const translations = {
		uz: {
			about: 'Biz haqimizda',
			courses: 'Kurslar',
			specialists: 'Mutaxassislar',
			statistics: 'Statistika',
			partners: 'Hamkorlar',
			faq: 'Savol-javoblar',
			login: 'Kirish',
			systemLogin: 'Tizimga kirish',
			institute: 'Yuridik Institut',
			subtitle: 'Malaka oshirish markazi',
			navigation: 'Navigatsiya',
			contact: 'Aloqa',
			info: "Ma'lumot",
			workingHours: 'Ish vaqti',
			address: 'Manzil',
			phone: 'Telefon',
			email: 'Email',
			rating: 'Reyting',
			students: 'Talabalar',
			courses_count: 'Kurslar',
			experience: 'Tajriba',
			tooltips: {
				home: "Bosh sahifaga o'tish",
				about: "Institut haqida ma'lumot",
				courses: "Mavjud kurslarni ko'rish",
				specialists: 'Bizning mutaxassislar',
				statistics: "Muvaffaqiyat ko'rsatkichlari",
				faq: "Ko'p beriladigan savollar",
				login: 'Tizimga kirish',
				language: "Tilni o'zgartirish",
				theme: "Mavzuni o'zgartirish",
				lightMode: "Yorug' rejim",
				darkMode: "Qorong'u rejim",
			},
			slides: [
				{
					title: 'Yuridik Bilimlar',
					subtitle: "Professional huquqiy ta'lim",
				},
				{
					title: 'Malaka Oshirish',
					subtitle: "Zamonaviy o'quv dasturlari",
				},
				{
					title: 'Ekspert Ustozlar',
					subtitle: 'Tajribali mutaxassislar',
				},
				{
					title: 'Rasmiy Sertifikat',
					subtitle: 'Davlat tomonidan tan olingan',
				},
			],
		},
		en: {
			about: 'About Us',
			courses: 'Courses',
			specialists: 'Specialists',
			statistics: 'Statistics',
			partners: 'Partners',
			faq: 'FAQ',
			login: 'Login',
			systemLogin: 'System Login',
			institute: 'Legal Institute',
			subtitle: 'Skills Development Center',
			navigation: 'Navigation',
			contact: 'Contact',
			info: 'Information',
			workingHours: 'Working Hours',
			address: 'Address',
			phone: 'Phone',
			email: 'Email',
			rating: 'Rating',
			students: 'Students',
			courses_count: 'Courses',
			experience: 'Experience',
			tooltips: {
				home: 'Go to homepage',
				about: 'Learn about our institute',
				courses: 'View available courses',
				specialists: 'Meet our specialists',
				statistics: 'View success metrics',
				faq: 'Frequently asked questions',
				login: 'Login to system',
				language: 'Change language',
				theme: 'Change theme',
				lightMode: 'Light mode',
				darkMode: 'Dark mode',
			},
			slides: [
				{
					title: 'Legal Knowledge',
					subtitle: 'Professional legal education',
				},
				{ title: 'Skills Development', subtitle: 'Modern curricula' },
				{
					title: 'Expert Teachers',
					subtitle: 'Experienced specialists',
				},
				{ title: 'Official Certificate', subtitle: 'State recognized' },
			],
		},
	}

	const t = translations[language as keyof typeof translations]

	const slides = [
		{
			icon: <Scale className='w-6 h-6' />,
			title: t.slides[0].title,
			subtitle: t.slides[0].subtitle,
		},
		{
			icon: <BookOpen className='w-6 h-6' />,
			title: t.slides[1].title,
			subtitle: t.slides[1].subtitle,
		},
		{
			icon: <Users className='w-6 h-6' />,
			title: t.slides[2].title,
			subtitle: t.slides[2].subtitle,
		},
		{
			icon: <Award className='w-6 h-6' />,
			title: t.slides[3].title,
			subtitle: t.slides[3].subtitle,
		},
	]

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide(prev => (prev + 1) % slides.length)
		}, 4000)
		return () => clearInterval(interval)
	}, [slides.length])

	const scrollToSection = (sectionId: string) => {
		// If we're on a course detail page, navigate to home first
		if (pathname.startsWith('/courses/')) {
			router.push(`/#${sectionId}`)
			setIsMobileMenuOpen(false)
			setShowSpecialistsDropdown(false)
			return
		}

		// If we're on the home page, scroll to section
		const element = document.getElementById(sectionId)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			})
			setIsMobileMenuOpen(false)
			setShowSpecialistsDropdown(false)
		} else {
			// If element not found, navigate to home with hash
			router.push(`/#${sectionId}`)
			setIsMobileMenuOpen(false)
			setShowSpecialistsDropdown(false)
		}
	}

	const handleLogin = () => {
		window.open('https://digital-admin.nextdevteam.uz/signin', '_blank')
	}

	const toggleLanguage = () => {
		setLanguage(prev => (prev === 'uz' ? 'en' : 'uz'))
	}

	const navigationItems = [
		{
			id: 'about',
			label: t.about,
			icon: <Users className='w-5 h-5' />,
			description: "Institut haqida ma'lumot",
		},
		{
			id: 'courses',
			label: t.courses,
			icon: <BookOpen className='w-5 h-5' />,
			description: "O'quv kurslari",
		},
		{
			id: 'specialists',
			label: t.specialists,
			icon: <GraduationCap className='w-5 h-5' />,
			description: 'Bizning mutaxassislar',
		},
		{
			id: 'statistics',
			label: t.statistics,
			icon: <Award className='w-5 h-5' />,
			description: "Muvaffaqiyat ko'rsatkichlari",
		},
		{
			id: 'faq',
			label: t.faq,
			icon: <Scale className='w-5 h-5' />,
			description: "Ko'p beriladigan savollar",
		},
	]

	const contactInfo = [
		{
			icon: <Phone className='w-5 h-5' />,
			label: t.phone,
			value: '+998 71 200 02 35',
			href: 'tel:+998712000235',
		},
		{
			icon: <Mail className='w-5 h-5' />,
			label: t.email,
			value: 'yurmakaz@adliya.uz',
			href: 'mailto:yurmakaz@adliya.uz',
		},
		{
			icon: <MapPin className='w-5 h-5' />,
			label: t.address,
			value: "Toshkent sh. Mirzo ulug'bek tumani, Katta Darxon 6",
			href: '#',
		},
		{
			icon: <Clock className='w-5 h-5' />,
			label: t.workingHours,
			value: 'Dush-Juma: 9:00-18:00',
			href: '#',
		},
	]

	const instituteStats = [
		{
			icon: <Star className='w-5 h-5' />,
			label: t.rating,
			value: '4.9/5.0',
			color: 'text-yellow-500',
		},
		{
			icon: <Users className='w-5 h-5' />,
			label: t.students,
			value: '5000+',
			color: 'text-blue-500',
		},
		{
			icon: <BookOpen className='w-5 h-5' />,
			label: t.courses_count,
			value: '120+',
			color: 'text-green-500',
		},
		{
			icon: <Award className='w-5 h-5' />,
			label: t.experience,
			value: '15+ yil',
			color: 'text-purple-500',
		},
	]

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-out ${
					isScrolled
						? 'transform translate-y-0'
						: ' backdrop-blur-sm shadow-none bg-white/30 dark:bg-transparent border-b'
				}`}
			>
				<div
					className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 py-2`}
				>
					<div
						className={`flex items-center justify-between transition-all duration-700 ${
							isScrolled
								? 'h-16 bg-white/50 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl px-6 shadow-lg border border-white/40 dark:border-gray-700/40'
								: 'h-16 bg-transparent'
						}`}
					>
						<div
							className='flex items-center gap-2  cursor-pointer '
							onClick={() => scrollToSection('hero')}
						>
							<div className='relative'>
								<div
									className={` dark:bg-white rounded-xl flex items-center justify-center  transition-all duration-500 `}
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
									className={`text-gray-600 dark:text-gray-400 transition-all duration-500 ${
										isScrolled ? 'text-xs' : 'text-xs'
									}`}
								>
									Yuridik kadrlarni qayta tayyorlash
								</span>
								<div
									className={`text-gray-600 dark:text-gray-400 transition-all duration-500 ${
										isScrolled ? 'text-xs' : 'text-xs'
									}`}
								>
									va malakasini oshirish instituti
								</div>
							</div>
						</div>
						<nav
							className={`hidden md:flex items-center justify-center space-x-1 transition-all duration-700 ${
								isScrolled ? 'scale-95' : 'scale-100'
							}`}
						>
							<Tooltip
								content={t.tooltips.about}
								position='bottom'
							>
								<button
									onClick={() => scrollToSection('about')}
									className={`flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium cursor-pointer rounded-lg hover-scale ${
										isScrolled
											? 'hover:bg-white/60 dark:hover:bg-gray-700/60 backdrop-blur-sm'
											: 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
									}`}
								>
									<Users className='w-4 h-4' />
									<span>{t.about}</span>
								</button>
							</Tooltip>

							<Tooltip
								content={t.tooltips.courses}
								position='bottom'
							>
								<button
									onClick={() => scrollToSection('courses')}
									className={`flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium cursor-pointer rounded-lg hover-scale ${
										isScrolled
											? 'hover:bg-white/60 dark:hover:bg-gray-700/60 backdrop-blur-sm'
											: 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
									}`}
								>
									<BookOpen className='w-4 h-4' />
									<span>{t.courses}</span>
								</button>
							</Tooltip>

							<div className='relative'>
								<Tooltip
									content={t.tooltips.specialists}
									position='bottom'
								>
									<button
										onClick={() =>
											setShowSpecialistsDropdown(
												!showSpecialistsDropdown
											)
										}
										className={`flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium cursor-pointer rounded-lg hover-scale ${
											isScrolled
												? 'hover:bg-white/60 dark:hover:bg-gray-700/60 backdrop-blur-sm'
												: 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
										}`}
									>
										<GraduationCap className='w-4 h-4' />
										<span>{t.specialists}</span>
										<ChevronDown
											className={`w-4 h-4 transition-transform ${
												showSpecialistsDropdown
													? 'rotate-180'
													: ''
											}`}
										/>
									</button>
								</Tooltip>

								{showSpecialistsDropdown && (
									<div
										className='absolute top-full left-0 mt-2 w-56 bg-white/95 dark:bg-gray-800/95 backdrop-blur-2xl rounded-xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 animate-slide-down overflow-hidden z-[110]'
										style={{
											backdropFilter:
												'blur(20px) saturate(180%)',
											WebkitBackdropFilter:
												'blur(20px) saturate(180%)',
										}}
									>
										<button
											onClick={() =>
												scrollToSection('specialists')
											}
											className='w-full px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-300 cursor-pointer flex items-center space-x-2 backdrop-blur-sm'
										>
											<Users className='w-4 h-4' />
											<span>Barcha mutaxassislar</span>
										</button>
										<button
											onClick={() =>
												scrollToSection('specialists')
											}
											className='w-full px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-300 cursor-pointer flex items-center space-x-2 backdrop-blur-sm'
										>
											<Scale className='w-4 h-4' />
											<span>Yuridik maslahatchilar</span>
										</button>
										<button
											onClick={() =>
												scrollToSection('specialists')
											}
											className='w-full px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/60 dark:hover:bg-gray-700/60 transition-all duration-300 cursor-pointer flex items-center space-x-2 backdrop-blur-sm'
										>
											<GraduationCap className='w-4 h-4' />
											<span>O'qituvchilar</span>
										</button>
									</div>
								)}
							</div>

							<Tooltip
								content={t.tooltips.statistics}
								position='bottom'
							>
								<button
									onClick={() =>
										scrollToSection('statistics')
									}
									className={`flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium cursor-pointer rounded-lg hover-scale ${
										isScrolled
											? 'hover:bg-white/60 dark:hover:bg-gray-700/60 backdrop-blur-sm'
											: 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
									}`}
								>
									<BarChart3 className='w-4 h-4' />
									<span>{t.statistics}</span>
								</button>
							</Tooltip>

							<Tooltip content={t.tooltips.faq} position='bottom'>
								<button
									onClick={() => scrollToSection('faq')}
									className={`flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium cursor-pointer rounded-lg hover-scale ${
										isScrolled
											? 'hover:bg-white/60 dark:hover:bg-gray-700/60 backdrop-blur-sm'
											: 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
									}`}
								>
									<HelpCircle className='w-4 h-4' />
									<span>{t.faq}</span>
								</button>
							</Tooltip>
						</nav>
						<div
							className={`flex items-center space-x-3 transition-all duration-700 ${
								isScrolled ? 'scale-95' : 'scale-100'
							}`}
						>
							<Tooltip
								content={t.tooltips.language}
								position='bottom'
							>
								<button
									onClick={toggleLanguage}
									className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer hover-scale ${
										isScrolled
											? 'glass-morphism hover:bg-white/60 dark:hover:bg-blue-900/30 backdrop-blur-sm'
											: 'glass-morphism hover:bg-blue-50 dark:hover:bg-blue-900/20'
									}`}
								>
									<Globe className='w-4 h-4 text-blue-600 dark:text-blue-400' />
									<span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
										{language.toUpperCase()}
									</span>
								</button>
							</Tooltip>

							<Tooltip
								content={t.tooltips.theme}
								position='bottom'
							>
								<div
									className={`flex items-center rounded-full p-1 transition-all duration-300 ${
										isScrolled
											? 'bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm'
											: 'bg-gray-200 dark:bg-gray-700'
									}`}
								>
									<button
										onClick={() => setTheme('light')}
										className={`p-2 rounded-full transition-all duration-300 hover-scale ${
											theme === 'light'
												? 'bg-white shadow-md text-yellow-500'
												: 'text-gray-400 hover:text-gray-600'
										}`}
									>
										<Sun className='w-4 h-4' />
									</button>

									<button
										onClick={() => setTheme('dark')}
										className={`p-2 rounded-full transition-all duration-300 hover-scale ${
											theme === 'dark'
												? 'bg-gray-800 shadow-md text-blue-400'
												: 'text-gray-400 hover:text-gray-600'
										}`}
									>
										<Moon className='w-4 h-4' />
									</button>
								</div>
							</Tooltip>

							<Tooltip
								content={t.tooltips.login}
								position='bottom'
							>
								<Button
									onClick={handleLogin}
									className={`hidden md:inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover-scale ${
										isScrolled
											? 'text-sm px-3 py-2'
											: 'px-4 py-2'
									}`}
								>
									<LogIn className='w-4 h-4' />
									<span>{t.login}</span>
								</Button>
							</Tooltip>

							<Button
								variant='ghost'
								size='icon'
								className='md:hidden cursor-pointer hover-scale'
								onClick={() =>
									setIsMobileMenuOpen(!isMobileMenuOpen)
								}
							>
								{isMobileMenuOpen ? (
									<X className='h-5 w-5' />
								) : (
									<Menu className='h-5 w-5' />
								)}
							</Button>
						</div>
					</div>
				</div>
			</header>

			{isMobileMenuOpen && (
				<div
					className='fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] animate-fade-in lg:hidden'
					onClick={() => setIsMobileMenuOpen(false)}
				/>
			)}

			<div
				className={`fixed inset-y-0 left-0 z-[90] w-80 transform transition-transform duration-300 ease-in-out ${
					isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				} lg:hidden`}
			>
				<div className='h-full w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 flex flex-col shadow-2xl'>
					<div className='flex-1 overflow-y-auto p-6 mt-14'>
						{activeTab === 'navigation' && (
							<div className='space-y-3 animate-fade-in'>
								{navigationItems.map((item, index) => (
									<button
										key={item.id}
										onClick={() => {
											scrollToSection(item.id)
											setIsMobileMenuOpen(false)
										}}
										className='flex items-center space-x-4 w-full p-4 rounded-2xl text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer hover-scale animate-slide-in-left border border-transparent hover:border-blue-200 dark:hover:border-blue-800 group'
										style={{
											animationDelay: `${index * 0.1}s`,
										}}
									>
										<div className='flex-shrink-0 p-2 rounded-xl bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors'>
											{item.icon}
										</div>
										<div className='flex-1 text-left'>
											<div className='font-semibold'>
												{item.label}
											</div>
											<div className='text-xs text-gray-500 dark:text-gray-400'>
												{item.description}
											</div>
										</div>
										<ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity' />
									</button>
								))}
							</div>
						)}
					</div>

					<div className='p-6 border-t border-gray-200 dark:border-gray-700 space-y-4'>
						<Button
							onClick={handleLogin}
							className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg cursor-pointer hover-scale flex items-center justify-center space-x-2'
						>
							<LogIn className='w-4 h-4' />
							<span>{t.systemLogin}</span>
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}
