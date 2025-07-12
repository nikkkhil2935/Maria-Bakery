import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Camera } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Cozy café interior with warm lighting",
    caption: "Our warm and inviting interior",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Fresh croissants on display",
    caption: "Freshly baked croissants every morning",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Happy customers enjoying their meal",
    caption: "Creating memories one meal at a time",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Authentic Goan curry being served",
    caption: "Authentic Goan flavors",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Barista preparing coffee",
    caption: "Crafting the perfect cup",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Friends laughing over breakfast",
    caption: "Good food, great company",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Beautiful food presentation",
    caption: "Every dish is a work of art",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Outdoor seating area",
    caption: "Perfect spot for morning coffee",
  },
  {
    src: "/placeholder.svg?height=400&width=400",
    alt: "Chef Maria in the kitchen",
    caption: "Maria crafting authentic recipes",
  },
]

const customerReviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Maria's is our family's favorite weekend spot. The authentic Goan flavors remind me of my childhood trips to Goa. The chorizo croissant is absolutely divine!",
    date: "2 weeks ago",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Rajesh Kumar",
    rating: 5,
    text: "Perfect place for working with my laptop. Great WiFi, amazing coffee, and the staff is so friendly. The Italian breakfast platter is my go-to order.",
    date: "1 month ago",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Sarah D'Silva",
    rating: 5,
    text: "As someone from Goa living in Mumbai, Maria's feels like home. The fish curry tastes exactly like my grandmother's recipe. Highly recommended!",
    date: "3 weeks ago",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Amit Patel",
    rating: 4,
    text: "Cozy atmosphere and incredible food. The red wine cake is to die for! Great place for dates and family dinners. Will definitely be back.",
    date: "1 week ago",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Neha Rodrigues",
    rating: 5,
    text: "The best Goan restaurant in Vasai! Maria's hospitality is unmatched, and every dish is prepared with so much love. Feels like eating at a friend's home.",
    date: "4 days ago",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Fernandes",
    rating: 5,
    text: "Authentic Goan food that takes me back to my roots. The pork vindaloo is perfectly spiced, and the bebinca is just like my mother used to make.",
    date: "1 week ago",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function VibesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-dancing text-4xl md:text-6xl font-bold text-rustic-brown mb-4">Vibes & Moments</h1>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Step into our world of authentic flavors, warm hospitality, and unforgettable memories
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-3xl md:text-4xl font-bold text-rustic-brown mb-4 flex items-center justify-center gap-3">
              <Camera className="w-8 h-8 text-sunset-orange" />
              Our Gallery
            </h2>
            <p className="text-lg text-rustic-brown/70">Real moments from our café family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-3xl md:text-4xl font-bold text-rustic-brown mb-4 flex items-center justify-center gap-3">
              <Heart className="w-8 h-8 text-sunset-orange" />
              Customer Love
            </h2>
            <p className="text-lg text-rustic-brown/70">Heartfelt words from our beloved customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-rustic-brown">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-rustic-brown/80 text-sm mb-4 leading-relaxed italic">"{review.text}"</p>

                  <div className="text-xs text-rustic-brown/60 border-t pt-3">
                    <p>{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
