"use client"

import { useState, useEffect } from "react"
import { Sparkles, Coffee } from "lucide-react"

interface AnimatedLoadingProps {
  isVisible: boolean
  message?: string
}

export function AnimatedLoading({ isVisible, message = "Loading delicious content..." }: AnimatedLoadingProps) {
  const [dots, setDots] = useState("")

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return ""
        return prev + "."
      })
    }, 500)

    return () => clearInterval(interval)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-cream/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated logo */}
        <div className="relative mb-6">
          <Coffee className="h-16 w-16 text-sunset-orange mx-auto animate-bounce" />
          <div className="absolute -top-2 -right-2">
            <Sparkles className="h-6 w-6 text-mustard-yellow animate-spin" />
          </div>
          <div className="absolute -bottom-2 -left-2">
            <Sparkles className="h-4 w-4 text-sky-blue animate-pulse" />
          </div>
        </div>

        {/* Loading text */}
        <h2 className="font-handwritten text-2xl text-rustic-brown mb-2">Maria's Kitchen</h2>
        <p className="text-rustic-brown/70 font-medium">
          {message}
          {dots}
        </p>

        {/* Animated progress bar */}
        <div className="mt-6 w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-sunset-orange to-mustard-yellow animate-shimmer" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-sunset-orange/30 rounded-full animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-mustard-yellow/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-sky-blue/30 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  )
}
