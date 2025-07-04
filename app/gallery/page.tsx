import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Maria's cozy interior with wooden tables",
    category: "Interior",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Chicken Cafreal with rice",
    category: "Food",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Happy customers enjoying their meal",
    category: "Customers",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Fresh chorizo croissants",
    category: "Food",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Maria's exterior with coastal vibes",
    category: "Exterior",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Red wine cake slice",
    category: "Food",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Barista preparing coffee",
    category: "Behind the Scenes",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Menu board with daily specials",
    category: "Menu",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Group of friends at Maria's",
    category: "Customers",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-rustic-brown mb-4">The Maria's Moments</h1>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Take a peek into our world - from our delicious dishes to the smiling faces of our wonderful guests. Every
            picture tells a story of good food and great times.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-white border-2 border-mustard-yellow/20 hover:border-mustard-yellow/50 transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rustic-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-mustard-yellow text-rustic-brown px-2 py-1 rounded text-xs font-semibold mb-1">
                        {image.category}
                      </span>
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-mustard-yellow/20 to-sky-blue/20 rounded-2xl p-8 mb-8">
          <h2 className="font-handwritten text-3xl text-rustic-brown mb-4">Share Your Maria's Moment</h2>
          <p className="text-rustic-brown/70 mb-6 max-w-2xl mx-auto">
            Had a great time at Maria's? We'd love to see your photos! Tag us on social media and become part of our
            story.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              📸 Instagram
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              📘 Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
