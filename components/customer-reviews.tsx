"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Priya S.",
    rating: 5,
    text: "The Chicken Cafreal is absolutely divine! Authentic Goan flavors that remind me of home.",
    date: "2 weeks ago",
  },
  {
    name: "Rahul M.",
    rating: 5,
    text: "Perfect spot for working with laptop. Great coffee and the chorizo croissant is amazing!",
    date: "1 month ago",
  },
  {
    name: "Sarah D.",
    rating: 5,
    text: "Cozy atmosphere and incredible food. The red wine cake is to die for!",
    date: "3 weeks ago",
  },
  {
    name: "Amit K.",
    rating: 5,
    text: "Family-run feel with authentic recipes. Best Goan food in the area!",
    date: "1 week ago",
  },
]

export function CustomerReviews() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-rustic-brown">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl md:text-5xl text-mustard-yellow mb-4">What Our Guests Say</h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the wonderful people who make Maria's special
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-cream/95 border-2 border-mustard-yellow/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-mustard-yellow text-mustard-yellow" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-rustic-brown mb-6 font-medium italic">
                  "{reviews[currentReview].text}"
                </blockquote>
                <div className="text-rustic-brown/70">
                  <p className="font-semibold">{reviews[currentReview].name}</p>
                  <p className="text-sm">{reviews[currentReview].date}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? "bg-mustard-yellow" : "bg-cream/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
