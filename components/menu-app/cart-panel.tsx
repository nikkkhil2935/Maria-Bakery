"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, Leaf, Flame } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

interface CartPanelProps {
  onClose: () => void
}

export function CartPanel({ onClose }: CartPanelProps) {
  const { state, removeItem, updateQuantity, clearCart } = useCart()

  const deliveryFee = state.total > 500 ? 0 : 30
  const tax = state.total * 0.05
  const finalTotal = state.total + deliveryFee + tax

  if (state.items.length === 0) {
    return (
      <div className="cart-panel absolute inset-0 bg-white z-50 md:relative md:z-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sunset-orange/20">
          <h2 className="font-handwritten text-2xl text-rustic-brown">Your Cart</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Empty State */}
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="font-handwritten text-2xl text-rustic-brown mb-2">Your cart is empty</h3>
            <p className="text-rustic-brown/60 mb-6">Add some delicious items to get started!</p>
            <Button onClick={onClose} className="bg-sunset-orange hover:bg-orange-500 text-white">
              Browse Menu
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-panel absolute inset-0 bg-white z-50 md:relative md:z-auto flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-sunset-orange/20">
        <div>
          <h2 className="font-handwritten text-2xl text-rustic-brown">Your Cart</h2>
          <p className="text-sm text-rustic-brown/60">{state.itemCount} items</p>
        </div>
        <div className="flex items-center gap-2">
          {state.items.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Cart Items */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {state.items.map((item) => (
            <Card key={item.id} className="border border-sunset-orange/20">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  {/* Item Image */}
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg?height=64&width=64"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-rustic-brown text-sm">{item.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          {item.veg && <Leaf className="h-3 w-3 text-green-600" />}
                          {item.spicy && <Flame className="h-3 w-3 text-red-500" />}
                          <span className="text-xs text-rustic-brown/60 capitalize">
                            {item.category.replace("-", " ")}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="h-6 w-6 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Customizations */}
                    {item.customizations && (
                      <div className="mb-2">
                        {item.customizations.size && item.customizations.size !== "regular" && (
                          <Badge variant="secondary" className="text-xs mr-1 mb-1">
                            Size: {item.customizations.size}
                          </Badge>
                        )}
                        {item.customizations.spiceLevel && (
                          <Badge variant="secondary" className="text-xs mr-1 mb-1">
                            {item.customizations.spiceLevel} spice
                          </Badge>
                        )}
                        {item.customizations.addOns?.map((addon, i) => (
                          <Badge key={i} variant="secondary" className="text-xs mr-1 mb-1">
                            +{addon}
                          </Badge>
                        ))}
                        {item.customizations.specialRequests && (
                          <p className="text-xs text-rustic-brown/60 italic mt-1">
                            Note: {item.customizations.specialRequests}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-6 w-6"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-semibold text-rustic-brown min-w-[1.5rem] text-center text-sm">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-6 w-6"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sunset-orange">₹{(item.price * item.quantity).toLocaleString()}</p>
                        {item.quantity > 1 && <p className="text-xs text-rustic-brown/60">₹{item.price} each</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      {/* Price Breakdown */}
      <div className="border-t border-sunset-orange/20 p-4 bg-gray-50">
        <div className="space-y-3">
          {/* Delivery Info */}
          {deliveryFee > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                💡 <strong>Free delivery</strong> on orders above ₹500
              </p>
            </div>
          )}

          {/* Price Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-rustic-brown/70">Subtotal ({state.itemCount} items)</span>
              <span className="text-rustic-brown">₹{state.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-rustic-brown/70">Delivery Fee</span>
              <span className={`${deliveryFee === 0 ? "text-green-600" : "text-rustic-brown"}`}>
                {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-rustic-brown/70">Taxes & Fees</span>
              <span className="text-rustic-brown">₹{tax.toFixed(0)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold">
              <span className="text-rustic-brown">Total Amount</span>
              <span className="text-sunset-orange text-lg">₹{finalTotal.toFixed(0)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Link href="/checkout" className="block">
            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white font-bold py-4 text-lg"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Proceed to Checkout
            </Button>
          </Link>

          {/* Continue Shopping */}
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full border-sunset-orange/30 text-rustic-brown hover:bg-sunset-orange/5 bg-transparent"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  )
}
