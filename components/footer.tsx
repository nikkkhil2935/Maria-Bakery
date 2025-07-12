import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-rustic-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/marias-logo.png" alt="Maria's Logo" width={40} height={40} className="rounded-full" />
              <span className="font-dancing text-2xl font-bold">Maria's Goan Eatery & Bakery</span>
            </div>
            <p className="text-cream/80 mb-4 max-w-md">
              Authentic Goan and Italian cuisine served with love in the heart of Vasai-Virar. Where every meal is a
              celebration of flavor and tradition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="tel:+919579076676" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/vibes" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                  Vibes & Moments
                </Link>
              </li>
              <li>
                <Link href="/find-us" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                  Find Us
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-cream/80 hover:text-mustard-yellow transition-colors">
                  Admin Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-mustard-yellow" />
                <span className="text-cream/80 text-sm">
                  Sandor, Vasai-Virar
                  <br />
                  Maharashtra, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-mustard-yellow" />
                <span className="text-cream/80 text-sm">+91 95790 76676</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-mustard-yellow" />
                <span className="text-cream/80 text-sm">hello@marias.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © 2024 Maria's Goan Eatery & Bakery. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}
