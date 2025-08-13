"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-in-left" | "slide-in-right" | "scale-in" | "zoom-in"
  delay?: number
  duration?: number
  threshold?: number
}

export default function MotionWrapper({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}: MotionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fade-in":
        return "animate-fade-in"
      case "slide-up":
        return "animate-slide-up"
      case "slide-in-left":
        return "animate-slide-in-left"
      case "slide-in-right":
        return "animate-slide-in-right"
      case "scale-in":
        return "animate-scale-in"
      case "zoom-in":
        return "animate-zoom-in"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-${Math.round(duration * 1000)} ${getAnimationClass()} ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
