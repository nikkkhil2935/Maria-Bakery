import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const menuCategories = [
  {
    title: "Croissants",
    items: [
      { name: "Chorizo Chicken Croissant", price: "₹199", image: "/chorizo-croissant.png" },
      { name: "Cheese Croissant", price: "₹139", image: "/croissant-sandwich.png" },
      { name: "Plain Croissant", price: "₹89", image: "/chorizo-croissant.png" },
    ],
  },
  {
    title: "Goan Mains",
    items: [
      { name: "Chicken Cafreal", price: "₹279", image: "/curry-rice.png" },
      { name: "Ross Omelette", price: "₹209", image: "/ross-omelette.png" },
      { name: "Mushroom Xacuti", price: "₹279", image: "/mushroom-xacuti.png" },
    ],
  },
  {
    title: "Italian Dishes",
    items: [
      { name: "Goan Shakshuka with Cheese", price: "₹289", image: "/breakfast-plate.png" },
      { name: "Italian Breakfast Platter", price: "₹259", image: "/full-breakfast.png" },
    ],
  },
  {
    title: "Specials",
    items: [
      { name: "All Day English Breakfast", price: "₹289", image: "/full-breakfast.png" },
      { name: "Goan Curry with Bread", price: "₹249", image: "/goan-curry-bread.png" },
    ],
  },
  {
    title: "Desserts & Drinks",
    items: [
      { name: "Red Wine Cake", price: "₹229", image: "/placeholder.svg?height=200&width=300" },
      { name: "Cold Coffee", price: "₹159", image: "/placeholder.svg?height=200&width=300" },
    ],
  },
]

export function MenuPreviewSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-cream to-sky-blue/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl md:text-5xl text-rustic-brown mb-4">Our Menu</h2>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Discover our curated selection of Goan and Italian comfort foods, crafted with love and tradition.
          </p>
        </div>

        {menuCategories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-16">
            <h3 className="font-handwritten text-3xl text-rustic-brown text-center mb-8">{category.title}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
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
                      <h4 className="font-casual text-xl font-bold text-rustic-brown mb-2">{item.name}</h4>
                      <p className="text-2xl font-bold text-sunset-orange">{item.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <Link href="/menu">
            <Button className="bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
