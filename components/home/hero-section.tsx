import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/marias-exterior.png"
          alt="Maria's Goan Eatery & Bakery Exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-dancing text-4xl sm:text-6xl md:text-7xl font-bold mb-6 glow-effect">
          Welcome to Maria's
          <br />
          <span className="text-mustard-yellow">Goan Eatery & Bakery</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-light glow-effect">A Taste of Home Since Day One</p>

        <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Experience authentic Goan and Italian flavors in our cozy, memory-filled café where every bite tells a story
        </p>

        <Link href="/menu">
          <Button
            size="lg"
            className="bg-sunset-orange hover:bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 glow-effect transform hover:scale-105"
          >
            See Our Menu
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
