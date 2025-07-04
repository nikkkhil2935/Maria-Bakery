"use client"

import { useState, useEffect } from "react"
import { MenuSidebar } from "@/components/menu-app/menu-sidebar"
import { DishDetailPanel } from "@/components/menu-app/dish-detail-panel"
import { CartPanel } from "@/components/menu-app/cart-panel"
import { MenuHeader } from "@/components/menu-app/menu-header"
import { useCart } from "@/contexts/cart-context"
import { menuData } from "@/data/menu-data"

export default function MenuAppPage() {
  const [selectedDish, setSelectedDish] = useState(null)
  const [showCart, setShowCart] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showDetailPanel, setShowDetailPanel] = useState(false)
  const { state } = useCart()

  // Filter dishes based on category and search
  const filteredDishes = menuData.dishes.filter((dish) => {
    const matchesCategory = selectedCategory === "all" || dish.category === selectedCategory
    const matchesSearch =
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleDishClick = (dish) => {
    setSelectedDish(dish)
    setShowDetailPanel(true)
    setShowCart(false)
  }

  const handleCartClick = () => {
    setShowCart(!showCart)
    setShowDetailPanel(false)
  }

  const handleClosePanel = () => {
    setShowDetailPanel(false)
    setShowCart(false)
  }

  // Close panels on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 768) {
        const panels = document.querySelectorAll(".detail-panel, .cart-panel")
        const clickedInsidePanel = Array.from(panels).some((panel) => panel.contains(event.target))

        if (!clickedInsidePanel && (showDetailPanel || showCart)) {
          handleClosePanel()
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showDetailPanel, showCart])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-mustard-yellow/5 to-sunset-orange/5">
      {/* Header */}
      <MenuHeader
        cartItemCount={state.itemCount}
        onCartClick={handleCartClick}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={menuData.categories}
      />

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - Menu Items */}
        <MenuSidebar
          dishes={filteredDishes}
          onDishClick={handleDishClick}
          selectedDish={selectedDish}
          searchTerm={searchTerm}
        />

        {/* Main Content Area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Welcome Message */}
          {!showDetailPanel && !showCart && (
            <div className="h-full flex items-center justify-center p-8">
              <div className="text-center max-w-md">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-sunset-orange to-mustard-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🍽️</span>
                  </div>
                  <h2 className="font-handwritten text-3xl text-rustic-brown mb-2">Welcome to Maria's Menu</h2>
                  <p className="text-rustic-brown/70 text-lg">
                    Select a dish from the menu to see details and add to your cart
                  </p>
                </div>

                <div className="space-y-3 text-sm text-rustic-brown/60">
                  <div className="flex items-center justify-center gap-2">
                    <span>🌶️</span>
                    <span>Spicy</span>
                    <span className="mx-2">•</span>
                    <span>🥬</span>
                    <span>Vegetarian</span>
                    <span className="mx-2">•</span>
                    <span>⭐</span>
                    <span>Chef's Special</span>
                  </div>
                  <p>Use the search bar or category filters to find your favorite dishes</p>
                </div>
              </div>
            </div>
          )}

          {/* Dish Detail Panel */}
          {showDetailPanel && selectedDish && <DishDetailPanel dish={selectedDish} onClose={handleClosePanel} />}

          {/* Cart Panel */}
          {showCart && <CartPanel onClose={handleClosePanel} />}
        </div>
      </div>

      {/* Mobile Overlay */}
      {(showDetailPanel || showCart) && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={handleClosePanel} />
      )}
    </div>
  )
}
