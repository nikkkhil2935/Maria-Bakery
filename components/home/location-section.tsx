import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 bg-rustic-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-dancing text-3xl md:text-5xl font-bold mb-4">Find Us</h2>
          <p className="text-xl text-cream/90">
            Visit us in the heart of Vasai-Virar for an unforgettable dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
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

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-mustard-yellow mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-cream/90">
                      Sandor, Vasai-Virar
                      <br />
                      Maharashtra, India
                      <br />
                      Near Railway Station
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-mustard-yellow mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <p className="text-cream/90 mb-2">📞 +91 95790 76676</p>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-mustard-yellow mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <div className="text-cream/90 space-y-1">
                      <p>
                        <strong>Open Daily</strong>
                      </p>
                      <p>Monday - Wednesday: 8:00 AM - 10:00 PM</p>
                      <p>
                        Thursday: <span className="text-red-300">Closed</span>
                      </p>
                      <p>Friday - Sunday: 8:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sunset-orange hover:bg-orange-500 text-white font-semibold flex-1"
              >
                <a href="tel:+919579076676">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 flex-1 bg-transparent"
              >
                <a href="https://maps.app.goo.gl/MNCgYUK8Pg4UEU3H8" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
