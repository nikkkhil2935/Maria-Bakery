"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Flame, Star, Plus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const featuredItems = [
  {
    id: "chorizo-croissant",
    name: "Chorizo Chicken Croissant",
    price: 199,
    image: "/chorizo-croissant.png",
    category: "Croissants",
    description: "Spicy chorizo chicken with herbs",
    veg: false,
    popular: true,
    spicy: true,
  },
  {
    id: "chicken-cafreal",
    name: "Chicken Cafreal",
    price: 280,
    image: "/curry-rice.png",
    category: "Goan Mains",
    description: "Traditional Goan green masala chicken",
    veg: false,
    popular: true,
    spicy: true,
  },
  {
    id: "goan-shakshuka",
    name: "Goan Shakshuka with Cheese",
    price: 250,
    image: "/breakfast-plate.png",
    category: "Italian Dishes",
    description: "Goan twist on the classic shakshuka",
    veg: true,
    popular: true,
    spicy: false,
  },
  {
    id: "marias-special",
    name: "Maria's Special Platter",
    price: 420,
    image: "/full-breakfast.png",
    category: "Specials",
    description: "Chef's special combination platter",
    veg: false,
    popular: true,
    spicy: true,
  },
  {
    id: "red-wine-cake",
    name: "Red Wine Cake",
    price: 150,
    image: "/goan-curry-bread.png",
    category: "Desserts & Drinks",
    description: "Rich chocolate cake with red wine",
    veg: true,
    popular: true,
    spicy: false,
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    price: 120,
    image: "/mushroom-xacuti.png",
    category: "Desserts & Drinks",
    description: "Refreshing iced coffee with cream",
    veg: true,
    popular: true,
    spicy: false,
  },
]

const categories = [
  { name: "Croissants", description: "Freshly baked daily", icon: "🥐" },
  { name: "Goan Mains", description: "Authentic coastal flavors", icon: "🍛" },
  { name: "Italian Dishes", description: "Classic comfort food", icon: "🍝" },
  { name: "Specials", description: "Chef's signature creations", icon: "⭐" },
  { name: "Desserts & Drinks", description: "Sweet endings & beverages", icon: "🍰" },
]

export function MenuPreviewSection() {
  const { dispatch } = useCart()

  const addToCart = (item: any) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
      },
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-dancing text-3xl md:text-5xl font-bold text-rustic-brown mb-4">Our Menu</h2>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Discover our curated selection of authentic Goan and Italian dishes, crafted with love and tradition
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300 border-sunset-orange/20"
            >
              <CardContent className="p-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-rustic-brown mb-1">{category.name}</h3>
                <p className="text-sm text-rustic-brown/60">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Items */}
        <div className="mb-12">
          <h3 className="font-dancing text-2xl md:text-3xl font-bold text-rustic-brown mb-8 text-center">
            Featured Favorites
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-sunset-orange/20"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.veg && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          <Leaf className="w-3 h-3 mr-1" />
                          Veg
                        </Badge>
                      )}
                      {item.spicy && (
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                          <Flame className="w-3 h-3 mr-1" />
                          Spicy
                        </Badge>
                      )}
                      {item.popular && (
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-lg text-rustic-brown group-hover:text-sunset-orange transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-sm text-rustic-brown/60">{item.category}</p>
                      </div>
                      <span className="font-bold text-xl text-sunset-orange">₹{item.price}</span>
                    </div>

                    <p className="text-rustic-brown/70 text-sm mb-4 line-clamp-2">{item.description}</p>

                    <Button
                      onClick={() => addToCart(item)}
                      className="w-full bg-sunset-orange hover:bg-sunset-orange/90 text-white font-medium"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-sunset-orange hover:bg-sunset-orange/90 text-white font-semibold px-8 py-4 text-lg"
          >
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
