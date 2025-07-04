import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const galleryImages = [
  "/full-breakfast.png",
  "/chorizo-croissant.png",
  "/curry-rice.png",
  "/ross-omelette.png",
  "/goan-curry-bread.png",
  "/mushroom-xacuti.png",
  "/breakfast-plate.png",
  "/croissant-sandwich.png",
]

const reviews = [
  {
    name: "Priya S.",
    rating: 5,
    text: "The Chicken Cafreal is absolutely divine! Authentic Goan flavors that remind me of home.",
    date: "2 weeks ago",
  },
  {
    name: "Rahul M.",
    rating: 5,
    text: "Perfect spot for working with laptop. Great coffee and the chorizo croissant is amazing!",
    date: "1 month ago",
  },
  {
    name: "Sarah D.",
    rating: 5,
    text: "Cozy atmosphere and incredible food. The red wine cake is to die for!",
    date: "3 weeks ago",
  },
  {
    name: "Amit K.",
    rating: 5,
    text: "Family-run feel with authentic recipes. Best Goan food in the area!",
    date: "1 week ago",
  },
]

export function GallerySection() {
  return (
    <section className="py-16 bg-gradient-to-r from-sunset-orange/10 via-mustard-yellow/10 to-sky-blue/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl md:text-5xl text-rustic-brown mb-4">Gallery & Reviews</h2>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Real moments and genuine reviews from our beloved customers
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((img, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 border-sunset-orange/20 hover:border-sunset-orange/50 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border-2 border-mustard-yellow/30 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-mustard-yellow text-mustard-yellow" />
                  ))}
                </div>
                <p className="text-rustic-brown/80 text-sm mb-4 italic">"{review.text}"</p>
                <div className="text-center">
                  <p className="font-semibold text-rustic-brown">{review.name}</p>
                  <p className="text-xs text-rustic-brown/60">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
