"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Flame, Star, Plus } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const menuCategories = [
  {
    title: "Croissants",
    description: "Freshly baked daily with love",
    items: [
      {
        id: "croissant-plain",
        name: "Plain Croissant",
        price: 80,
        image: "/placeholder.svg?height=200&width=200",
        description: "Buttery, flaky, and perfectly golden",
        veg: true,
        popular: false,
      },
      {
        id: "croissant-butter",
        name: "Butter Croissant",
        price: 90,
        image: "/placeholder.svg?height=200&width=200",
        description: "Extra buttery with a rich, indulgent taste",
        veg: true,
        popular: true,
      },
      {
        id: "croissant-cheese",
        name: "Cheese Croissant",
        price: 120,
        image: "/placeholder.svg?height=200&width=200",
        description: "Filled with melted cheese goodness",
        veg: true,
        popular: false,
      },
      {
        id: "croissant-chorizo",
        name: "Chorizo Chicken Croissant",
        price: 199,
        image: "/placeholder.svg?height=200&width=200",
        description: "Spicy chorizo chicken with herbs",
        veg: false,
        popular: true,
        spicy: true,
      },
      {
        id: "croissant-cafreal",
        name: "Chicken Cafreal Croissant",
        price: 189,
        image: "/placeholder.svg?height=200&width=200",
        description: "Authentic Goan cafreal chicken filling",
        veg: false,
        popular: false,
        spicy: true,
      },
    ],
  },
  {
    title: "Goan Mains",
    description: "Authentic flavors from the coast of Goa",
    items: [
      {
        id: "chicken-cafreal",
        name: "Chicken Cafreal",
        price: 280,
        image: "/placeholder.svg?height=200&width=200",
        description: "Traditional Goan green masala chicken",
        veg: false,
        popular: true,
        spicy: true,
      },
      {
        id: "ross-omelette",
        name: "Ross Omelette",
        price: 180,
        image: "/placeholder.svg?height=200&width=200",
        description: "Goan-style curry omelette with coconut",
        veg: false,
        popular: true,
        spicy: true,
      },
      {
        id: "mushroom-xacuti",
        name: "Mushroom Xacuti",
        price: 220,
        image: "/placeholder.svg?height=200&width=200",
        description: "Aromatic mushroom curry with roasted spices",
        veg: true,
        popular: false,
        spicy: true,
      },
      {
        id: "goan-curry-bread",
        name: "Goan Curry with Bread",
        price: 249,
        image: "/placeholder.svg?height=200&width=200",
        description: "Traditional curry served with fresh bread",
        veg: false,
        popular: false,
        spicy: true,
      },
      {
        id: "pork-vindaloo",
        name: "Pork Vindaloo",
        price: 320,
        image: "/placeholder.svg?height=200&width=200",
        description: "Fiery Goan pork curry with vinegar and spices",
        veg: false,
        popular: false,
        spicy: true,
      },
      {
        id: "fish-curry",
        name: "Goan Fish Curry",
        price: 299,
        image: "/placeholder.svg?height=200&width=200",
        description: "Coconut-based fish curry with kokum",
        veg: false,
        popular: true,
        spicy: true,
      },
    ],
  },
  {
    title: "Italian Dishes",
    description: "Classic Italian comfort food",
    items: [
      {
        id: "goan-shakshuka",
        name: "Goan Shakshuka with Cheese",
        price: 250,
        image: "/placeholder.svg?height=200&width=200",
        description: "Goan twist on the classic shakshuka",
        veg: true,
        popular: true,
        spicy: false,
      },
      {
        id: "italian-breakfast",
        name: "Italian Breakfast Platter",
        price: 320,
        image: "/placeholder.svg?height=200&width=200",
        description: "Complete breakfast with eggs, sausage, and toast",
        veg: false,
        popular: true,
        spicy: false,
      },
      {
        id: "pasta-arrabbiata",
        name: "Pasta Arrabbiata",
        price: 280,
        image: "/placeholder.svg?height=200&width=200",
        description: "Spicy tomato pasta with garlic and herbs",
        veg: true,
        popular: false,
        spicy: true,
      },
      {
        id: "margherita-pizza",
        name: "Margherita Pizza",
        price: 350,
        image: "/placeholder.svg?height=200&width=200",
        description: "Classic pizza with fresh mozzarella and basil",
        veg: true,
        popular: true,
        spicy: false,
      },
      {
        id: "chicken-alfredo",
        name: "Chicken Alfredo Pasta",
        price: 380,
        image: "/placeholder.svg?height=200&width=200",
        description: "Creamy pasta with grilled chicken",
        veg: false,
        popular: false,
        spicy: false,
      },
    ],
  },
  {
    title: "Specials",
    description: "Chef's signature creations",
    items: [
      {
        id: "english-breakfast",
        name: "All Day English Breakfast",
        price: 350,
        image: "/placeholder.svg?height=200&width=200",
        description: "Full English breakfast served all day",
        veg: false,
        popular: true,
        spicy: false,
      },
      {
        id: "marias-special",
        name: "Maria's Special Platter",
        price: 420,
        image: "/placeholder.svg?height=200&width=200",
        description: "Chef's special combination platter",
        veg: false,
        popular: true,
        spicy: true,
      },
      {
        id: "goan-thali",
        name: "Goan Thali",
        price: 380,
        image: "/placeholder.svg?height=200&width=200",
        description: "Complete Goan meal with rice, curry, and sides",
        veg: false,
        popular: true,
        spicy: true,
      },
      {
        id: "weekend-brunch",
        name: "Weekend Brunch Special",
        price: 299,
        image: "/placeholder.svg?height=200&width=200",
        description: "Special weekend brunch combination",
        veg: false,
        popular: false,
        spicy: false,
      },
    ],
  },
  {
    title: "Desserts & Drinks",
    description: "Sweet endings and refreshing beverages",
    items: [
      {
        id: "red-wine-cake",
        name: "Red Wine Cake",
        price: 150,
        image: "/placeholder.svg?height=200&width=200",
        description: "Rich chocolate cake with red wine",
        veg: true,
        popular: true,
        spicy: false,
      },
      {
        id: "cold-coffee",
        name: "Cold Coffee",
        price: 120,
        image: "/placeholder.svg?height=200&width=200",
        description: "Refreshing iced coffee with cream",
        veg: true,
        popular: true,
        spicy: false,
      },
      {
        id: "fresh-lime-soda",
        name: "Fresh Lime Soda",
        price: 80,
        image: "/placeholder.svg?height=200&width=200",
        description: "Freshly squeezed lime with soda",
        veg: true,
        popular: false,
        spicy: false,
      },
      {
        id: "bebinca",
        name: "Bebinca",
        price: 180,
        image: "/placeholder.svg?height=200&width=200",
        description: "Traditional Goan layered dessert",
        veg: true,
        popular: false,
        spicy: false,
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: 100,
        image: "/placeholder.svg?height=200&width=200",
        description: "Perfect espresso with steamed milk",
        veg: true,
        popular: true,
        spicy: false,
      },
      {
        id: "fresh-juice",
        name: "Fresh Fruit Juice",
        price: 90,
        image: "/placeholder.svg?height=200&width=200",
        description: "Seasonal fresh fruit juice",
        veg: true,
        popular: false,
        spicy: false,
      },
      {
        id: "masala-chai",
        name: "Masala Chai",
        price: 60,
        image: "/placeholder.svg?height=200&width=200",
        description: "Traditional spiced tea",
        veg: true,
        popular: true,
        spicy: false,
      },
      {
        id: "chocolate-mousse",
        name: "Chocolate Mousse",
        price: 160,
        image: "/placeholder.svg?height=200&width=200",
        description: "Rich and creamy chocolate dessert",
        veg: true,
        popular: false,
        spicy: false,
      },
    ],
  },
]

export default function MenuPage() {
  const { dispatch } = useCart()

  const addToCart = (item: any) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: menuCategories.find((cat) => cat.items.some((i) => i.id === item.id))?.title,
      },
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-dancing text-4xl md:text-6xl font-bold text-rustic-brown mb-4">Our Menu</h1>
          <p className="font-dancing text-xl md:text-2xl text-sunset-orange mb-6">Delight in Every Bite</p>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Explore our curated selection of Goan and Italian comfort foods, crafted with authentic ingredients and
            traditional recipes.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {menuCategories.map((category, categoryIndex) => (
          <section key={category.title} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-dancing text-3xl md:text-4xl font-bold text-rustic-brown mb-2">{category.title}</h2>
              <p className="text-lg text-rustic-brown/70">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
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
                        <h3 className="font-semibold text-lg text-rustic-brown group-hover:text-sunset-orange transition-colors">
                          {item.name}
                        </h3>
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
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sunset-orange to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-dancing text-3xl md:text-4xl font-bold mb-4">Hungry? Visit Us Today!</h2>
          <p className="text-xl mb-8">Experience the authentic flavors in our cozy café atmosphere</p>
          <Button
            asChild
            size="lg"
            className="bg-white text-sunset-orange hover:bg-cream font-semibold px-8 py-4 text-lg"
          >
            <a href="/find-us">Find Us</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
