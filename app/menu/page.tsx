"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const menuSections = [
  {
    title: "Croissants",
    description: "Buttery, flaky croissants baked fresh daily",
    items: [
      {
        name: "Plain Croissant",
        price: "₹89",
        image: "/chorizo-croissant.png",
        description: "Classic French croissant with golden, crispy exterior",
      },
      {
        name: "Butter Croissant",
        price: "₹119",
        image: "/croissant-sandwich.png",
        description: "Extra buttery croissant perfect for breakfast",
      },
      {
        name: "Cheese Croissant",
        price: "₹139",
        image: "/croissant-sandwich.png",
        description: "Flaky croissant filled with melted cheese",
      },
      {
        name: "Chorizo Chicken Croissant",
        price: "₹199",
        image: "/chorizo-croissant.png",
        description: "Our signature croissant with spicy Goan chorizo",
      },
    ],
  },
  {
    title: "Goan Mains",
    description: "Authentic Goan flavors passed down through generations",
    items: [
      {
        name: "Chicken Cafreal",
        price: "₹279",
        image: "/curry-rice.png",
        description: "Traditional green masala chicken with aromatic herbs",
      },
      {
        name: "Ross Omelette",
        price: "₹209",
        image: "/ross-omelette.png",
        description: "Goan curry omelette served with fresh bread",
      },
      {
        name: "Mushroom Xacuti",
        price: "₹279",
        image: "/mushroom-xacuti.png",
        description: "Rich vegetarian curry with traditional Goan spices",
      },
      {
        name: "Goan Curry with Bread",
        price: "₹249",
        image: "/goan-curry-bread.png",
        description: "Authentic curry served with traditional Goan bread",
      },
    ],
  },
  {
    title: "Italian Dishes",
    description: "Comforting Italian classics with our special touch",
    items: [
      {
        name: "Goan Shakshuka with Cheese",
        price: "₹289",
        image: "/breakfast-plate.png",
        description: "Goan twist on classic Middle Eastern dish",
      },
      {
        name: "Italian Breakfast Platter",
        price: "₹259",
        image: "/full-breakfast.png",
        description: "Complete Italian-style breakfast experience",
      },
    ],
  },
  {
    title: "Specials",
    description: "Chef's special creations and signature dishes",
    items: [
      {
        name: "All Day English Breakfast",
        price: "₹289",
        image: "/full-breakfast.png",
        description: "Complete breakfast platter with eggs, sausages, and more",
      },
      {
        name: "Maria's Special Platter",
        price: "₹349",
        image: "/breakfast-plate.png",
        description: "Chef's special combination of our best dishes",
      },
    ],
  },
  {
    title: "Desserts & Drinks",
    description: "Sweet endings and refreshing beverages",
    items: [
      {
        name: "Red Wine Cake",
        price: "₹229",
        image: "/placeholder.svg?height=200&width=300",
        description: "Decadent chocolate cake infused with red wine",
      },
      {
        name: "Cold Coffee",
        price: "₹159",
        image: "/placeholder.svg?height=200&width=300",
        description: "Refreshing iced coffee blend perfect for hot days",
      },
      {
        name: "Fresh Lime Soda",
        price: "₹89",
        image: "/placeholder.svg?height=200&width=300",
        description: "Zesty lime soda to refresh your palate",
      },
    ],
  },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-mustard-yellow/10 to-sunset-orange/10">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-r from-rustic-brown to-rustic-brown/80">
        <div className="absolute inset-0">
          <Image src="/full-breakfast.png" alt="Delicious food spread" fill className="object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-handwritten text-5xl md:text-6xl text-cream mb-4 glow-effect">Our Menu</h1>
          <p className="font-casual text-2xl md:text-3xl text-mustard-yellow font-bold mb-4">Delight in Every Bite</p>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Explore our curated selection of Goan and Italian comfort foods, crafted with love and served with
            tradition.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <section key={section.title} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="font-handwritten text-4xl text-rustic-brown mb-2">{section.title}</h2>
              <p className="text-lg text-rustic-brown/70">{section.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-mustard-yellow/20 hover:border-mustard-yellow/50 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-casual text-xl font-bold text-rustic-brown mb-2">{item.name}</h3>
                      <p className="text-rustic-brown/70 text-sm mb-3">{item.description}</p>
                      <p className="text-2xl font-bold text-sunset-orange">{item.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-sunset-orange/20 to-mustard-yellow/20 rounded-2xl p-8 mb-12">
          <h2 className="font-handwritten text-3xl text-rustic-brown mb-4 glow-effect">Hungry? Visit Us Today!</h2>
          <p className="text-rustic-brown/70 mb-6 text-lg">
            Come experience the authentic flavors and warm hospitality that make Maria's special.
          </p>
          <Link href="/find-us">
            <Button className="bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold glow-effect">
              Find Us
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
