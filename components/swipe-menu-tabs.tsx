"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Zap } from "lucide-react"

interface SwipeMenuTabsProps {
  categories: Record<string, { title: string }>
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function SwipeMenuTabs({ categories, activeCategory, onCategoryChange }: SwipeMenuTabsProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const categoryKeys = Object.keys(categories)
  const currentIndex = categoryKeys.indexOf(activeCategory)

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
    setDragOffset(-diff * 0.3) // Reduced drag sensitivity for smoother feel

    // Determine swipe direction
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

    if (isLeftSwipe && currentIndex < categoryKeys.length - 1) {
      onCategoryChange(categoryKeys[currentIndex + 1])
    } else if (isRightSwipe && currentIndex > 0) {
      onCategoryChange(categoryKeys[currentIndex - 1])
    }

    // Reset states with staggered timing
    setTimeout(() => {
      setIsDragging(false)
      setDragOffset(0)
    }, 200)

    setTimeout(() => {
      setIsAnimating(false)
      setSwipeDirection(null)
    }, 500)
  }

  const handleCategoryChange = (newCategory: string) => {
    if (isAnimating) return

    const newIndex = categoryKeys.indexOf(newCategory)
    setIsAnimating(true)
    setSwipeDirection(newIndex > currentIndex ? "left" : "right")
    onCategoryChange(newCategory)

    setTimeout(() => {
      setIsAnimating(false)
      setSwipeDirection(null)
    }, 500)
  }

  const scrollToCategory = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Auto-scroll active tab into view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(
        `[data-category="${activeCategory}"]`,
      ) as HTMLElement
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: "smooth", inline: "center" })
      }
    }
  }, [activeCategory])

  return (
    <div className="relative">
      {/* Mobile Swipe Tabs */}
      <div className="block sm:hidden">
        <div
          className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 shadow-xl transition-all duration-500 ${
            isAnimating ? "border-sunset-orange/60 shadow-sunset-orange/20 scale-105" : "border-sunset-orange/30"
          }`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            transform: `translateX(${dragOffset}px) ${isAnimating ? "scale(1.02)" : "scale(1)"}`,
          }}
        >
          {/* Background animation */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-sunset-orange/10 via-mustard-yellow/10 to-sky-blue/10 rounded-2xl transition-all duration-700 ${
              isAnimating ? "opacity-100 scale-110" : "opacity-50 scale-100"
            }`}
          />

          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap
                className={`h-5 w-5 text-sunset-orange transition-all duration-300 ${
                  isAnimating ? "animate-spin" : "animate-pulse"
                }`}
              />
              <h3
                className={`font-handwritten text-2xl text-rustic-brown transition-all duration-500 ${
                  isAnimating ? "scale-110 text-sunset-orange" : "scale-100"
                }`}
              >
                {categories[activeCategory].title}
              </h3>
              <Zap
                className={`h-5 w-5 text-sunset-orange transition-all duration-300 ${
                  isAnimating ? "animate-spin" : "animate-pulse"
                }`}
              />
            </div>

            <div className="flex justify-center items-center gap-3 mb-3">
              <span
                className={`text-rustic-brown/60 text-sm transition-all duration-300 ${
                  isAnimating ? "text-sunset-orange font-medium" : ""
                }`}
              >
                {currentIndex + 1} of {categoryKeys.length}
              </span>
            </div>

            {/* Enhanced progress dots */}
            <div className="flex justify-center gap-2">
              {categoryKeys.map((key, index) => (
                <div
                  key={key}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "w-6 h-2 bg-gradient-to-r from-sunset-orange to-mustard-yellow animate-pulse-subtle"
                      : "w-2 h-2 bg-gray-300"
                  } ${Math.abs(index - currentIndex) === 1 ? "bg-gray-400 scale-110" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          <button
            onClick={() => handleCategoryChange(categoryKeys[currentIndex - 1])}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-sunset-orange/20 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-sunset-orange/40 hover:scale-110 active:scale-95 animate-bounce-x-left"
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 text-rustic-brown" />
          </button>
          <button
            onClick={() => handleCategoryChange(categoryKeys[currentIndex + 1])}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-sunset-orange/20 backdrop-blur-sm p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === categoryKeys.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-sunset-orange/40 hover:scale-110 active:scale-95 animate-bounce-x-right"
            }`}
            disabled={currentIndex === categoryKeys.length - 1}
          >
            <ChevronRight className="h-4 w-4 text-rustic-brown" />
          </button>

          {/* Swipe direction indicator */}
          {swipeDirection && (
            <div
              className={`absolute top-2 transition-all duration-300 ${
                swipeDirection === "left" ? "right-2 animate-slide-right" : "left-2 animate-slide-left"
              }`}
            >
              <div className="bg-sunset-orange text-white px-2 py-1 rounded-full text-xs font-bold">
                {swipeDirection === "left" ? "→" : "←"}
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Swipe Instruction */}
        <div className="text-center mt-4">
          <p className="text-rustic-brown/60 text-sm animate-fade-in-up">👈 Swipe to browse menu categories</p>
          <div className="flex justify-center items-center gap-1 mt-2">
            <div className="w-1 h-1 bg-sunset-orange rounded-full animate-ping" style={{ animationDelay: "0ms" }} />
            <div className="w-1 h-1 bg-mustard-yellow rounded-full animate-ping" style={{ animationDelay: "200ms" }} />
            <div className="w-1 h-1 bg-sky-blue rounded-full animate-ping" style={{ animationDelay: "400ms" }} />
          </div>
        </div>
      </div>

      {/* Enhanced Desktop Scrollable Tabs */}
      <div className="hidden sm:block relative">
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categoryKeys.map((key, index) => (
            <button
              key={key}
              data-category={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-6 py-4 rounded-full font-casual text-base font-bold transition-all duration-500 whitespace-nowrap flex-shrink-0 relative overflow-hidden ${
                activeCategory === key
                  ? "bg-gradient-to-r from-sunset-orange to-mustard-yellow text-white shadow-xl transform scale-110 -rotate-1"
                  : "bg-white text-rustic-brown hover:bg-sunset-orange/20 border-2 border-sunset-orange/30 hover:scale-105 hover:shadow-lg"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Background animation for active tab */}
              {activeCategory === key && (
                <div className="absolute inset-0 bg-gradient-to-r from-mustard-yellow/30 to-sunset-orange/30 animate-pulse" />
              )}

              <span className="relative z-10">{categories[key].title}</span>

              {/* Active indicator */}
              {activeCategory === key && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-bounce" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Scroll Arrows for Desktop */}
        <button
          onClick={() => scrollToCategory("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95 z-10"
        >
          <ChevronLeft className="h-5 w-5 text-rustic-brown" />
        </button>
        <button
          onClick={() => scrollToCategory("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-xl hover:bg-white transition-all duration-300 hover:scale-110 active:scale-95 z-10"
        >
          <ChevronRight className="h-5 w-5 text-rustic-brown" />
        </button>
      </div>
    </div>
  )
}
