import Link from "next/link"
import { Coffee, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-rustic-brown text-cream w-full">
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-mustard-yellow" />
              <span className="font-handwritten text-3xl text-mustard-yellow">Maria's</span>
            </div>
            <p className="text-cream/80 mb-6 text-base leading-relaxed">
              A quaint homemade café serving Goan and Italian comfort food with heart. Loved by groups, solo diners, and
              foodies alike.
            </p>

            {/* Social Media Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm">
              <a
                href="https://www.instagram.com/mariasgoaneaterybakery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 min-h-[48px]"
              >
                <Instagram className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/Mariasgoaneaterybakery/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 min-h-[48px]"
              >
                <Facebook className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-casual text-xl font-bold text-mustard-yellow mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-cream/80 hover:text-sunset-orange transition-colors text-base">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/vibes" className="text-cream/80 hover:text-sunset-orange transition-colors text-base">
                  Vibes & Moments
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-sunset-orange transition-colors text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/find-us" className="text-cream/80 hover:text-sunset-orange transition-colors text-base">
                  Find Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-casual text-xl font-bold text-mustard-yellow mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-mustard-yellow mt-0.5 flex-shrink-0" />
                <p className="text-cream/80 text-sm leading-relaxed">
                  Maulana Azad Rd, opp. Mudra Studio, Remedy, Vasai West, Sandor, Vasai-Virar, Maharashtra 401201
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-mustard-yellow flex-shrink-0" />
                <a
                  href="tel:+919579076676"
                  className="text-cream/80 hover:text-mustard-yellow transition-colors text-base font-medium"
                >
                  095790 76676
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-mustard-yellow flex-shrink-0" />
                <p className="text-cream/80 text-sm">Opens at 11:00 AM | Closed Thursdays</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-cream/60 text-sm">© 2024 Maria's Goan Eatery & Bakery. Made with ❤️ for our community.</p>
        </div>
      </div>
    </footer>
  )
}
