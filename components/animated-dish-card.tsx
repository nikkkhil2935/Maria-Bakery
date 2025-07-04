"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Flame, Star, Heart, Eye, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface AnimatedDishCardProps {
  dish: {
    name: string
    price: string
    veg: boolean
    spicy?: boolean
    featured?: boolean
    description?: string
    image?: string
    category: string
  }
  index: number
  onClick: () => void
}

export function AnimatedDishCard({ dish, index, onClick }: AnimatedDishCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Card
      className={`group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 border-2 animate-fade-in-up ${
        dish.featured
          ? "border-sunset-orange/50 bg-gradient-to-br from-mustard-yellow/5 to-sunset-orange/5 hover:border-sunset-orange"
          : "border-sunset-orange/20 hover:border-sunset-orange/50"
      } ${isHovered ? "animate-glow" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <CardContent className="p-0 relative">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={dish.image || "/placeholder.svg?height=200&width=300"}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {dish.featured && (
              <Badge className="bg-gradient-to-r from-sunset-orange to-mustard-yellow text-white animate-pulse-subtle">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Featured
              </Badge>
            )}
            <div className="flex gap-1">
              {dish.veg && (
                <div className="bg-green-500 p-1 rounded-full">
                  <Leaf className="h-3 w-3 text-white" />
                </div>
              )}
              {dish.spicy && (
                <div className="bg-red-500 p-1 rounded-full animate-bounce-subtle">
                  <Flame className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <button
              onClick={handleFavoriteClick}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                isFavorite ? "bg-red-500 text-white" : "bg-white/90 text-rustic-brown"
              }`}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-current animate-pulse" : ""}`} />
            </button>
            <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-rustic-brown hover:bg-white transition-all duration-300 hover:scale-110">
              <Eye className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Add Button */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.stopPropagation()
                alert(`Quick add ${dish.name} to cart!`)
              }}
              className="p-2 rounded-full bg-sunset-orange text-white hover:bg-orange-500 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>

          {/* Price Badge */}
          <div className="absolute bottom-3 left-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Badge className="bg-white text-rustic-brown font-bold text-lg px-3 py-1 shadow-lg">{dish.price}</Badge>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-casual text-lg font-bold text-rustic-brown group-hover:text-sunset-orange transition-colors duration-300">
              {dish.name}
            </h3>
            {dish.featured && (
              <div className="flex items-center gap-1 text-sunset-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
            )}
          </div>

          <p className="text-rustic-brown/70 text-sm leading-relaxed mb-3 line-clamp-2">
            {dish.description || "A delicious dish crafted with authentic flavors and fresh ingredients."}
          </p>

          {/* Interactive Elements */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {dish.veg && (
                <span className="text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
                  Vegetarian
                </span>
              )}
              {dish.spicy && (
                <span className="text-red-600 text-xs font-medium bg-red-50 px-2 py-1 rounded-full">Spicy</span>
              )}
            </div>

            <div className="text-right">
              <p className="text-xs text-rustic-brown/60">Starting from</p>
              <p className="font-bold text-sunset-orange text-lg">{dish.price}</p>
            </div>
          </div>

          {/* Hover Animation Bar */}
          <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sunset-orange to-mustard-yellow transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </div>
        </div>

        {/* Floating Elements */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-mustard-yellow/30 rounded-full animate-ping" />
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-sunset-orange/30 rounded-full animate-bounce" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
