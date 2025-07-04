"use client"

import { X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import Image from "next/image"
import Link from "next/link"

export function CartSidebar() {
  const { state, dispatch } = useCart()

  const subtotal = state.items.reduce((sum, item) => {
    const price = Number.parseFloat(item.price.replace("₹", ""))
    return sum + price * item.quantity
  }, 0)

  const deliveryFee = subtotal >= 500 ? 0 : 50
  const tax = subtotal * 0.05
  const total = subtotal + deliveryFee + tax

  if (!state.isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={() => dispatch({ type: "CLOSE_CART" })} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-rustic-brown">Your Cart</h2>
            <Button variant="ghost" size="sm" onClick={() => dispatch({ type: "CLOSE_CART" })}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button
                onClick={() => dispatch({ type: "CLOSE_CART" })}
                className="bg-sunset-orange hover:bg-sunset-orange/90"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-rustic-brown truncate">{item.name}</h3>
                      <p className="text-sunset-orange font-bold">{item.price}</p>
                      {item.customizations && (
                        <div className="text-xs text-gray-500 mt-1">
                          {item.customizations.size && <span>Size: {item.customizations.size}</span>}
                          {item.customizations.spiceLevel && <span>, {item.customizations.spiceLevel}</span>}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: item.id, quantity: item.quantity - 1 },
                          })
                        }
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QUANTITY",
                            payload: { id: item.id, quantity: item.quantity + 1 },
                          })
                        }
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Tax (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                {subtotal < 500 && (
                  <p className="text-xs text-gray-500">Add ₹{(500 - subtotal).toFixed(2)} more for free delivery!</p>
                )}
              </div>

              <div className="mt-6 space-y-3">
                <Link href="/checkout" onClick={() => dispatch({ type: "CLOSE_CART" })}>
                  <Button className="w-full bg-sunset-orange hover:bg-sunset-orange/90">Proceed to Checkout</Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => dispatch({ type: "CLEAR_CART" })}
                >
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
