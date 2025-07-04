import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const galleryImages = [
  {
    src: "/full-breakfast.png",
    alt: "Hearty breakfast spread with croissants and coffee",
    caption: "Perfect morning fuel",
  },
  {
    src: "/chorizo-croissant.png",
    alt: "Golden chorizo croissant with herbs",
    caption: "Our signature creation",
  },
  {
    src: "/curry-rice.png",
    alt: "Authentic Goan curry with rice",
    caption: "Taste of coastal Goa",
  },
  {
    src: "/ross-omelette.png",
    alt: "Traditional Ross omelette with bread",
    caption: "Goan breakfast classic",
  },
  {
    src: "/goan-curry-bread.png",
    alt: "Goan curry served with traditional bread",
    caption: "Homestyle comfort",
  },
  {
    src: "/mushroom-xacuti.png",
    alt: "Rich mushroom xacuti curry",
    caption: "Vegetarian delight",
  },
  {
    src: "/breakfast-plate.png",
    alt: "Complete breakfast platter",
    caption: "Start your day right",
  },
  {
    src: "/croissant-sandwich.png",
    alt: "Fresh croissant sandwich",
    caption: "Simple perfection",
  },
  {
    src: "/marias-exterior.png",
    alt: "Maria's cozy café exterior at night",
    caption: "Our welcoming home",
  },
]

const customerReviews = [
  {
    name: "Priya S.",
    rating: 5,
    text: "The Chicken Cafreal is absolutely divine! Authentic Goan flavors that remind me of home. The cozy atmosphere makes it perfect for catching up with friends.",
    date: "2 weeks ago",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Rahul M.",
    rating: 5,
    text: "Perfect spot for working with laptop. Great coffee and the chorizo croissant is amazing! The WiFi is reliable and the ambiance is just right for productivity.",
    date: "1 month ago",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Sarah D.",
    rating: 5,
    text: "Cozy atmosphere and incredible food. The red wine cake is to die for! This place has become my go-to for special occasions and casual meetups.",
    date: "3 weeks ago",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Amit K.",
    rating: 5,
    text: "Family-run feel with authentic recipes. Best Goan food in the area! The warmth of the staff and quality of food keeps bringing me back.",
    date: "1 week ago",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function VibesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-sunset-orange/5 to-sky-blue/10">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-rustic-brown to-rustic-brown/80">
        <div className="absolute inset-0">
          <Image src="/marias-exterior.png" alt="Maria's café atmosphere" fill className="object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-handwritten text-5xl md:text-6xl text-cream mb-4">Vibes & Moments</h1>
          <p className="font-casual text-2xl md:text-3xl text-mustard-yellow font-bold">
            Real Moments, Genuine Experiences
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Gallery Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-handwritten text-4xl text-rustic-brown mb-4">Our Gallery</h2>
            <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
              Capturing the essence of Maria's - from delicious dishes to memorable moments shared by our guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 border-sunset-orange/20 hover:border-sunset-orange/50 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-medium text-sm">{image.caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-handwritten text-4xl text-rustic-brown mb-4">Customer Reviews</h2>
            <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
              Real reviews from our beloved customers who make Maria's a special place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerReviews.map((review, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-2 border-mustard-yellow/30 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-rustic-brown">{review.name}</h3>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-mustard-yellow text-mustard-yellow" />
                          ))}
                        </div>
                      </div>
                      <p className="text-rustic-brown/80 text-sm mb-3 italic">"{review.text}"</p>
                      <p className="text-xs text-rustic-brown/60">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
