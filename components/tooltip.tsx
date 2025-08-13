"use client"

import type React from "react"

import { useState } from "react"

interface TooltipProps {
  children: React.ReactNode
  content: string
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}

export default function Tooltip({ children, content, position = "top", className = "" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2"
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2"
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2"
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2"
    }
  }

  const getArrowClasses = () => {
    switch (position) {
      case "top":
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800 dark:border-t-gray-200"
      case "bottom":
        return "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-800 dark:border-b-gray-200"
      case "left":
        return "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-800 dark:border-l-gray-200"
      case "right":
        return "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-800 dark:border-r-gray-200"
      default:
        return "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800 dark:border-t-gray-200"
    }
  }

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-800 dark:bg-gray-200 dark:text-gray-800 rounded-lg shadow-lg whitespace-nowrap animate-fade-in ${getPositionClasses()}`}
        >
          {content}
          <div className={`absolute w-0 h-0 border-4 ${getArrowClasses()}`} />
        </div>
      )}
    </div>
  )
}
