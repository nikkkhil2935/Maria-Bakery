"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ShoppingCart, Coffee, Filter, X } from "lucide-react"

interface MenuHeaderProps {
  cartItemCount: number
  onCartClick: () => void
  searchTerm: string
  onSearchChange: (term: string) => void
  selectedCategory: string
  onCategoryChange: (category: string) => void
  categories: Array<{ id: string; name: string; icon: string }>
}

export function MenuHeader({
  cartItemCount,
  onCartClick,
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: MenuHeaderProps) {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-sunset-orange/20 sticky top-0 z-50">
      <div className="px-4 py-3">
        {/* Main Header Row */}
        <div className="flex items-center justify-between mb-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Coffee className="h-8 w-8 text-sunset-orange" />
            <div>
              <h1 className="font-handwritten text-xl text-rustic-brown">Maria's Menu</h1>
              <p className="text-xs text-rustic-brown/60">Authentic Goan Cuisine</p>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 w-64 border-sunset-orange/30 focus:border-sunset-orange"
              />
            </div>

            {/* Cart Button */}
            <Button onClick={onCartClick} className="relative bg-sunset-orange hover:bg-orange-500 text-white">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[1.25rem] h-5 flex items-center justify-center">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setShowFilters(!showFilters)}>
              {showFilters ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
            </Button>
            <Button
              onClick={onCartClick}
              size="icon"
              className="relative bg-sunset-orange hover:bg-orange-500 text-white"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[1rem] h-4 flex items-center justify-center">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 border-sunset-orange/30 focus:border-sunset-orange"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className={`${showFilters ? "block" : "hidden"} md:block`}>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange("all")}
              className={`whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-sunset-orange hover:bg-orange-500 text-white"
                  : "border-sunset-orange/30 hover:border-sunset-orange/50"
              }`}
            >
              🍽️ All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className={`whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-sunset-orange hover:bg-orange-500 text-white"
                    : "border-sunset-orange/30 hover:border-sunset-orange/50"
                }`}
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
