import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const featuredDishes = [
  {
    name: "Chorizo Croissant",
    image: "/chorizo-croissant.png",
    description: "Flaky buttery croissant filled with spicy Goan chorizo and fresh herbs",
  },
  {
    name: "All-Day Breakfast",
    image: "/breakfast-plate.png",
    description: "Hearty breakfast platter with eggs, sausages, mushrooms, and fresh bread",
  },
  {
    name: "Chicken Xacuti",
    image: "/curry-rice.png",
    description: "Authentic Goan curry with aromatic spices, served with steamed rice",
  },
  {
    name: "Ross Omelette",
    image: "/ross-omelette.png",
    description: "Traditional Goan spicy curry omelette served with fresh bread",
  },
]

export function FeaturedDishes() {
  return (
    <section className="section-padding bg-gradient-to-b from-cream to-sky-blue/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl md:text-5xl text-rustic-brown mb-4">Our Signature Dishes</h2>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Discover the authentic flavors that keep our guests coming back. Each dish is prepared with love using
            traditional recipes and the freshest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white border-2 border-mustard-yellow/20 hover:border-mustard-yellow/50 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-casual text-xl font-bold text-rustic-brown mb-2">{dish.name}</h3>
                  <p className="text-rustic-brown/70 text-sm">{dish.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
