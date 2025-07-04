"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, Send, Heart } from "lucide-react"

export function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    favoriteItem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", review: "", favoriteItem: "" })
      setRating(0)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 shadow-xl">
        <CardContent className="p-6 sm:p-8 text-center">
          <div className="mb-4">
            <Heart className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="font-handwritten text-2xl sm:text-3xl text-green-800 mb-2">Thank You!</h3>
            <p className="text-green-700 text-sm sm:text-base">
              Your review means the world to us! We'll share it with our team and consider featuring it on our website.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/90 backdrop-blur-sm border-2 border-sunset-orange/30 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="font-handwritten text-2xl sm:text-3xl text-rustic-brown flex items-center gap-2">
          <Send className="h-6 w-6 text-sunset-orange" />
          Share Your Experience
        </CardTitle>
        <p className="text-rustic-brown/70 text-sm sm:text-base">
          Help other food lovers discover Maria's by sharing your experience with us!
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-rustic-brown mb-2">
              How would you rate your experience?
            </label>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1 transition-transform hover:scale-110 focus:outline-none"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`h-8 w-8 sm:h-10 sm:w-10 transition-colors ${
                      star <= (hoveredRating || rating) ? "fill-sunset-orange text-sunset-orange" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-sunset-orange font-medium">
                {rating === 5 && "Excellent! 🌟"}
                {rating === 4 && "Very Good! 👍"}
                {rating === 3 && "Good! 😊"}
                {rating === 2 && "Okay 👌"}
                {rating === 1 && "Needs Improvement 🤔"}
              </p>
            )}
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-rustic-brown mb-2">
              Your Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-mustard-yellow/30 focus:border-mustard-yellow text-base"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-rustic-brown mb-2">
              Email Address (Optional)
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-mustard-yellow/30 focus:border-mustard-yellow text-base"
              placeholder="your@email.com"
            />
          </div>

          {/* Favorite Item */}
          <div>
            <label htmlFor="favoriteItem" className="block text-sm font-medium text-rustic-brown mb-2">
              What did you love most?
            </label>
            <Input
              type="text"
              id="favoriteItem"
              name="favoriteItem"
              value={formData.favoriteItem}
              onChange={handleChange}
              className="border-mustard-yellow/30 focus:border-mustard-yellow text-base"
              placeholder="e.g., Chicken Cafreal, Ross Omelette, Chorizo Croissant..."
            />
          </div>

          {/* Review */}
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-rustic-brown mb-2">
              Your Review
            </label>
            <Textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              rows={4}
              className="border-mustard-yellow/30 focus:border-mustard-yellow resize-none text-base"
              placeholder="Tell us about your experience at Maria's..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || rating === 0}
            className="btn-primary w-full text-base sm:text-lg py-3 sm:py-4 min-h-[48px]"
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
