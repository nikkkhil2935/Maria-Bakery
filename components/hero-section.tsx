import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/full-breakfast.png"
          alt="Maria's delicious breakfast spread"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rustic-brown/85 to-rustic-brown/50"></div>
      </div>

      {/* Maria's Logo */}
      <div className="absolute top-4 left-4 z-10">
        <Image src="/marias-logo.png" alt="Maria's Logo" width={100} height={67} className="drop-shadow-lg" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-handwritten text-5xl sm:text-6xl md:text-7xl text-cream mb-6 drop-shadow-lg leading-tight">
            Welcome to Maria's
          </h1>
          <h2 className="font-casual text-2xl sm:text-3xl md:text-4xl text-sunset-orange mb-6 font-bold">
            Goan Eatery & Bakery
          </h2>
          <p className="text-xl sm:text-2xl text-cream/90 mb-8 drop-shadow max-w-3xl mx-auto leading-relaxed">
            A small homemade food café where every bite brings back memories
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 justify-center mb-8 max-w-2xl mx-auto">
            <span className="bg-mustard-yellow/20 text-cream px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Cozy
            </span>
            <span className="bg-sunset-orange/20 text-cream px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Trendy
            </span>
            <span className="bg-sky-blue/20 text-cream px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Casual
            </span>
            <span className="bg-mustard-yellow/20 text-cream px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Great for Groups & Solo
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/menu" className="w-full sm:w-auto">
              <Button className="bg-sunset-orange hover:bg-orange-500 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full min-h-[56px] font-bold">
                See Menu
              </Button>
            </Link>
            <Link href="/vibe" className="w-full sm:w-auto">
              <Button className="btn-secondary text-lg px-8 py-4 w-full min-h-[56px] font-bold">Explore Vibe</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
