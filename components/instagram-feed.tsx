import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Facebook, Heart } from "lucide-react"

export function InstagramFeed() {
  const instagramPosts = [
    "/croissant-sandwich.png",
    "/full-breakfast.png",
    "/goan-curry-bread.png",
    "/curry-rice.png",
    "/mushroom-xacuti.png",
    "/ross-omelette.png",
  ]

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-sunset-orange/10 via-mustard-yellow/10 to-sky-blue/10">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl sm:text-5xl text-rustic-brown mb-4">Follow Our Journey</h2>
          <p className="text-lg text-rustic-brown/70 mb-8 max-w-2xl mx-auto">
            Follow us on Instagram for daily specials & behind-the-scenes love ❤️
          </p>

          {/* Social Media Buttons - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 max-w-md mx-auto">
            <a
              href="https://www.instagram.com/mariasgoaneaterybakery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[56px] w-full sm:w-auto"
            >
              <Instagram className="h-6 w-6 flex-shrink-0" />
              <span className="truncate">@mariasgoaneaterybakery</span>
            </a>
            <a
              href="https://www.facebook.com/Mariasgoaneaterybakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[56px] w-full sm:w-auto"
            >
              <Facebook className="h-6 w-6 flex-shrink-0" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {instagramPosts.map((img, i) => (
            <Card
              key={i}
              className="group overflow-hidden border-2 border-sunset-orange/20 hover:border-sunset-orange/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`Maria's Instagram post ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-sunset-orange/30 max-w-4xl mx-auto">
          <h3 className="font-handwritten text-2xl sm:text-3xl text-rustic-brown mb-4">Share Your Maria's Moment</h3>
          <p className="text-rustic-brown/70 mb-6 text-base sm:text-lg">
            Tag us in your photos and become part of our delicious story!
          </p>
          <div className="text-sunset-orange font-bold text-lg">#MariasGoaEatery #AuthenticGoanFood #VasaiEats</div>
        </div>
      </div>
    </section>
  )
}
