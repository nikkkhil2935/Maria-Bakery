import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, MapPin } from "lucide-react"
import { ReviewForm } from "@/components/review-form"

const reviews = [
  {
    name: "Cynthia Dsouza",
    role: "Local Guide · 17 reviews · 39 photos",
    rating: 5,
    text: "Very homely and cozy. Extremely delicious food. I found the service quick, didn't have to wait for food. I think it's one of the best in vasai. They hardly have 12-15 seating so really quiet and pleasant atmosphere. I think their mojitos are a little expensive. Rest everything perfect!",
    date: "a month ago",
    verified: true,
  },
  {
    name: "Robin Shetty",
    role: "Local Guide · 36 reviews · 127 photos",
    rating: 5,
    text: "Maria's, a charming Goan restaurant, offers an authentic culinary experience that truly captures the essence of Goan cuisine. From the moment you step inside, the vibrant ambiance and friendly staff create a welcoming atmosphere.",
    date: "8 months ago",
    verified: true,
  },
  {
    name: "Alok Shettigar",
    role: "Local Guide · 100 reviews · 465 photos",
    rating: 5,
    text: "While exploring Vasai, my wife and I stumbled upon Maria's Goan Eatery and Bakery. It's a small, cozy cafe with a charming Goan vibe, featuring simple decor like hand-painted murals and maps. Though the space is tiny, it's got a welcoming atmosphere.",
    date: "6 months ago",
    verified: true,
  },
  {
    name: "Jitu Deshmukh",
    role: "Local Guide · 124 reviews · 307 photos",
    rating: 5,
    text: "This lovely little spot in vasai, bread was super fresh, the best you can get! The food was delicious, Perfect place for a quiet, cozy meal.",
    date: "4 days ago",
    verified: true,
    isNew: true,
  },
  {
    name: "Sheetal Nyalpelly",
    role: "Local Guide · 72 reviews · 484 photos",
    rating: 5,
    text: "Maria's Cafe in Vasai is a charming spot offering a delightful fusion of Goan and Italian cuisine. If you've ever longed for the flavors of Goa, this is the place to be.",
    date: "a year ago",
    verified: true,
  },
  {
    name: "Divyesh Rajan",
    role: "Local Guide · 14 reviews · 39 photos",
    rating: 5,
    text: "Maria's Goan Eatery is my all time Go to Place. May it be breakfast or Lunch or even Dinner. This place fills your stomach with delicious and authentic Goan Food. Loads of Options to try, i would always recommend everyone to try this place out once you visit Vasai✨",
    date: "a year ago",
    verified: true,
  },
  {
    name: "Vijaya Mayekar",
    role: "Local Guide · 21 reviews · 25 photos",
    rating: 5,
    text: "You will get this cozy vibe here at this eatery, The food is great and I especially come here by traveling an hour to eat their croissant sandwich. I simply love the preparation and the filling. Prices are very pocket friendly. Highly recommend.",
    date: "11 months ago",
    verified: true,
  },
  {
    name: "Yash Churi",
    role: "Local Guide · 97 reviews · 556 photos",
    rating: 5,
    text: "Amazing! A must! This casual dining cafe has something for everyone! We are so fortunate to have this outstanding cafe in our town of vasai. It's a gem. The food was just amazing, the prawns Recheado was so authentic, cold coffee was good.",
    date: "a year ago",
    verified: true,
  },
]

export default function ReviewsPage() {
  const averageRating = 5.0
  const totalReviews = reviews.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-mustard-yellow/5 to-sunset-orange/5 pt-4 sm:pt-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-handwritten text-4xl sm:text-5xl md:text-6xl text-rustic-brown mb-4 sm:mb-6">
            What Our Guests Say
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 sm:h-8 sm:w-8 fill-sunset-orange text-sunset-orange" />
              ))}
            </div>
            <div className="text-center">
              <span className="text-2xl sm:text-3xl font-bold text-rustic-brown">{averageRating}</span>
              <p className="text-xs sm:text-sm text-rustic-brown/70">Based on {totalReviews}+ Google Reviews</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-sunset-orange" />
            <span className="text-rustic-brown font-medium text-sm sm:text-base">Verified Google Maps Reviews</span>
          </div>
          <p className="text-base sm:text-lg text-rustic-brown/70 max-w-2xl mx-auto px-4">
            Don't just take our word for it - hear from the wonderful people who make Maria's special. Every review
            tells a story of great food and memorable moments.
          </p>
        </div>

        {/* Add Review Form */}
        <div className="mb-8 sm:mb-12">
          <ReviewForm />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-white/90 backdrop-blur-sm border-2 border-sunset-orange/20 hover:border-sunset-orange/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
            >
              <CardContent className="p-4 sm:p-6">
                {review.isNew && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    NEW
                  </div>
                )}

                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-rustic-brown text-base sm:text-lg truncate">{review.name}</h3>
                    <p className="text-rustic-brown/60 text-xs mb-1 truncate">{review.role}</p>
                    <p className="text-rustic-brown/60 text-xs sm:text-sm">{review.date}</p>
                  </div>
                  {review.verified && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1 ml-2 flex-shrink-0">
                      <MapPin className="h-3 w-3" />
                      Google
                    </span>
                  )}
                </div>

                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-sunset-orange text-sunset-orange" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-sunset-orange/30 absolute -top-1 sm:-top-2 -left-1" />
                  <blockquote className="text-rustic-brown/80 italic pl-4 sm:pl-6 leading-relaxed text-sm sm:text-base">
                    {review.text}
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center bg-gradient-to-r from-sunset-orange/20 to-mustard-yellow/20 rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8">
          <h2 className="font-handwritten text-2xl sm:text-3xl text-rustic-brown mb-3 sm:mb-4">
            Love Maria's? Share Your Experience!
          </h2>
          <p className="text-rustic-brown/70 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Your review helps other food lovers discover our authentic Goan cuisine. Share your Maria's moment with the
            world!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/MNCgYUK8Pg4UEU3H8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
            >
              <MapPin className="h-5 w-5" />
              Write a Google Review
            </a>
            <a
              href="tel:+919579076676"
              className="bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] flex items-center justify-center"
            >
              📞 Visit & Experience
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="text-center bg-white/80 rounded-xl p-3 sm:p-6 border-2 border-mustard-yellow/30">
            <div className="text-2xl sm:text-3xl font-bold text-sunset-orange mb-1 sm:mb-2">500+</div>
            <div className="text-rustic-brown font-medium text-xs sm:text-base">Happy Customers</div>
          </div>
          <div className="text-center bg-white/80 rounded-xl p-3 sm:p-6 border-2 border-mustard-yellow/30">
            <div className="text-2xl sm:text-3xl font-bold text-sunset-orange mb-1 sm:mb-2">5.0</div>
            <div className="text-rustic-brown font-medium text-xs sm:text-base">Average Rating</div>
          </div>
          <div className="text-center bg-white/80 rounded-xl p-3 sm:p-6 border-2 border-mustard-yellow/30">
            <div className="text-2xl sm:text-3xl font-bold text-sunset-orange mb-1 sm:mb-2">5+</div>
            <div className="text-rustic-brown font-medium text-xs sm:text-base">Years Serving</div>
          </div>
          <div className="text-center bg-white/80 rounded-xl p-3 sm:p-6 border-2 border-mustard-yellow/30">
            <div className="text-2xl sm:text-3xl font-bold text-sunset-orange mb-1 sm:mb-2">12-15</div>
            <div className="text-rustic-brown font-medium text-xs sm:text-base">Cozy Seats</div>
          </div>
        </div>
      </div>
    </div>
  )
}
