"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { X, Plus, Minus, ShoppingCart, Clock, Users, Star, Heart, Flame, Leaf } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"

interface DishDetailPanelProps {
  dish: any
  onClose: () => void
}

export function DishDetailPanel({ dish, onClose }: DishDetailPanelProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(dish.sizes?.[0]?.id || "regular")
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [spiceLevel, setSpiceLevel] = useState("medium")
  const [specialRequests, setSpecialRequests] = useState("")
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const { addItem, openCart } = useCart()

  const getCurrentPrice = () => {
    let basePrice = dish.price

    // Add size price modifier
    if (dish.sizes) {
      const selectedSizeObj = dish.sizes.find((size) => size.id === selectedSize)
      if (selectedSizeObj) {
        basePrice = selectedSizeObj.price
      }
    }

    // Add add-ons price
    const addOnsPrice = selectedAddOns.reduce((total, addonId) => {
      const addon = dish.addOns?.find((a) => a.id === addonId)
      return total + (addon?.price || 0)
    }, 0)

    return basePrice + addOnsPrice
  }

  const handleAddToCart = async () => {
    setIsAdding(true)

    const cartItem = {
      id: `${dish.id}-${selectedSize}-${Date.now()}`,
      name: dish.name,
      price: getCurrentPrice(),
      image: dish.image,
      category: dish.category,
      veg: dish.veg,
      spicy: dish.spicy,
      quantity,
      customizations: {
        size: selectedSize,
        addOns: selectedAddOns,
        spiceLevel: dish.spicy ? spiceLevel : undefined,
        specialRequests: specialRequests.trim() || undefined,
      },
    }

    addItem(cartItem)

    // Show success animation
    await new Promise((resolve) => setTimeout(resolve, 800))

    setIsAdding(false)
    onClose()
    openCart()
  }

  const handleAddOnChange = (addonId: string, checked: boolean) => {
    if (checked) {
      setSelectedAddOns([...selectedAddOns, addonId])
    } else {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addonId))
    }
  }

  return (
    <div className="detail-panel absolute inset-0 bg-white z-50 md:relative md:z-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sunset-orange/20">
        <h2 className="font-handwritten text-2xl text-rustic-brown">Dish Details</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className={isFavorite ? "text-red-500" : "text-gray-400"}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-140px)] md:h-[calc(100vh-200px)]">
        <div className="p-6 space-y-6">
          {/* Dish Image */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image
              src={dish.image || "/placeholder.svg?height=256&width=400"}
              alt={dish.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Badges on Image */}
            <div className="absolute top-4 left-4 flex gap-2">
              {dish.featured && (
                <Badge className="bg-yellow-500 text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Chef's Special
                </Badge>
              )}
              {dish.veg && (
                <Badge className="bg-green-500 text-white">
                  <Leaf className="h-3 w-3 mr-1" />
                  Vegetarian
                </Badge>
              )}
              {dish.spicy && (
                <Badge className="bg-red-500 text-white">
                  <Flame className="h-3 w-3 mr-1" />
                  Spicy
                </Badge>
              )}
            </div>

            {/* Price Badge */}
            <div className="absolute bottom-4 right-4">
              <Badge className="bg-white text-rustic-brown text-xl font-bold px-4 py-2">₹{getCurrentPrice()}</Badge>
            </div>
          </div>

          {/* Dish Info */}
          <div>
            <h1 className="font-handwritten text-3xl text-rustic-brown mb-2">{dish.name}</h1>
            <p className="text-rustic-brown/70 text-lg leading-relaxed mb-4">{dish.description}</p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-sunset-orange/10 rounded-lg">
                <Clock className="h-5 w-5 text-sunset-orange mx-auto mb-1" />
                <p className="text-xs text-rustic-brown/70">Prep Time</p>
                <p className="font-semibold text-rustic-brown">{dish.prepTime || "15-20 min"}</p>
              </div>
              <div className="text-center p-3 bg-sky-blue/10 rounded-lg">
                <Users className="h-5 w-5 text-sky-blue mx-auto mb-1" />
                <p className="text-xs text-rustic-brown/70">Serves</p>
                <p className="font-semibold text-rustic-brown">{dish.servingSize || "1-2 people"}</p>
              </div>
              <div className="text-center p-3 bg-mustard-yellow/10 rounded-lg">
                <Star className="h-5 w-5 text-mustard-yellow mx-auto mb-1" />
                <p className="text-xs text-rustic-brown/70">Rating</p>
                <p className="font-semibold text-rustic-brown">{dish.rating || "4.8"}/5</p>
              </div>
            </div>
          </div>

          {/* Size Selection */}
          {dish.sizes && dish.sizes.length > 0 && (
            <div>
              <h3 className="font-semibold text-rustic-brown mb-3">Choose Size</h3>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                <div className="space-y-2">
                  {dish.sizes.map((size) => (
                    <div
                      key={size.id}
                      className="flex items-center justify-between p-3 border border-sunset-orange/20 rounded-lg"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={size.id} id={size.id} />
                        <Label htmlFor={size.id} className="font-medium">
                          {size.name}
                        </Label>
                        {size.description && <span className="text-sm text-rustic-brown/60">({size.description})</span>}
                      </div>
                      <span className="font-semibold text-sunset-orange">₹{size.price}</span>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Add-ons */}
          {dish.addOns && dish.addOns.length > 0 && (
            <div>
              <h3 className="font-semibold text-rustic-brown mb-3">Add-ons</h3>
              <div className="space-y-2">
                {dish.addOns.map((addon) => (
                  <div
                    key={addon.id}
                    className="flex items-center justify-between p-3 border border-sunset-orange/20 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={addon.id}
                        checked={selectedAddOns.includes(addon.id)}
                        onCheckedChange={(checked) => handleAddOnChange(addon.id, checked)}
                      />
                      <Label htmlFor={addon.id} className="font-medium">
                        {addon.name}
                      </Label>
                      {addon.description && <span className="text-sm text-rustic-brown/60">({addon.description})</span>}
                    </div>
                    <span className="font-semibold text-sunset-orange">+₹{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Spice Level */}
          {dish.spicy && (
            <div>
              <h3 className="font-semibold text-rustic-brown mb-3">Spice Level</h3>
              <RadioGroup value={spiceLevel} onValueChange={setSpiceLevel}>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center space-x-2 p-3 border border-sunset-orange/20 rounded-lg">
                    <RadioGroupItem value="mild" id="mild" />
                    <Label htmlFor="mild" className="text-sm">
                      🌶️ Mild
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-sunset-orange/20 rounded-lg">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="text-sm">
                      🌶️🌶️ Medium
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-sunset-orange/20 rounded-lg">
                    <RadioGroupItem value="hot" id="hot" />
                    <Label htmlFor="hot" className="text-sm">
                      🌶️🌶️🌶️ Hot
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Special Requests */}
          <div>
            <h3 className="font-semibold text-rustic-brown mb-3">Special Requests</h3>
            <Textarea
              placeholder="Any special instructions for the chef..."
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="border-sunset-orange/30 focus:border-sunset-orange"
              rows={3}
            />
          </div>

          {/* Ingredients */}
          {dish.ingredients && (
            <div>
              <h3 className="font-semibold text-rustic-brown mb-3">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="secondary" className="bg-cream text-rustic-brown">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Allergen Info */}
          {dish.allergens && dish.allergens.length > 0 && (
            <div>
              <h3 className="font-semibold text-rustic-brown mb-3">Allergen Information</h3>
              <div className="flex flex-wrap gap-2">
                {dish.allergens.map((allergen, index) => (
                  <Badge key={index} className="bg-red-100 text-red-800">
                    ⚠️ {allergen}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Footer - Quantity and Add to Cart */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-sunset-orange/20 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="font-medium text-rustic-brown">Quantity:</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-bold text-lg text-rustic-brown min-w-[2rem] text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)} className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-rustic-brown/70">Total</p>
            <p className="text-2xl font-bold text-sunset-orange">₹{(getCurrentPrice() * quantity).toLocaleString()}</p>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white font-bold py-4 text-lg"
        >
          {isAdding ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Adding to Cart...
            </div>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart - ₹{(getCurrentPrice() * quantity).toLocaleString()}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
