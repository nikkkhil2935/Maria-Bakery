import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-cream pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-rustic-brown mb-4">Find Us</h1>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Located in the heart of Vasai West, we're easy to find and even easier to love. Come visit us for an
            unforgettable dining experience!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-sunset-orange/30 shadow-xl">
            <CardHeader>
              <CardTitle className="font-handwritten text-2xl text-rustic-brown flex items-center gap-2">
                <MapPin className="h-6 w-6 text-sunset-orange" />
                Find Us on the Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8234567890123!2d72.8234567890123!3d19.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMaria's%20Goan%20Eatery%20%26%20Bakery!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maria's Goan Eatery & Bakery Location"
                ></iframe>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sunset-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-rustic-brown">Address</p>
                    <p className="text-rustic-brown/70 text-sm">Sandor, Vasai-Virar, Maharashtra 401201</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Navigation className="h-5 w-5 text-sunset-orange" />
                  <a
                    href="https://maps.app.goo.gl/MNCgYUK8Pg4UEU3H8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rustic-brown hover:text-sunset-orange transition-colors font-medium"
                  >
                    Get Directions on Google Maps
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-mustard-yellow/30 shadow-xl">
              <CardHeader>
                <CardTitle className="font-handwritten text-2xl text-rustic-brown flex items-center gap-2">
                  <Clock className="h-6 w-6 text-mustard-yellow" />
                  Opening Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-rustic-brown font-medium">Monday - Wednesday</span>
                    <span className="text-rustic-brown/70">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-50 p-2 rounded">
                    <span className="text-rustic-brown font-medium">Thursday</span>
                    <span className="text-red-600 font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-rustic-brown font-medium">Friday - Sunday</span>
                    <span className="text-rustic-brown/70">11:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-mustard-yellow/30 shadow-xl">
              <CardHeader>
                <CardTitle className="font-handwritten text-2xl text-rustic-brown flex items-center gap-2">
                  <Phone className="h-6 w-6 text-mustard-yellow" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-rustic-brown font-medium mb-1">Phone</p>
                    <a
                      href="tel:+919579076676"
                      className="text-lg text-mustard-yellow hover:text-rustic-brown transition-colors font-semibold"
                    >
                      095790 76676
                    </a>
                  </div>
                  <div>
                    <p className="text-rustic-brown font-medium mb-2">For Takeaway Orders</p>
                    <p className="text-rustic-brown/70 text-sm mb-3">
                      Call us directly to place your takeaway order. We'll have it ready for pickup!
                    </p>
                    <a
                      href="https://wa.me/919579076676"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-sunset-orange/20 to-mustard-yellow/20 border-2 border-sunset-orange/30 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-casual text-xl font-bold text-rustic-brown mb-4">What We Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-rustic-brown">Amenities</h4>
                    <ul className="space-y-1 text-rustic-brown/70 text-sm">
                      <li>• Free Street Parking</li>
                      <li>• NFC Mobile Payments</li>
                      <li>• Casual & Cozy Atmosphere</li>
                      <li>• WiFi Available</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-rustic-brown">Dining Options</h4>
                    <ul className="space-y-1 text-rustic-brown/70 text-sm">
                      <li>• Breakfast & Brunch</li>
                      <li>• Lunch & Dinner</li>
                      <li>• Dessert & Coffee</li>
                      <li>• Takeaway Available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
