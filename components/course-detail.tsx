'use client'

import Footer from '@/components/footer'
import Header from '@/components/header'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import {
	BookOpen,
	CheckCircle,
	ChevronRight,
	Clock,
	Globe,
	Home,
	Star,
	Target,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface Course {
	id: number
	title: string
	category: string
	instructor: string
	duration: string
	topics: number
	language: string
	rating: number
	students: number
	date: string
	description: string
	objectives: string[]
	modules: Array<{
		title: string
		duration: string
		topics: string[]
	}>
}

interface CourseDetailPageProps {
	course: Course
}

function CourseDetailSkeleton() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'>
			<Header />
			<div className='container mx-auto px-4 py-8 mt-20'>
				<div className='flex items-center gap-2 mb-6'>
					<Skeleton className='h-4 w-4' />
					<Skeleton className='h-4 w-20' />
					<Skeleton className='h-4 w-4' />
					<Skeleton className='h-4 w-24' />
					<Skeleton className='h-4 w-4' />
					<Skeleton className='h-4 w-16' />
				</div>

				<div className='grid lg:grid-cols-3 gap-8'>
					<div className='lg:col-span-2 space-y-6'>
						<Skeleton className='h-8 w-3/4' />
						<div className='flex items-center gap-4'>
							<Skeleton className='h-10 w-10 rounded-full' />
							<div>
								<Skeleton className='h-4 w-48 mb-2' />
								<Skeleton className='h-3 w-32' />
							</div>
						</div>
						<Skeleton className='h-32 w-full' />
					</div>

					<div className='space-y-6'>
						<Skeleton className='h-64 w-full' />
						<Skeleton className='h-48 w-full' />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default function CourseDetailPage({ course }: CourseDetailPageProps) {
	const [loading, setLoading] = useState(true)

	// Simulate loading
	useState(() => {
		const timer = setTimeout(() => setLoading(false), 1500)
		return () => clearTimeout(timer)
	})

	if (loading) {
		return <CourseDetailSkeleton />
	}

	return (
		<div className=''>
			<Header />

			<div className='container mx-auto px-4 py-8 mt-20'>
				<nav className='flex items-center gap-2 text-sm mb-8 p-4 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/20 shadow-sm'>
					<Link
						href='/'
						className='flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400'
					>
						<Home className='h-4 w-4' />
						<span>Bosh sahifa</span>
					</Link>
					<ChevronRight className='h-4 w-4 text-muted-foreground' />
					<Link
						href='/#courses'
						className='flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400'
					>
						<BookOpen className='h-4 w-4' />
						<span>Kurslar</span>
					</Link>
					<ChevronRight className='h-4 w-4 text-muted-foreground' />
					<span className='px-3 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium'>
						{course.category}
					</span>
				</nav>

				<div className='grid lg:grid-cols-3 gap-8'>
					{/* Main Content */}
					<div className='lg:col-span-2 space-y-6'>
						{/* Course Header */}
						<div className='space-y-4'>
							<Badge
								variant='secondary'
								className='bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
							>
								{course.category}
							</Badge>

							<h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
								{course.title}
							</h1>

							<div className='flex items-center gap-4'>
								<div className='flex items-center gap-2'>
									<div className='h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold'>
										{course.instructor
											.split(' ')
											.map(n => n[0])
											.join('')
											.slice(0, 2)}
									</div>
									<div>
										<p className='font-medium text-gray-900 dark:text-white'>
											{course.instructor}
										</p>
										<p className='text-sm text-muted-foreground'>
											{course.date}
										</p>
									</div>
								</div>
							</div>

							<div className='flex items-center gap-4 text-sm text-muted-foreground'>
								<div className='flex items-center gap-1'>
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className='h-4 w-4 fill-gray-300 text-gray-300'
										/>
									))}
									<span className='ml-1'>
										{course.rating} / {course.students}
									</span>
								</div>
								<span>nafar tinglovchi tanlagan</span>
							</div>
						</div>

						{/* Course Description */}
						<Card className='backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-white/20'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<BookOpen className='h-5 w-5 text-blue-600' />
									Modul haqida
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
									{course.description}
								</p>
							</CardContent>
						</Card>

						{/* Course Objectives */}
						<Card className='backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-white/20'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Target className='h-5 w-5 text-green-600' />
									Kurs maqsadlari
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className='space-y-3'>
									{course.objectives.map(
										(objective, index) => (
											<li
												key={index}
												className='flex items-start gap-3'
											>
												<CheckCircle className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
												<span className='text-gray-700 dark:text-gray-300'>
													{objective}
												</span>
											</li>
										)
									)}
								</ul>
							</CardContent>
						</Card>

						{/* Course Modules */}
						<Card className='backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-white/20'>
							<CardHeader>
								<CardTitle>Kurs modullari</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								{course.modules.map((module, index) => (
									<div
										key={index}
										className='border rounded-lg p-4 bg-gray-50/50 dark:bg-slate-700/50'
									>
										<div className='flex justify-between items-start mb-2'>
											<h4 className='font-semibold text-gray-900 dark:text-white'>
												{module.title}
											</h4>
											<Badge
												variant='outline'
												className='text-xs'
											>
												{module.duration}
											</Badge>
										</div>
										<ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
											{module.topics.map(
												(topic, topicIndex) => (
													<li
														key={topicIndex}
														className='flex items-center gap-2'
													>
														<div className='h-1.5 w-1.5 rounded-full bg-blue-500' />
														{topic}
													</li>
												)
											)}
										</ul>
									</div>
								))}
							</CardContent>
						</Card>
					</div>

					{/* Sidebar */}
					<div className='space-y-6'>
						{/* Course Hero Image */}
						<Card className='overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-white/20'>
							<div className='relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700'>
								<Image
									width={400}
									height={200}
									src='/coursecard3.jpg'
									alt='Course Hero'
									className='w-full h-full object-cover opacity-80'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
								<div className='absolute bottom-4 left-4 right-4'>
									<div className='text-white'>
										<div className='text-2xl font-bold text-red-400 mb-1'>
											{course.duration}
										</div>
										<div className='text-sm opacity-90'>
											Davomiyligi
										</div>
									</div>
								</div>
							</div>
						</Card>

						{/* Course Info */}
						<Card className='backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 border-white/20'>
							<CardContent className='p-6 space-y-4'>
								<div className='flex items-center justify-between'>
									<span className='text-sm text-muted-foreground'>
										Shakli
									</span>
									<Badge className='bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'>
										{course.category}
									</Badge>
								</div>

								<Separator />

								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-2'>
										<Clock className='h-4 w-4 text-muted-foreground' />
										<span className='text-sm text-muted-foreground'>
											Hajmi
										</span>
									</div>
									<span className='font-medium'>
										{course.duration}
									</span>
								</div>

								<Separator />

								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-2'>
										<BookOpen className='h-4 w-4 text-muted-foreground' />
										<span className='text-sm text-muted-foreground'>
											Mavzular
										</span>
									</div>
									<span className='font-medium'>
										{course.topics} ta
									</span>
								</div>

								<Separator />

								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-2'>
										<Globe className='h-4 w-4 text-muted-foreground' />
										<span className='text-sm text-muted-foreground'>
											Tili
										</span>
									</div>
									<span className='font-medium'>
										{course.language}
									</span>
								</div>
							</CardContent>
						</Card>

						{/* Enroll Button */}
						<Button
							size='lg'
							className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg'
						>
							Kursga yozilish
						</Button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}
