import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-dancing text-3xl md:text-5xl font-bold text-rustic-brown">Our Story</h2>

            <div className="prose prose-lg text-rustic-brown/80">
              <p className="text-lg leading-relaxed">
                A quaint homemade café serving <strong>Goan and Italian comfort food with heart</strong>. Loved by
                groups, solo diners, and foodies alike, Maria's is more than just a place to eat – it's where memories
                are made.
              </p>

              <p className="text-lg leading-relaxed">
                Our <em>cozy</em>, <em>casual</em>, and <em>friendly</em> atmosphere welcomes you into a
                <em>memory-filled</em> space where authentic flavors meet warm hospitality. From the aroma of freshly
                baked croissants to rich, spicy Goan curries, every dish is crafted with tradition and love.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="border-sunset-orange/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🏠</div>
                  <h3 className="font-semibold text-rustic-brown">Cozy</h3>
                  <p className="text-sm text-rustic-brown/70">Warm & welcoming</p>
                </CardContent>
              </Card>

              <Card className="border-sunset-orange/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">👥</div>
                  <h3 className="font-semibold text-rustic-brown">Friendly</h3>
                  <p className="text-sm text-rustic-brown/70">Like family</p>
                </CardContent>
              </Card>

              <Card className="border-sunset-orange/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">🍽️</div>
                  <h3 className="font-semibold text-rustic-brown">Casual</h3>
                  <p className="text-sm text-rustic-brown/70">Relaxed dining</p>
                </CardContent>
              </Card>

              <Card className="border-sunset-orange/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">💝</div>
                  <h3 className="font-semibold text-rustic-brown">Memory-filled</h3>
                  <p className="text-sm text-rustic-brown/70">Unforgettable moments</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/full-breakfast.png" alt="Maria's delicious breakfast spread" fill className="object-cover" />
            </div>

            {/* Floating Card */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-2 border-sunset-orange/30">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sunset-orange">500+</div>
                  <div className="text-sm text-rustic-brown">Happy Customers</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
