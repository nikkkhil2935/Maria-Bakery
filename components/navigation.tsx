"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, User } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Vibes & Moments", href: "/vibes" },
  { name: "Find Us", href: "/find-us" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { state, dispatch } = useCart()

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" })
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/marias-logo.png" alt="Maria's Logo" width={40} height={40} className="rounded-full" />
            <span className="font-dancing text-2xl font-bold text-rustic-brown">Maria's</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-rustic-brown hover:text-sunset-orange transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Admin Access */}
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <User className="h-4 w-4 mr-2" />
                Admin
              </Button>
            </Link>

            {/* Cart Button */}
            <Button variant="ghost" size="sm" onClick={toggleCart} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-sunset-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-rustic-brown hover:text-sunset-orange transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/admin"
                className="block px-3 py-2 text-rustic-brown hover:text-sunset-orange transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Admin Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
