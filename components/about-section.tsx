import Image from "next/image"

export function AboutSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-handwritten text-4xl md:text-5xl text-rustic-brown mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-rustic-brown/80">
              <p>
                Maria's is a small home-style Goan & Italian food café born from recipes passed down through
                generations. Every dish we serve carries the warmth of family traditions and the authentic flavors of
                coastal Goa.
              </p>
              <p>
                Our cozy ambiance with just 12-15 seats makes it the perfect spot for intimate dining experiences.
                Whether you're here for a solo work session with our signature coffee, or gathering with friends over
                hearty meals, we believe food tastes better when shared with love.
              </p>
              <p>
                From our famous Chicken Cafreal to our freshly baked croissants, every bite is crafted with care and
                served with a smile. As our guests say, "It's one of the best in Vasai" - a hidden gem that feels like
                home.
              </p>
            </div>

            {/* Customer Highlights */}
            <div className="mt-6 p-4 bg-gradient-to-r from-mustard-yellow/20 to-sunset-orange/20 rounded-lg">
              <p className="text-rustic-brown/70 italic text-sm">
                "Very homely and cozy... I think it's one of the best in Vasai. They hardly have 12-15 seating so really
                quiet and pleasant atmosphere."
              </p>
              <p className="text-rustic-brown font-medium text-sm mt-2">- Cynthia D., Local Guide</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl mb-6">
              <Image
                src="/marias-exterior.png"
                alt="Maria's cozy exterior with neon sign at night"
                fill
                className="object-cover"
              />
            </div>

            {/* Small interior image */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
              <Image src="/full-breakfast.png" alt="Maria's delicious breakfast spread" fill className="object-cover" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-mustard-yellow/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-sky-blue/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
