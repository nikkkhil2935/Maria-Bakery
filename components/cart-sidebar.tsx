"use client"

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"
import Link from "next/link"

export function CartSidebar() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const closeCart = () => {
    dispatch({ type: "TOGGLE_CART" })
  }

  const deliveryFee = state.total >= 500 ? 0 : 50
  const tax = Math.round(state.total * 0.05)
  const finalTotal = state.total + deliveryFee + tax

  if (!state.isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={closeCart} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-sunset-orange text-white">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="font-semibold text-lg">Your Cart</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={closeCart} className="text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">Add some delicious items from our menu!</p>
              <Button asChild onClick={closeCart}>
                <Link href="/menu">Browse Menu</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <p className="font-semibold text-sunset-orange">₹{item.price}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>

                        <span className="w-8 text-center font-medium">{item.quantity}</span>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Clear Cart Button */}
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          )}
        </div>

        {/* Footer with Totals */}
        {state.items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{state.total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                  {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (5%)</span>
                <span>₹{tax}</span>
              </div>
              {state.total < 500 && (
                <p className="text-xs text-gray-500">Add ₹{500 - state.total} more for free delivery!</p>
              )}
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>
            </div>

            <Button asChild className="w-full bg-sunset-orange hover:bg-orange-500" size="lg">
              <Link href="/checkout" onClick={closeCart}>
                Proceed to Checkout
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
