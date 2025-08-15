"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"

type Anim = "fade-in" | "slide-up" | "slide-in-left" | "slide-in-right" | "scale-in" | "zoom-in"

interface MotionWrapperProps {
  children: React.ReactNode
  className?: string
  animation?: Anim
  delay?: number // sekund
  duration?: number // sekund
  threshold?: number
}

const ANIM_CLASS: Record<Anim, string> = {
  "fade-in": "animate-fade-in",
  "slide-up": "animate-slide-up",
  "slide-in-left": "animate-slide-in-left",
  "slide-in-right": "animate-slide-in-right",
  "scale-in": "animate-scale-in",
  "zoom-in": "animate-zoom-in",
}

export default function MotionWrapper({
  children,
  className = "",
  animation = "slide-up",
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
}: MotionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    setIsReady(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          if (timerRef.current) {
            window.clearTimeout(timerRef.current)
          }

          timerRef.current = window.setTimeout(
            () => {
              setIsVisible(true)
              observer.unobserve(el) // faqat bir marta animatsiya
            },
            Math.max(0, delay * 1000),
          )
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -20% 0px",
      },
    )

    observer.observe(el)

    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
      }
      observer.disconnect()
    }
  }, [delay, threshold, isVisible])

  const getClassName = () => {
    if (!isReady) {
      return "opacity-0 translate-y-8" // Boshlang'ich holat
    }

    if (isVisible) {
      return ANIM_CLASS[animation]
    }

    // Animatsiya kutilayotgan holat
    switch (animation) {
      case "slide-up":
        return "opacity-0 translate-y-8"
      case "slide-in-left":
        return "opacity-0 -translate-x-8"
      case "slide-in-right":
        return "opacity-0 translate-x-8"
      case "scale-in":
        return "opacity-0 scale-95"
      case "zoom-in":
        return "opacity-0 scale-90"
      default:
        return "opacity-0"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getClassName()} ${className}`}
      style={{
        transitionDuration: isVisible ? `${duration}s` : "0s",
        transitionDelay: isVisible ? `${delay}s` : "0s",
        willChange: isVisible ? "transform, opacity" : "auto",
      }}
    >
      {children}
    </div>
  )
}
