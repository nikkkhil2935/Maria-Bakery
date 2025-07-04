"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Coffee } from "lucide-react"
import { CartButton } from "@/components/cart-button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Vibes & Moments", href: "/vibes" },
  { name: "Find Us", href: "/find-us" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-cream/95 backdrop-blur-sm border-b-2 border-sunset-orange/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-sunset-orange" />
            <span className="font-handwritten text-2xl text-rustic-brown">Maria's</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-rustic-brown hover:text-sunset-orange transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <CartButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <CartButton />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-rustic-brown hover:text-sunset-orange transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cream border-t border-sunset-orange/20">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-rustic-brown hover:text-sunset-orange transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
