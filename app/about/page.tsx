import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award } from "lucide-react"

const teamMembers = [
  {
    name: "Maria",
    role: "Founder & Chef",
    bio: "The heart and soul of our café, Maria brings authentic Goan flavors with 20+ years of culinary passion.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "John",
    role: "Barista",
    bio: "Our coffee maestro who ensures every cup is perfect, from espresso to cold brews.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Anita",
    role: "Pastry Chef",
    bio: "Creates our heavenly croissants and desserts that keep customers coming back for more.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const testimonials = [
  {
    name: "Cynthia D.",
    text: "Very homely and cozy... I think it's one of the best in Vasai. They hardly have 12-15 seating so really quiet and pleasant atmosphere.",
    rating: 5,
  },
  {
    name: "Rohan P.",
    text: "The authentic Goan flavors here are unmatched. Maria's personal touch in every dish makes it special.",
    rating: 5,
  },
  {
    name: "Lisa M.",
    text: "Perfect place for a quiet breakfast or catching up with friends. The chorizo croissant is a must-try!",
    rating: 5,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-to-r from-rustic-brown to-rustic-brown/80">
        <div className="absolute inset-0">
          <Image src="/marias-exterior.png" alt="Maria's café exterior" fill className="object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-handwritten text-5xl md:text-6xl text-cream mb-4">Our Story</h1>
          <p className="font-casual text-2xl md:text-3xl text-mustard-yellow font-bold">
            Where Every Bite Tells a Tale
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-rustic-brown/80 leading-relaxed mb-8">
            Maria's Goan Eatery & Bakery started as a dream to bring the flavors of Goa to the heart of Vasai-Virar.
            Nestled in the cozy neighborhood of Sandor, our café is more than just a place to eat – it's a space to
            create memories. From the aroma of freshly baked croissants to the rich, spicy Goan curries and comforting
            Italian pastas, every dish is crafted with love and tradition.
          </p>
          <p className="text-xl text-rustic-brown/80 leading-relaxed">
            Our warm, nostalgic ambiance, coupled with the friendly chatter of regulars, makes every visit feel like
            coming home. Whether you're here for a leisurely breakfast, a casual lunch, or a sweet treat, we promise a
            dining experience that's cozy, casual, and memory-filled.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-b from-cream to-sky-blue/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-handwritten text-4xl md:text-5xl text-rustic-brown mb-4">Meet Our Team</h2>
            <p className="text-lg text-rustic-brown/70">The passionate people behind every delicious meal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-mustard-yellow/20 hover:border-mustard-yellow/50 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-casual text-xl font-bold text-rustic-brown mb-2">{member.name}</h3>
                  <p className="text-sunset-orange font-semibold mb-3">{member.role}</p>
                  <p className="text-rustic-brown/70 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gradient-to-r from-sunset-orange/10 to-mustard-yellow/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-handwritten text-4xl md:text-5xl text-rustic-brown mb-8">Recognition & Awards</h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-3 bg-white/80 px-6 py-4 rounded-full shadow-lg">
              <Award className="h-8 w-8 text-mustard-yellow" />
              <span className="font-semibold text-rustic-brown">Best Local Café 2023</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 px-6 py-4 rounded-full shadow-lg">
              <Star className="h-8 w-8 text-mustard-yellow fill-current" />
              <span className="font-semibold text-rustic-brown">4.8★ Google Reviews</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 px-6 py-4 rounded-full shadow-lg">
              <Award className="h-8 w-8 text-mustard-yellow" />
              <span className="font-semibold text-rustic-brown">Authentic Goan Cuisine Award</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-handwritten text-4xl md:text-5xl text-rustic-brown mb-4">What Our Customers Say</h2>
            <p className="text-lg text-rustic-brown/70">Genuine reviews from our beloved guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-sunset-orange/20 hover:border-sunset-orange/50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-mustard-yellow text-mustard-yellow" />
                    ))}
                  </div>
                  <p className="text-rustic-brown/80 italic mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-rustic-brown text-center">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
