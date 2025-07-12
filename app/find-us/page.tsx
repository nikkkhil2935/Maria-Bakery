import { MapPin, Phone, Instagram, Clock, Mail, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FindUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-b from-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-dancing text-4xl md:text-6xl font-bold text-rustic-brown mb-4">Find Us</h1>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            Located in the heart of Vasai West, we're easy to find and even easier to love
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <Card className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="font-dancing text-2xl text-rustic-brown flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-sunset-orange" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8!2d72.8!3d19.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI0JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Maria's Goan Eatery & Bakery Location"
                  />
                </div>
                <div className="p-4 bg-cream">
                  <p className="text-sm text-rustic-brown/70">
                    <strong>Address:</strong> Maulana Azad Rd, opp. Mudra Studio, Remedy, Vasai West, Sandor,
                    Vasai-Virar, Maharashtra 401201
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Hours Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-dancing text-2xl text-rustic-brown flex items-center gap-2">
                    <Clock className="w-6 h-6 text-sunset-orange" />
                    Open Daily
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-rustic-brown">Monday - Wednesday</p>
                      <p className="text-rustic-brown/70">11:00 AM - 10:00 PM</p>
                    </div>
                    <div>
                      <p className="font-semibold text-rustic-brown">Friday - Sunday</p>
                      <p className="text-rustic-brown/70">11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <p className="font-semibold text-red-800">Thursday</p>
                    <p className="text-red-600">Closed</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-dancing text-2xl text-rustic-brown">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-sunset-orange" />
                    <div>
                      <p className="font-semibold text-rustic-brown">Phone</p>
                      <a
                        href="tel:+919579076676"
                        className="text-rustic-brown/70 hover:text-sunset-orange transition-colors"
                      >
                        +91 95790 76676
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Instagram className="w-5 h-5 text-sunset-orange" />
                    <div>
                      <p className="font-semibold text-rustic-brown">Instagram</p>
                      <a
                        href="https://www.instagram.com/mariasgoaneaterybakery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rustic-brown/70 hover:text-sunset-orange transition-colors"
                      >
                        @mariasgoaneaterybakery
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-sunset-orange" />
                    <div>
                      <p className="font-semibold text-rustic-brown">Email</p>
                      <a
                        href="mailto:hello@marias-eatery.com"
                        className="text-rustic-brown/70 hover:text-sunset-orange transition-colors"
                      >
                        hello@marias-eatery.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-sunset-orange hover:bg-sunset-orange/90 text-white font-semibold"
                >
                  <a href="tel:+919579076676">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white font-semibold bg-transparent"
                >
                  <a
                    href="https://maps.google.com/?q=Maria's+Goan+Eatery+Bakery+Vasai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-dancing text-3xl md:text-4xl font-bold text-rustic-brown mb-6">Visit Us Today</h2>
          <p className="text-lg text-rustic-brown/70 mb-8">
            📍 <strong>Vasai-Virar</strong> - Experience authentic Goan and Italian flavors in our cozy, memory-filled
            café
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <p className="text-rustic-brown font-medium">
              <MapPin className="w-5 h-5 inline mr-2 text-sunset-orange" />
              Maulana Azad Rd, opp. Mudra Studio, Remedy, Vasai West, Sandor, Vasai-Virar, Maharashtra 401201
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
