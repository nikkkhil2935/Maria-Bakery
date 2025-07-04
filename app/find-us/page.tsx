import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Navigation, Instagram, Facebook } from "lucide-react"

export default function FindUsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-rustic-brown to-rustic-brown/80">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-handwritten text-5xl md:text-6xl text-cream mb-4">Find Us</h1>
          <p className="font-casual text-2xl md:text-3xl text-mustard-yellow font-bold">
            We're Easy to Find & Even Easier to Love
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Location Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-sunset-orange/30 shadow-xl">
              <CardHeader>
                <CardTitle className="font-handwritten text-2xl text-rustic-brown flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-sunset-orange" />
                  Our Location
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
                      <p className="text-rustic-brown/70 text-sm">
                        Maulana Azad Rd, opp. Mudra Studio, Remedy, Vasai West, Sandor, Vasai-Virar, Maharashtra 401201
                      </p>
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
                    Open Daily
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
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-mustard-yellow" />
                      <a
                        href="tel:+919579076676"
                        className="text-lg text-mustard-yellow hover:text-rustic-brown transition-colors font-semibold"
                      >
                        095790 76676
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Instagram className="h-5 w-5 text-mustard-yellow" />
                      <a
                        href="https://www.instagram.com/mariasgoaneaterybakery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rustic-brown hover:text-mustard-yellow transition-colors font-medium"
                      >
                        @mariasgoaneaterybakery
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Facebook className="h-5 w-5 text-mustard-yellow" />
                      <a
                        href="https://www.facebook.com/Mariasgoaneaterybakery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rustic-brown hover:text-mustard-yellow transition-colors font-medium"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-sunset-orange/20 to-mustard-yellow/20 rounded-2xl p-8">
          <h2 className="font-handwritten text-3xl text-rustic-brown mb-4">Ready to Visit?</h2>
          <p className="text-rustic-brown/70 mb-6 text-lg">
            📍 Vasai-Virar | Call us for reservations or just drop by for a delightful experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="tel:+919579076676"
              className="bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px] flex items-center justify-center hover:scale-105"
            >
              📞 Call Now
            </a>
            <a
              href="https://maps.app.goo.gl/MNCgYUK8Pg4UEU3H8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-blue to-blue-400 hover:from-blue-400 hover:to-sky-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[56px] flex items-center justify-center hover:scale-105"
            >
              🗺️ Get Directions
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
