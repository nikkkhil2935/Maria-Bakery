"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-cream pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-rustic-brown mb-4">Get in Touch</h1>
          <p className="text-lg text-rustic-brown/70 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our menu, want to make a reservation, or just
            want to say hello - reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-mustard-yellow/30 shadow-xl">
            <CardHeader>
              <CardTitle className="font-handwritten text-3xl text-rustic-brown flex items-center gap-2">
                <Send className="h-6 w-6 text-mustard-yellow" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="border-mustard-yellow/30 focus:border-mustard-yellow"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-rustic-brown mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-mustard-yellow/30 focus:border-mustard-yellow"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-rustic-brown mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-mustard-yellow/30 focus:border-mustard-yellow resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <Button type="submit" className="btn-primary w-full text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-mustard-yellow/30 shadow-xl">
              <CardHeader>
                <CardTitle className="font-handwritten text-2xl text-rustic-brown">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-mustard-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-rustic-brown mb-1">Phone</h3>
                    <a
                      href="tel:+919579076676"
                      className="text-mustard-yellow hover:text-rustic-brown transition-colors font-medium"
                    >
                      095790 76676
                    </a>
                    <p className="text-rustic-brown/60 text-sm mt-1">Call us for reservations or takeaway orders</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-mustard-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-rustic-brown mb-1">Email</h3>
                    <a
                      href="mailto:hello@marias-cafe.com"
                      className="text-mustard-yellow hover:text-rustic-brown transition-colors font-medium"
                    >
                      hello@marias-cafe.com
                    </a>
                    <p className="text-rustic-brown/60 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-mustard-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-rustic-brown mb-1">Address</h3>
                    <p className="text-rustic-brown/70 text-sm">
                      Maulana Azad Rd, opp. Mudra Studio, Remedy, Vasai West, Sandor, Vasai-Virar, Maharashtra 401201
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-mustard-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-rustic-brown mb-1">Hours</h3>
                    <div className="text-rustic-brown/70 text-sm space-y-1">
                      <p>Mon-Wed: 11:00 AM - 10:00 PM</p>
                      <p className="text-red-600 font-medium">Thu: Closed</p>
                      <p>Fri-Sun: 11:00 AM - 11:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-mustard-yellow/20 to-sky-blue/20 border-2 border-mustard-yellow/30 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-casual text-xl font-bold text-rustic-brown mb-4">Follow Us</h3>
                <p className="text-rustic-brown/70 text-sm mb-4">
                  Stay updated with our latest dishes, events, and special offers!
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Facebook
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-2 border-green-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-casual text-xl font-bold text-green-800 mb-3">Quick Order via WhatsApp</h3>
                <p className="text-green-700 text-sm mb-4">
                  Want to place a quick takeaway order? Message us on WhatsApp!
                </p>
                <a
                  href="https://wa.me/919579076676"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  💬 WhatsApp Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
