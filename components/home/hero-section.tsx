import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Glow Effect */}
      <div className="absolute inset-0 z-0">
        <Image src="/marias-exterior.png" alt="Maria's cozy café exterior" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-rustic-brown/80 to-rustic-brown/40"></div>
        {/* Soft Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-rustic-brown/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-handwritten text-5xl sm:text-6xl md:text-7xl text-cream mb-6 drop-shadow-2xl leading-tight animate-fade-in-up">
            Welcome to Maria's
            <br />
            <span className="text-mustard-yellow">Goan Eatery & Bakery</span>
          </h1>

          <h2
            className="font-casual text-2xl sm:text-3xl md:text-4xl text-sunset-orange mb-8 font-bold drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            A Taste of Home Since Day One
          </h2>

          {/* Call to Action */}
          <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Link href="/menu">
              <Button className="bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold glow-effect">
                See Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
