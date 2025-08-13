'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Award,
	BookOpen,
	Clock,
	CreditCard,
	Globe,
	HelpCircle,
	Phone,
	Users,
} from 'lucide-react'
import type React from 'react'
import { useState } from 'react'

interface FAQItem {
	id: number
	question: string
	questionEn: string
	answer: string
	answerEn: string
	category: string
	categoryEn: string
	icon: React.ReactNode
}

const faqData: FAQItem[] = [
	{
		id: 1,
		question: 'Kurslar qancha vaqt davom etadi?',
		questionEn: 'How long do the courses last?',
		answer: "Bizning kurslarimiz 2 hafta dan 6 oygacha davom etadi. Qisqa muddatli kurslar asosan malaka oshirish uchun, uzoq muddatli kurslar esa chuqur bilim olish uchun mo'ljallangan. Har bir kurs davomiyligi dastur murakkabligiga qarab belgilanadi.",
		answerEn:
			'Our courses last from 2 weeks to 6 months. Short-term courses are mainly for skills development, while long-term courses are designed for in-depth knowledge. Each course duration is determined based on program complexity.',
		category: 'Kurslar',
		categoryEn: 'Courses',
		icon: <Clock className='w-5 h-5' />,
	},
	{
		id: 2,
		question: 'Sertifikat qanday olinadi?',
		questionEn: 'How to obtain a certificate?',
		answer: "Kursni muvaffaqiyatli tugatganingizdan so'ng, siz rasmiy sertifikat olasiz. Sertifikat olish uchun barcha darslarni o'tash, vazifalarni bajarish va yakuniy imtihondan o'tish kerak. Sertifikat davlat tomonidan tan olingan va butun O'zbekiston bo'ylab amal qiladi.",
		answerEn:
			'After successfully completing the course, you will receive an official certificate. To obtain a certificate, you need to attend all classes, complete assignments, and pass the final exam. The certificate is state-recognized and valid throughout Uzbekistan.',
		category: 'Sertifikat',
		categoryEn: 'Certificate',
		icon: <Award className='w-5 h-5' />,
	},
	{
		id: 3,
		question: "Onlayn yoki oflayn o'qish mumkinmi?",
		questionEn: 'Is online or offline learning available?',
		answer: "Ha, biz gibrid ta'lim tizimini taklif etamiz. Siz onlayn, oflayn yoki aralash formatda o'qishingiz mumkin. Onlayn darslar jonli efir va yozib olingan video darslar orqali o'tkaziladi. Oflayn darslar zamonaviy auditoriyalarda o'tkaziladi.",
		answerEn:
			'Yes, we offer a hybrid education system. You can study online, offline, or in a mixed format. Online classes are conducted through live broadcasts and recorded video lessons. Offline classes are held in modern auditoriums.',
		category: "Ta'lim formati",
		categoryEn: 'Education Format',
		icon: <BookOpen className='w-5 h-5' />,
	},
	{
		id: 4,
		question: 'Kurs narxi qancha?',
		questionEn: 'What is the course price?',
		answer: "Kurs narxlari dastur turiga va davomiyligiga qarab farq qiladi. Qisqa muddatli kurslar 500,000 so'mdan boshlanadi, uzoq muddatli kurslar esa 2,000,000 so'mgacha. Biz bo'lib to'lash imkoniyatini ham taklif etamiz. Batafsil narxlar uchun biz bilan bog'laning.",
		answerEn:
			'Course prices vary depending on the program type and duration. Short-term courses start from 500,000 UZS, while long-term courses go up to 2,000,000 UZS. We also offer installment payment options. Contact us for detailed pricing.',
		category: "To'lov",
		categoryEn: 'Payment',
		icon: <CreditCard className='w-5 h-5' />,
	},
	{
		id: 5,
		question: 'Qanday mutaxassislar dars beradi?',
		questionEn: 'What kind of specialists teach?',
		answer: "Bizning o'qituvchilarimiz yuridik fanlar doktorlari, professori, tajribali advokatlar va sud xodimlaridan iborat. Barcha o'qituvchilar kamida 10 yillik amaliy tajribaga ega va o'z sohalarida tan olingan mutaxassislardir.",
		answerEn:
			'Our teachers consist of doctors of legal sciences, professors, experienced lawyers, and court officials. All teachers have at least 10 years of practical experience and are recognized specialists in their fields.',
		category: "O'qituvchilar",
		categoryEn: 'Teachers',
		icon: <Users className='w-5 h-5' />,
	},
	{
		id: 6,
		question: "Ro'yxatdan o'tish qanday amalga oshiriladi?",
		questionEn: 'How is registration carried out?',
		answer: "Ro'yxatdan o'tish uchun bizning veb-saytimizda ariza to'ldiring yoki to'g'ridan-to'g'ri ofisimizga tashrif buyuring. Kerakli hujjatlar: pasport nusxasi, ta'lim haqidagi hujjat nusxasi va 3x4 o'lchamdagi fotosurat. Ro'yxatdan o'tish jarayoni 1-2 kun davom etadi.",
		answerEn:
			'To register, fill out an application on our website or visit our office directly. Required documents: passport copy, education certificate copy, and 3x4 size photo. The registration process takes 1-2 days.',
		category: "Ro'yxatdan o'tish",
		categoryEn: 'Registration',
		icon: <Phone className='w-5 h-5' />,
	},
	{
		id: 7,
		question: "Kurs tugagandan keyin qo'shimcha yordam berilarmidi?",
		questionEn: 'Is additional support provided after course completion?',
		answer: "Ha, kurs tugagandan keyin ham biz talabalarimizni qo'llab-quvvatlaymiz. 6 oy davomida bepul maslahat xizmati, ish topishda yordam, qo'shimcha materiallar va alumni tarmog'iga kirish imkoniyati beriladi.",
		answerEn:
			'Yes, we continue to support our students even after course completion. Free consultation service for 6 months, job placement assistance, additional materials, and access to alumni network are provided.',
		category: "Qo'llab-quvvatlash",
		categoryEn: 'Support',
		icon: <HelpCircle className='w-5 h-5' />,
	},
	{
		id: 8,
		question: "Gruppa hajmi qancha bo'ladi?",
		questionEn: 'What will be the group size?',
		answer: "Har bir guruhda maksimal 15-20 talaba bo'ladi. Bu har bir talabaga individual e'tibor berish va sifatli ta'lim olish imkoniyatini yaratadi. Kichik guruhlar muhokama va amaliy mashg'ulotlar uchun qulay muhit yaratadi.",
		answerEn:
			'Each group will have a maximum of 15-20 students. This creates an opportunity to give individual attention to each student and receive quality education. Small groups create a comfortable environment for discussions and practical exercises.',
		category: 'Guruh',
		categoryEn: 'Group',
		icon: <Users className='w-5 h-5' />,
	},
]

export default function FAQ() {
	const [language, setLanguage] = useState('uz')
	const [selectedCategory, setSelectedCategory] = useState('all')

	const categories = [
		{ value: 'all', label: 'Barchasi', labelEn: 'All' },
		{ value: 'Kurslar', label: 'Kurslar', labelEn: 'Courses' },
		{ value: 'Sertifikat', label: 'Sertifikat', labelEn: 'Certificate' },
		{ value: "To'lov", label: "To'lov", labelEn: 'Payment' },
		{ value: "O'qituvchilar", label: "O'qituvchilar", labelEn: 'Teachers' },
	]

	const filteredFAQs =
		selectedCategory === 'all'
			? faqData
			: faqData.filter(item => item.category === selectedCategory)

	const translations = {
		uz: {
			title: "Ko'p Beriladigan Savollar",
			subtitle: 'Eng muhim savollar va javoblar',
			allCategories: 'Barcha kategoriyalar',
			contactUs: "Biz bilan bog'laning",
			contactText:
				"Savolingizga javob topa olmadingizmi? Biz bilan bog'laning!",
			language: 'Til',
		},
		en: {
			title: 'Frequently Asked Questions',
			subtitle: 'Most important questions and answers',
			allCategories: 'All categories',
			contactUs: 'Contact Us',
			contactText:
				"Couldn't find an answer to your question? Contact us!",
			language: 'Language',
		},
	}

	const t = translations[language as keyof typeof translations]

	return (
		<section className='py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden'>
			<div className='absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse'></div>
			<div
				className='absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse'
				style={{ animationDelay: '2s' }}
			></div>
			<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl'></div>

			<div className='container mx-auto px-6 relative z-10'>
				<div className='text-center mb-16'>
					<h1 className='text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-2'>
						{t.title}
					</h1>
					<p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed'>
						{t.subtitle}
					</p>
					<div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full'></div>
				</div>

				<div className='flex flex-wrap justify-center gap-3 mb-16'>
					{categories.map((category, index) => (
						<Button
							key={category.value}
							variant={
								selectedCategory === category.value
									? 'default'
									: 'outline'
							}
							onClick={() => setSelectedCategory(category.value)}
							className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
								selectedCategory === category.value
									? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
									: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
							}`}
						>
							{language === 'uz'
								? category.label
								: category.labelEn}
						</Button>
					))}
				</div>

				<div className='max-w-4xl mx-auto'>
					<Accordion type='single' collapsible className='space-y-4'>
						{filteredFAQs.map((item, index) => (
							<AccordionItem
								key={item.id}
								value={`item-${item.id}`}
								className='bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xs hover:shadow-sm transition-all duration-300 border-0 overflow-hidden cursor-pointer'
							>
								<AccordionTrigger className='px-6 py-6 hover:no-underline hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300'>
									<div className='flex items-center space-x-4 text-left'>
										<div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg'>
											{item.icon}
										</div>
										<div className='flex-1'>
											<h3 className='text-lg font-semibold text-slate-900 dark:text-white mb-1'>
												{language === 'uz'
													? item.question
													: item.questionEn}
											</h3>
											<Badge
												variant='secondary'
												className='text-xs'
											>
												{language === 'uz'
													? item.category
													: item.categoryEn}
											</Badge>
										</div>
									</div>
								</AccordionTrigger>
								<AccordionContent className='px-6 pb-6'>
									<div className='pl-16'>
										<p className='text-slate-600 dark:text-slate-300 leading-relaxed text-base'>
											{language === 'uz'
												? item.answer
												: item.answerEn}
										</p>
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className='mt-20 text-center'>
					<div className='bg-gradient-to-r from-blue-600  to-blue-400 rounded-2xl p-4 lg:p-8 text-white max-w-4xl mx-auto shadow-xl'>
						<div className='bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6'>
							<HelpCircle className='w-8 h-8 animate-pulse' />
						</div>
						<h3 className='text-3xl font-bold mb-4'>
							{t.contactUs}
						</h3>
						<p className='text-blue-100 mb-8 text-lg leading-relaxed max-w-2xl mx-auto'>
							{t.contactText}
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Button
								asChild
								size='lg'
								className='bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
							>
								<a href='tel:+998712000235'>
									<Phone className='w-5 h-5 mr-2' />
									+998 71 200 02 35
								</a>
							</Button>
							<Button
								asChild
								variant='outline'
								size='lg'
								className='bg-white/20 text-white border-white/30 hover:bg-white/30 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm'
							>
								<a href='mailto:uzmarkaz@adliya.uz'>
									<Globe className='w-5 h-5 mr-2' />
									uzmarkaz@adliya.uz
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
