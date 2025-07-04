"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

interface MenuSidebarProps {
  dishes: any[]
  onDishClick: (dish: any) => void
  selectedDish: any
  searchTerm: string
}

export function MenuSidebar({ dishes, onDishClick, selectedDish, searchTerm }: MenuSidebarProps) {
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text

    const regex = new RegExp(`(${highlight})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-rustic-brown rounded px-1">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    <div className="w-full md:w-96 bg-white border-r border-sunset-orange/20 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-sunset-orange/20">
        <h2 className="font-handwritten text-2xl text-rustic-brown mb-1">Our Menu</h2>
        <p className="text-sm text-rustic-brown/60">
          {dishes.length} {dishes.length === 1 ? "dish" : "dishes"} available
        </p>
      </div>

      {/* Menu Items */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {dishes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-medium text-rustic-brown mb-2">No dishes found</h3>
              <p className="text-sm text-rustic-brown/60">Try adjusting your search or category filter</p>
            </div>
          ) : (
            dishes.map((dish) => (
              <Card
                key={dish.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-2 ${
                  selectedDish?.id === dish.id
                    ? "border-sunset-orange bg-sunset-orange/5"
                    : "border-sunset-orange/20 hover:border-sunset-orange/40"
                }`}
                onClick={() => onDishClick(dish)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    {/* Dish Image */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={dish.image || "/placeholder.svg?height=64&width=64"}
                        alt={dish.name}
                        fill
                        className="object-cover"
                      />
                      {dish.featured && (
                        <div className="absolute top-1 right-1">
                          <Badge className="bg-yellow-500 text-white text-xs px-1 py-0">⭐</Badge>
                        </div>
                      )}
                    </div>

                    {/* Dish Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-rustic-brown text-sm leading-tight">
                          {highlightText(dish.name, searchTerm)}
                        </h3>
                        <span className="text-sunset-orange font-bold text-sm ml-2">₹{dish.price}</span>
                      </div>

                      {/* Badges */}
                      <div className="flex items-center gap-1 mb-2">
                        {dish.veg && <span className="text-green-600 text-xs">🥬</span>}
                        {dish.spicy && <span className="text-red-500 text-xs">🌶️</span>}
                        {dish.featured && <span className="text-yellow-500 text-xs">⭐</span>}
                        <span className="text-xs text-rustic-brown/60 capitalize">
                          {dish.category.replace("-", " ")}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-rustic-brown/70 line-clamp-2 leading-relaxed">
                        {highlightText(dish.description, searchTerm)}
                      </p>

                      {/* Quick Stats */}
                      {dish.prepTime && (
                        <div className="flex items-center gap-3 mt-2 text-xs text-rustic-brown/60">
                          <span>⏱️ {dish.prepTime}</span>
                          {dish.rating && <span>⭐ {dish.rating}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
