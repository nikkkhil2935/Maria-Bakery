"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

interface SwipeGalleryProps {
  images: Array<{
    src: string
    alt: string
    category: string
    caption: string
  }>
}

export function SwipeGallery({ images }: SwipeGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
    setSwipeDirection(null)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return

    const currentTouch = e.targetTouches[0].clientX
    const diff = touchStart - currentTouch

    setTouchEnd(currentTouch)
    setDragOffset(-diff)

    // Determine swipe direction for visual feedback
    if (Math.abs(diff) > 10) {
      setSwipeDirection(diff > 0 ? "left" : "right")
    }
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      setDragOffset(0)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    setIsAnimating(true)

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }

    // Reset states
    setTimeout(() => {
      setIsDragging(false)
      setDragOffset(0)
      setIsAnimating(false)
      setSwipeDirection(null)
    }, 300)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSwipeDirection("left")
    setCurrentIndex((prev) => (prev + 1) % images.length)

    setTimeout(() => {
      setIsAnimating(false)
      setSwipeDirection(null)
    }, 400)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setSwipeDirection("right")
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

    setTimeout(() => {
      setIsAnimating(false)
      setSwipeDirection(null)
    }, 400)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setSwipeDirection(index > currentIndex ? "left" : "right")
    setCurrentIndex(index)

    setTimeout(() => {
      setIsAnimating(false)
      setSwipeDirection(null)
    }, 400)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && !isAnimating) {
        goToNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isDragging, isAnimating])

  return (
    <div className="w-full">
      {/* Mobile Swipe View */}
      <div className="block sm:hidden">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Background glow effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-sunset-orange/20 to-mustard-yellow/20 blur-xl transform transition-all duration-500 ${
              swipeDirection === "left"
                ? "translate-x-4 scale-110"
                : swipeDirection === "right"
                  ? "-translate-x-4 scale-110"
                  : "scale-100"
            }`}
          />

          <div
            className={`flex transition-all duration-300 ease-out ${isDragging ? "" : "transition-transform"}`}
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-all duration-500 ${
                  index === currentIndex ? "scale-100" : "scale-95"
                }`}
              >
                <Card
                  className={`overflow-hidden bg-white border-2 shadow-xl transition-all duration-500 ${
                    index === currentIndex
                      ? "border-sunset-orange/50 shadow-sunset-orange/20"
                      : "border-sunset-orange/20"
                  } ${
                    swipeDirection === "left" && index === currentIndex
                      ? "animate-slide-out-left"
                      : swipeDirection === "right" && index === currentIndex
                        ? "animate-slide-out-right"
                        : index === currentIndex
                          ? "animate-slide-in"
                          : ""
                  }`}
                >
                  <CardContent className="p-0 relative">
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          index === currentIndex ? "scale-100" : "scale-105"
                        } ${swipeDirection && index === currentIndex ? "brightness-110" : ""}`}
                      />

                      {/* Animated overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-rustic-brown/80 via-transparent to-transparent transition-all duration-500 ${
                          index === currentIndex ? "opacity-100" : "opacity-70"
                        }`}
                      >
                        <div
                          className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
                            index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-2 opacity-80"
                          }`}
                        >
                          <span
                            className={`inline-block bg-sunset-orange text-white px-3 py-1 rounded-full text-xs font-bold mb-2 transition-all duration-300 ${
                              index === currentIndex ? "animate-bounce-subtle" : ""
                            }`}
                          >
                            {image.category}
                          </span>
                          <p className="text-white font-medium text-sm leading-tight">{image.caption}</p>
                        </div>
                      </div>

                      {/* Sparkle effect for active slide */}
                      {index === currentIndex && (
                        <div className="absolute top-4 right-4">
                          <Sparkles
                            className={`h-6 w-6 text-mustard-yellow animate-pulse ${isAnimating ? "animate-spin" : ""}`}
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={goToPrev}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white hover:scale-110 hover:shadow-xl active:scale-95"
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5 text-rustic-brown" />
          </button>
          <button
            onClick={goToNext}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-white hover:scale-110 hover:shadow-xl active:scale-95"
            }`}
            disabled={currentIndex === images.length - 1}
          >
            <ChevronRight className="h-5 w-5 text-rustic-brown" />
          </button>

          {/* Swipe direction indicator */}
          {swipeDirection && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 transition-all duration-200 ${
                swipeDirection === "left" ? "right-8 animate-slide-right" : "left-8 animate-slide-left"
              }`}
            >
              <div className="bg-sunset-orange/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {swipeDirection === "left" ? "→" : "←"}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-6 gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-3 bg-gradient-to-r from-sunset-orange to-mustard-yellow shadow-lg animate-pulse-subtle"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sunset-orange to-mustard-yellow transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          />
        </div>

        {/* Enhanced Swipe Instruction */}
        <div className="text-center mt-4">
          <p className="text-rustic-brown/60 text-sm animate-fade-in-up">👈 Swipe left or right to explore more</p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-sunset-orange rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
            <div
              className="w-2 h-2 bg-mustard-yellow rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <div className="w-2 h-2 bg-sky-blue rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
          </div>
        </div>
      </div>

      {/* Enhanced Desktop Grid View */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="group overflow-hidden bg-white border-2 border-sunset-orange/20 hover:border-sunset-orange/50 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-rotate-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rustic-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block bg-sunset-orange text-white px-3 py-1 rounded-full text-xs font-bold mb-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      {image.category}
                    </span>
                    <p className="text-white font-medium text-sm leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.caption}
                    </p>
                  </div>
                </div>

                {/* Hover sparkle effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-5 w-5 text-mustard-yellow animate-pulse" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
