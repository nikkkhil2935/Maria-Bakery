"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"

export function CartButton() {
  const { state, dispatch } = useCart()

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="relative border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white bg-transparent"
        onClick={() => dispatch({ type: "TOGGLE_CART" })}
      >
        <ShoppingCart className="h-4 w-4" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-sunset-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>
      <CartSidebar />
    </>
  )
}
