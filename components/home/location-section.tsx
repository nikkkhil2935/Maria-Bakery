import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Instagram, Clock } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 bg-rustic-brown text-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-handwritten text-4xl md:text-5xl text-mustard-yellow mb-4">Find Us</h2>
          <p className="text-lg text-cream/80 max-w-2xl mx-auto">
            Located in the heart of Vasai West, we're easy to find and even easier to love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <Card className="bg-cream/10 backdrop-blur-sm border-2 border-mustard-yellow/30">
            <CardHeader>
              <CardTitle className="font-handwritten text-2xl text-mustard-yellow flex items-center gap-2">
                <MapPin className="h-6 w-6" />
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
              <p className="text-cream/80 text-sm">
                Maulana Azad Rd, opp. Mudra Studio, Remedy, Vasai West, Sandor, Vasai-Virar, Maharashtra 401201
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-cream/10 backdrop-blur-sm border-2 border-mustard-yellow/30">
              <CardHeader>
                <CardTitle className="font-handwritten text-2xl text-mustard-yellow flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  Open Daily
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-cream font-medium">Monday - Wednesday</span>
                    <span className="text-cream/70">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center bg-red-500/20 p-2 rounded">
                    <span className="text-cream font-medium">Thursday</span>
                    <span className="text-red-300 font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-cream font-medium">Friday - Sunday</span>
                    <span className="text-cream/70">11:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream/10 backdrop-blur-sm border-2 border-mustard-yellow/30">
              <CardHeader>
                <CardTitle className="font-handwritten text-2xl text-mustard-yellow">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-mustard-yellow" />
                  <a
                    href="tel:+919579076676"
                    className="text-cream hover:text-mustard-yellow transition-colors font-medium"
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
                    className="text-cream hover:text-mustard-yellow transition-colors font-medium"
                  >
                    @mariasgoaneaterybakery
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-mustard-yellow" />
                  <span className="text-cream/80">📍 Vasai-Virar</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
