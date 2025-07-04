import { SwipeGallery } from "@/components/swipe-gallery"
import { Heart, Camera, Users, Coffee, Instagram, Facebook } from "lucide-react"

const vibeImages = [
  {
    src: "/full-breakfast.png",
    alt: "Hearty all-day breakfast with croissants and sausages",
    category: "Breakfast",
    caption: "Start your day the Maria's way",
  },
  {
    src: "/goan-curry-bread.png",
    alt: "Authentic Goan curry with traditional bread",
    category: "Goan Specialties",
    caption: "Flavors that transport you to Goa",
  },
  {
    src: "/curry-rice.png",
    alt: "Rich curry served with fragrant rice",
    category: "Main Course",
    caption: "Comfort food at its finest",
  },
  {
    src: "/mushroom-xacuti.png",
    alt: "Mushroom Xacuti with fresh Goan bread",
    category: "Vegetarian",
    caption: "Plant-based perfection",
  },
  {
    src: "/breakfast-plate.png",
    alt: "Complete breakfast spread with eggs and sides",
    category: "All-Day Dining",
    caption: "Perfect any time of day",
  },
  {
    src: "/ross-omelette.png",
    alt: "Traditional Ross Omelette with bread",
    category: "Goan Classics",
    caption: "A taste of authentic Goa",
  },
  {
    src: "/croissant-sandwich.png",
    alt: "Fresh croissant sandwich with butter",
    category: "Light Bites",
    caption: "Simple pleasures, perfectly made",
  },
  {
    src: "/chorizo-croissant.png",
    alt: "Chorizo croissant with herbs",
    category: "Signature",
    caption: "Our most loved creation",
  },
  {
    src: "/marias-logo.png",
    alt: "Maria's vintage-style logo",
    category: "Our Story",
    caption: "Where tradition meets taste",
  },
]

export default function VibePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-sunset-orange/5 to-sky-blue/10 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-handwritten text-5xl sm:text-6xl text-rustic-brown mb-6">Special Moments</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl font-casual font-bold text-sunset-orange mb-4">
              More than just food — it's a vibe.
            </p>
            <p className="text-lg text-rustic-brown/70 mb-8 leading-relaxed">
              Step into Maria's and feel the warmth of home. Every corner tells a story, every meal creates a memory,
              and every visit becomes part of your journey.
            </p>

            {/* Vibe Tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-gradient-to-r from-sunset-orange/20 to-mustard-yellow/20 px-4 py-3 rounded-full">
                <Heart className="h-5 w-5 text-sunset-orange" />
                <span className="font-medium text-rustic-brown">Cozy & Warm</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-sky-blue/20 to-mustard-yellow/20 px-4 py-3 rounded-full">
                <Users className="h-5 w-5 text-sky-blue" />
                <span className="font-medium text-rustic-brown">Perfect for Groups</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-mustard-yellow/20 to-sunset-orange/20 px-4 py-3 rounded-full">
                <Coffee className="h-5 w-5 text-rustic-brown" />
                <span className="font-medium text-rustic-brown">Solo-Friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-sunset-orange/20 to-sky-blue/20 px-4 py-3 rounded-full">
                <Camera className="h-5 w-5 text-sunset-orange" />
                <span className="font-medium text-rustic-brown">Instagram-Worthy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Swipeable Gallery */}
        <div className="mb-16">
          <SwipeGallery images={vibeImages} />
        </div>

        {/* Instagram Section */}
        <div className="bg-gradient-to-r from-sunset-orange/10 via-mustard-yellow/10 to-sky-blue/10 rounded-3xl p-6 sm:p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="font-handwritten text-4xl text-rustic-brown mb-4">Follow Our Journey</h2>
            <p className="text-lg text-rustic-brown/70 mb-6">
              Follow us on Instagram for daily specials & behind-the-scenes love ❤️
            </p>

            {/* Social Media Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
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
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border-2 border-sunset-orange/30">
          <h2 className="font-handwritten text-3xl text-rustic-brown mb-4">Ready to Create Your Own Maria's Memory?</h2>
          <p className="text-rustic-brown/70 mb-6 text-lg">
            Come experience the warmth, taste the tradition, and become part of our story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="https://maps.app.goo.gl/MNCgYUK8Pg4UEU3H8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px] flex items-center justify-center"
            >
              📍 Visit Us Today
            </a>
            <a
              href="tel:+919579076676"
              className="bg-gradient-to-r from-sky-blue to-blue-400 hover:from-blue-400 hover:to-sky-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px] flex items-center justify-center"
            >
              �📞 Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
