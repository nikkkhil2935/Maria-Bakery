import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award } from "lucide-react"

const teamMembers = [
  {
    name: "Maria D'Souza",
    role: "Founder & Chef",
    bio: "Born in Goa, Maria brings authentic family recipes passed down through generations.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "John Fernandes",
    role: "Head Barista",
    bio: "Coffee enthusiast with 8 years of experience crafting the perfect cup.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Anita Rodrigues",
    role: "Pastry Chef",
    bio: "Specializes in traditional Goan sweets and Italian desserts.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const awards = [
  { name: "Best Goan Restaurant 2023", organization: "Vasai Food Awards" },
  { name: "Customer Choice Award", organization: "Local Dining Guide" },
  { name: "Excellence in Service", organization: "Maharashtra Restaurant Association" },
]

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Maria's feels like a second home. The authentic Goan flavors and warm hospitality keep us coming back every weekend.",
    rating: 5,
    date: "Regular customer since 2022",
  },
  {
    name: "Rajesh Patel",
    text: "The best croissants in Vasai! Perfect spot for morning coffee and catching up with friends.",
    rating: 5,
    date: "Visited 50+ times",
  },
  {
    name: "Sarah D'Silva",
    text: "As a Goan living away from home, Maria's brings back childhood memories with every bite.",
    rating: 5,
    date: "Loyal customer",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-dancing text-4xl md:text-6xl font-bold text-rustic-brown mb-4">Our Story</h1>
          <p className="font-dancing text-xl md:text-2xl text-sunset-orange mb-8">Where Every Bite Tells a Tale</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-rustic-brown/80">
            <p className="text-lg leading-relaxed mb-6">
              Maria's Goan Eatery & Bakery started as a dream to bring the flavors of Goa to the heart of Vasai-Virar.
              Nestled in the cozy neighborhood of Sandor, our café is more than just a place to eat – it's a space to
              create memories.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              From the aroma of freshly baked croissants to the rich, spicy Goan curries and comforting Italian pastas,
              every dish is crafted with love and tradition. Our warm, nostalgic ambiance, coupled with the friendly
              chatter of regulars, makes every visit feel like coming home.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're here for a leisurely breakfast, a casual lunch, or a sweet treat, we promise a dining
              experience that's <span className="font-semibold text-sunset-orange">cozy</span>,{" "}
              <span className="font-semibold text-sunset-orange">casual</span>, and{" "}
              <span className="font-semibold text-sunset-orange">memory-filled</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-3xl md:text-4xl font-bold text-rustic-brown mb-4">Meet Our Team</h2>
            <p className="text-lg text-rustic-brown/70">The passionate people behind your favorite dishes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-semibold text-xl text-rustic-brown mb-2">{member.name}</h3>
                  <p className="text-sunset-orange font-medium mb-3">{member.role}</p>
                  <p className="text-rustic-brown/70 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-3xl md:text-4xl font-bold text-rustic-brown mb-4">Recognition & Awards</h2>
            <p className="text-lg text-rustic-brown/70">Honored to be recognized by our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-mustard-yellow/10 to-sunset-orange/10 border-2 border-mustard-yellow/20"
              >
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-mustard-yellow mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-rustic-brown mb-2">{award.name}</h3>
                  <p className="text-rustic-brown/70 text-sm">{award.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-3xl md:text-4xl font-bold text-rustic-brown mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-rustic-brown/70">Heartfelt words from our café family</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-rustic-brown/80 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-rustic-brown">{testimonial.name}</p>
                    <p className="text-sm text-rustic-brown/60">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
