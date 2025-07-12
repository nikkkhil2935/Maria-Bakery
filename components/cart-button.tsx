"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export function CartButton() {
  const { state, dispatch } = useCart()

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" })
  }

  return (
    <Button
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-50 bg-sunset-orange hover:bg-orange-500 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300"
      size="lg"
    >
      <ShoppingCart className="h-6 w-6" />
      {state.itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
          {state.itemCount}
        </span>
      )}
    </Button>
  )
}
