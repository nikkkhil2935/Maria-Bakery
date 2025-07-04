"use client"

import { useState, useEffect } from "react"
import { Heart, Star, Zap } from "lucide-react"

interface SwipeFeedbackProps {
  direction: "left" | "right" | null
  isVisible: boolean
}

export function SwipeFeedback({ direction, isVisible }: SwipeFeedbackProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    if (isVisible && direction) {
      // Generate particles
      const newParticles = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
      setParticles(newParticles)

      // Clear particles after animation
      const timer = setTimeout(() => {
        setParticles([])
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isVisible, direction])

  if (!isVisible || !direction) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Main feedback icon */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 transition-all duration-300 ${
          direction === "left" ? "right-8 animate-slide-right" : "left-8 animate-slide-left"
        }`}
      >
        <div
          className={`p-4 rounded-full backdrop-blur-sm shadow-lg ${
            direction === "left"
              ? "bg-gradient-to-r from-sunset-orange/80 to-mustard-yellow/80"
              : "bg-gradient-to-r from-sky-blue/80 to-mustard-yellow/80"
          }`}
        >
          {direction === "left" ? (
            <Star className="h-8 w-8 text-white animate-spin" />
          ) : (
            <Heart className="h-8 w-8 text-white animate-pulse" />
          )}
        </div>
      </div>

      {/* Particle effects */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.id * 100}ms`,
          }}
        >
          <Zap className="h-3 w-3 text-sunset-orange" />
        </div>
      ))}

      {/* Swipe trail effect */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r opacity-60 ${
          direction === "left"
            ? "right-16 from-transparent to-sunset-orange animate-slide-right"
            : "left-16 from-transparent to-sky-blue animate-slide-left"
        }`}
      />
    </div>
  )
}
