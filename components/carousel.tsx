'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface CarouselItem {
	id: number
	title: string
	subtitle?: string
	image: string
	description?: string
	action?: {
		label: string
		onClick: () => void
	}
}

interface CarouselProps {
	items: CarouselItem[]
	autoPlay?: boolean
	interval?: number
	showDots?: boolean
	showArrows?: boolean
	className?: string
}

export default function Carousel({
	items,
	autoPlay = true,
	interval = 5000,
	showDots = true,
	showArrows = true,
	className = '',
}: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isPlaying, setIsPlaying] = useState(autoPlay)
	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if (isPlaying) {
			intervalRef.current = setInterval(() => {
				setCurrentIndex(prev => (prev + 1) % items.length)
			}, interval)
		} else {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isPlaying, interval, items.length])

	const goToSlide = (index: number) => {
		setCurrentIndex(index)
	}

	const goToPrevious = () => {
		setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
	}

	const goToNext = () => {
		setCurrentIndex(prev => (prev + 1) % items.length)
	}

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<div className={`relative overflow-hidden rounded-2xl ${className}`}>
			{/* Main carousel content */}
			<div className='relative h-96 md:h-[500px]'>
				{items.map((item, index) => (
					<div
						key={item.id}
						className={`absolute inset-0 transition-all duration-700 ease-in-out ${
							index === currentIndex
								? 'opacity-100 transform translate-x-0'
								: index < currentIndex
								? 'opacity-0 transform -translate-x-full'
								: 'opacity-0 transform translate-x-full'
						}`}
					>
						<div
							className='w-full h-full bg-cover bg-center relative'
							style={{ backgroundImage: `url(${item.image})` }}
						>
							{/* Pastki yarmida qora → transparent gradient */}
							<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent' />

							{/* Matn pastda */}
							<div className='absolute inset-0 flex items-end justify-center pb-10'>
								<div className='text-center text-white max-w-4xl px-6 animate-fade-in'>
									<h2 className='text-4xl md:text-6xl font-bold mb-4 animate-slide-up'>
										{item.title}
									</h2>
									{item.subtitle && (
										<p
											className='text-xl md:text-2xl mb-6 animate-slide-up'
											style={{ animationDelay: '0.2s' }}
										>
											{item.subtitle}
										</p>
									)}
									{item.description && (
										<p
											className='text-lg mb-4 animate-slide-up'
											style={{ animationDelay: '0.4s' }}
										>
											{item.description}
										</p>
									)}
									{item.action && (
										<Button
											onClick={item.action.onClick}
											className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg animate-scale-in cursor-pointer hover-scale'
											style={{ animationDelay: '0.6s' }}
										>
											{item.action.label}
										</Button>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Navigation arrows */}
			{showArrows && (
				<>
					<Button
						onClick={goToPrevious}
						variant='outline'
						size='icon'
						className='absolute left-4 top-1/2 transform -translate-y-1/2 glass-morphism hover:bg-white/20 text-white border-white/30 cursor-pointer hover-scale bg-transparent'
					>
						<ChevronLeft className='w-6 h-6' />
					</Button>
					<Button
						onClick={goToNext}
						variant='outline'
						size='icon'
						className='absolute right-4 top-1/2 transform -translate-y-1/2 glass-morphism hover:bg-white/20 text-white border-white/30 cursor-pointer hover-scale bg-transparent'
					>
						<ChevronRight className='w-6 h-6' />
					</Button>
				</>
			)}
		</div>
	)
}
