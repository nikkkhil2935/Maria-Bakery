"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Heart, Star, Clock, Users, Flame, Leaf, Plus, Minus, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

interface DishModalProps {
  dish: {
    name: string
    price: string
    veg: boolean
    spicy?: boolean
    featured?: boolean
    description?: string
    image?: string
    ingredients?: string[]
    prepTime?: string
    servingSize?: string
    calories?: string
    allergens?: string[]
    category: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export function DishModal({ dish, isOpen, onClose }: DishModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { addItem, openCart } = useCart()

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!dish || !isOpen) return null

  const handleAddToCart = () => {
    setIsAnimating(true)

    const cartItem = {
      id: `${dish.name}-${Date.now()}`,
      name: dish.name,
      price: Number.parseInt(dish.price.replace("₹", "")),
      image: dish.image,
      category: dish.category,
      veg: dish.veg,
      spicy: dish.spicy,
      quantity,
    }

    addItem(cartItem)

    setTimeout(() => {
      setIsAnimating(false)
      onClose()
      openCart()
    }, 600)
  }

  const handleCall = () => {
    window.open("tel:+919579076676", "_self")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      {/* Modal */}
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl animate-slide-up border-2 border-sunset-orange/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <X className="h-5 w-5 text-rustic-brown" />
        </button>

        {/* Dish Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <Image
            src={dish.image || "/placeholder.svg?height=320&width=600"}
            alt={dish.name}
            fill
            className="object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {dish.featured && (
              <Badge className="bg-gradient-to-r from-sunset-orange to-mustard-yellow text-white animate-pulse-subtle">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            )}
            {dish.veg && (
              <Badge className="bg-green-500 text-white">
                <Leaf className="h-3 w-3 mr-1" />
                Veg
              </Badge>
            )}
            {dish.spicy && (
              <Badge className="bg-red-500 text-white animate-bounce-subtle">
                <Flame className="h-3 w-3 mr-1" />
                Spicy
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`absolute top-4 right-16 p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
              isFavorite ? "bg-red-500 text-white" : "bg-white/90 text-rustic-brown"
            }`}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current animate-pulse" : ""}`} />
          </button>

          {/* Price Badge */}
          <div className="absolute bottom-4 right-4">
            <Badge className="bg-white text-rustic-brown text-xl font-bold px-4 py-2 shadow-lg">{dish.price}</Badge>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6">
          {/* Header */}
          <div className="mb-6">
            <CardTitle className="font-handwritten text-3xl text-rustic-brown mb-2 animate-fade-in-up">
              {dish.name}
            </CardTitle>
            <p
              className="text-rustic-brown/70 text-lg leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              {dish.description ||
                "A delicious dish crafted with love using authentic recipes and the freshest ingredients."}
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div
              className="text-center p-3 bg-gradient-to-br from-sunset-orange/10 to-mustard-yellow/10 rounded-lg animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Clock className="h-5 w-5 text-sunset-orange mx-auto mb-1" />
              <p className="text-xs text-rustic-brown/70">Prep Time</p>
              <p className="font-semibold text-rustic-brown">{dish.prepTime || "15-20 min"}</p>
            </div>
            <div
              className="text-center p-3 bg-gradient-to-br from-sky-blue/10 to-mustard-yellow/10 rounded-lg animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <Users className="h-5 w-5 text-sky-blue mx-auto mb-1" />
              <p className="text-xs text-rustic-brown/70">Serves</p>
              <p className="font-semibold text-rustic-brown">{dish.servingSize || "1-2 people"}</p>
            </div>
            <div
              className="text-center p-3 bg-gradient-to-br from-mustard-yellow/10 to-sunset-orange/10 rounded-lg animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <Star className="h-5 w-5 text-mustard-yellow mx-auto mb-1" />
              <p className="text-xs text-rustic-brown/70">Rating</p>
              <p className="font-semibold text-rustic-brown">4.8/5</p>
            </div>
            <div
              className="text-center p-3 bg-gradient-to-br from-green-100 to-green-50 rounded-lg animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <Flame className="h-5 w-5 text-green-600 mx-auto mb-1" />
              <p className="text-xs text-rustic-brown/70">Calories</p>
              <p className="font-semibold text-rustic-brown">{dish.calories || "~350"}</p>
            </div>
          </div>

          {/* Ingredients */}
          {dish.ingredients && (
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <h3 className="font-casual text-lg font-bold text-rustic-brown mb-3">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ingredient, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-cream text-rustic-brown hover:bg-mustard-yellow/20 transition-colors duration-300"
                  >
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Allergens */}
          {dish.allergens && dish.allergens.length > 0 && (
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "700ms" }}>
              <h3 className="font-casual text-lg font-bold text-rustic-brown mb-3">Allergen Information</h3>
              <div className="flex flex-wrap gap-2">
                {dish.allergens.map((allergen, index) => (
                  <Badge
                    key={index}
                    className="bg-red-100 text-red-800 hover:bg-red-200 transition-colors duration-300"
                  >
                    ⚠️ {allergen}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <h3 className="font-casual text-lg font-bold text-rustic-brown mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 hover:scale-110 active:scale-95"
              >
                <Minus className="h-4 w-4 text-rustic-brown" />
              </button>
              <span className="text-2xl font-bold text-rustic-brown min-w-[3rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 hover:scale-110 active:scale-95"
              >
                <Plus className="h-4 w-4 text-rustic-brown" />
              </button>
              <div className="ml-4">
                <p className="text-sm text-rustic-brown/70">Total</p>
                <p className="text-xl font-bold text-sunset-orange">
                  ₹{(Number.parseInt(dish.price.replace("₹", "")) * quantity).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "900ms" }}>
            <Button
              onClick={handleAddToCart}
              className={`flex-1 bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
                isAnimating ? "animate-pulse" : ""
              }`}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {isAnimating ? "Adding..." : "Add to Cart"}
            </Button>
            <Button
              onClick={handleCall}
              className="flex-1 bg-gradient-to-r from-sky-blue to-blue-400 hover:from-blue-400 hover:to-sky-blue text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              📞 Call to Order
            </Button>
          </div>

          {/* Additional Info */}
          <div
            className="mt-6 p-4 bg-gradient-to-r from-mustard-yellow/10 to-sunset-orange/10 rounded-lg animate-fade-in-up"
            style={{ animationDelay: "1000ms" }}
          >
            <p className="text-sm text-rustic-brown/70 text-center">
              💡 <strong>Pro Tip:</strong> This dish pairs perfectly with our fresh bread and a cold coffee!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
