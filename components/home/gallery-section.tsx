import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const galleryImages = [
  {
    src: "/marias-exterior.png",
    alt: "Maria's cozy exterior",
    caption: "Our welcoming café entrance",
  },
  {
    src: "/full-breakfast.png",
    alt: "Delicious breakfast spread",
    caption: "All-day English breakfast",
  },
  {
    src: "/chorizo-croissant.png",
    alt: "Chorizo croissant",
    caption: "Signature chorizo croissant",
  },
  {
    src: "/curry-rice.png",
    alt: "Goan curry with rice",
    caption: "Authentic Goan curry",
  },
  {
    src: "/ross-omelette.png",
    alt: "Ross omelette",
    caption: "Traditional ross omelette",
  },
  {
    src: "/breakfast-plate.png",
    alt: "Breakfast plate",
    caption: "Hearty breakfast plate",
  },
  {
    src: "/mushroom-xacuti.png",
    alt: "Mushroom xacuti",
    caption: "Aromatic mushroom xacuti",
  },
  {
    src: "/goan-curry-bread.png",
    alt: "Goan curry with bread",
    caption: "Curry with fresh bread",
  },
  {
    src: "/croissant-sandwich.png",
    alt: "Croissant sandwich",
    caption: "Fresh croissant sandwich",
  },
]

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Amazing Goan food! The chorizo croissant is absolutely divine. Maria's has become our family's favorite weekend spot.",
    date: "2 weeks ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Rahul Mehta",
    rating: 5,
    text: "Authentic flavors that remind me of my trips to Goa. The ross omelette is perfectly spiced and the service is warm and friendly.",
    date: "1 month ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sarah D'Souza",
    rating: 5,
    text: "Best café in Vasai! The Italian dishes are as good as the Goan ones. Love the cozy atmosphere and reasonable prices.",
    date: "3 weeks ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Amit Patel",
    rating: 4,
    text: "Great food and lovely ambiance. The red wine cake is a must-try! Perfect place for both casual meals and special occasions.",
    date: "1 week ago",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function GallerySection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-dancing text-3xl md:text-5xl font-bold text-rustic-brown mb-4">Vibes & Moments</h2>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Real moments from our café family - delicious food, happy faces, and memories being made
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium">{image.caption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Reviews */}
        <div>
          <h3 className="font-dancing text-2xl md:text-3xl font-bold text-rustic-brown mb-8 text-center">
            What Our Customers Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-sunset-orange/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-rustic-brown">{review.name}</h4>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-rustic-brown/70 text-sm mb-2">{review.text}</p>
                      <p className="text-xs text-rustic-brown/50">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
