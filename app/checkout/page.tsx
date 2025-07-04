"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Truck, Clock, CheckCircle, ArrowLeft, Leaf, Flame, User } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"
import Image from "next/image"

export default function CheckoutPage() {
  const { state, clearCart } = useCart()
  const [step, setStep] = useState(1)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    landmark: "",
    specialInstructions: "",
  })

  const [orderDetails, setOrderDetails] = useState({
    deliveryMethod: "delivery",
    paymentMethod: "cash",
    deliveryTime: "asap",
  })

  const subtotal = state.total
  const deliveryFee = orderDetails.deliveryMethod === "delivery" ? 30 : 0
  const taxes = subtotal * 0.05
  const total = subtotal + deliveryFee + taxes

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleOrderDetailChange = (field: string, value: string) => {
    setOrderDetails((prev) => ({ ...prev, [field]: value }))
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setOrderPlaced(true)
    setIsProcessing(false)
    clearCart()
  }

  if (state.items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-cream pt-8">
        <div className="max-w-2xl mx-auto px-4 text-center py-16">
          <h1 className="font-handwritten text-4xl text-rustic-brown mb-4">Your cart is empty</h1>
          <p className="text-rustic-brown/70 mb-8">Add some delicious items to proceed with checkout.</p>
          <Link href="/menu">
            <Button className="btn-primary text-lg px-8 py-4">Browse Menu</Button>
          </Link>
        </div>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-cream pt-8">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <Card className="text-center border-2 border-green-200 bg-green-50">
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4 animate-bounce" />
              <h1 className="font-handwritten text-4xl text-green-800 mb-4">Order Confirmed!</h1>
              <p className="text-green-700 text-lg mb-6">
                Thank you for your order! We'll start preparing your delicious meal right away.
              </p>
              <div className="bg-white rounded-lg p-4 mb-6">
                <p className="text-rustic-brown font-medium">Order ID: #MG{Date.now().toString().slice(-6)}</p>
                <p className="text-rustic-brown/70 text-sm">
                  Estimated {orderDetails.deliveryMethod === "delivery" ? "delivery" : "pickup"} time: 25-30 minutes
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="btn-primary">Back to Home</Button>
                </Link>
                <a href="tel:+919579076676">
                  <Button className="btn-secondary">Call Restaurant</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream pt-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/menu">
            <Button variant="ghost" className="p-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="font-handwritten text-4xl text-rustic-brown">Checkout</h1>
            <p className="text-rustic-brown/70">Complete your order</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Customer Information */}
            <Card className="border-2 border-sunset-orange/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-handwritten text-2xl text-rustic-brown">
                  <User className="h-6 w-6 text-sunset-orange" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-rustic-brown font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="border-sunset-orange/30 focus:border-sunset-orange"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-rustic-brown font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="border-sunset-orange/30 focus:border-sunset-orange"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-rustic-brown font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email address"
                    className="border-sunset-orange/30 focus:border-sunset-orange"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Delivery Method */}
            <Card className="border-2 border-sunset-orange/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-handwritten text-2xl text-rustic-brown">
                  <Truck className="h-6 w-6 text-sunset-orange" />
                  Delivery Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={orderDetails.deliveryMethod}
                  onValueChange={(value) => handleOrderDetailChange("deliveryMethod", value)}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-sunset-orange/5 transition-colors">
                    <RadioGroupItem value="delivery" id="delivery" />
                    <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-rustic-brown">Home Delivery</p>
                          <p className="text-sm text-rustic-brown/70">Delivered to your doorstep</p>
                        </div>
                        <Badge className="bg-sunset-orange text-white">₹30</Badge>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-sunset-orange/5 transition-colors">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-rustic-brown">Pickup</p>
                          <p className="text-sm text-rustic-brown/70">Collect from restaurant</p>
                        </div>
                        <Badge className="bg-green-500 text-white">Free</Badge>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                {orderDetails.deliveryMethod === "delivery" && (
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="address" className="text-rustic-brown font-medium">
                        Delivery Address *
                      </Label>
                      <Textarea
                        id="address"
                        value={customerInfo.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Enter your complete address"
                        className="border-sunset-orange/30 focus:border-sunset-orange"
                      />
                    </div>
                    <div>
                      <Label htmlFor="landmark" className="text-rustic-brown font-medium">
                        Landmark (Optional)
                      </Label>
                      <Input
                        id="landmark"
                        value={customerInfo.landmark}
                        onChange={(e) => handleInputChange("landmark", e.target.value)}
                        placeholder="Nearby landmark for easy delivery"
                        className="border-sunset-orange/30 focus:border-sunset-orange"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 3: Payment Method */}
            <Card className="border-2 border-sunset-orange/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-handwritten text-2xl text-rustic-brown">
                  <CreditCard className="h-6 w-6 text-sunset-orange" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={orderDetails.paymentMethod}
                  onValueChange={(value) => handleOrderDetailChange("paymentMethod", value)}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-sunset-orange/5 transition-colors">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex-1 cursor-pointer">
                      <div>
                        <p className="font-medium text-rustic-brown">Cash on Delivery</p>
                        <p className="text-sm text-rustic-brown/70">Pay when you receive your order</p>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-sunset-orange/5 transition-colors">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi" className="flex-1 cursor-pointer">
                      <div>
                        <p className="font-medium text-rustic-brown">UPI Payment</p>
                        <p className="text-sm text-rustic-brown/70">Pay via Google Pay, PhonePe, Paytm</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Special Instructions */}
            <Card className="border-2 border-sunset-orange/30">
              <CardHeader>
                <CardTitle className="font-handwritten text-2xl text-rustic-brown">Special Instructions</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={customerInfo.specialInstructions}
                  onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                  placeholder="Any special requests or dietary requirements..."
                  className="border-sunset-orange/30 focus:border-sunset-orange"
                />
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-sunset-orange/30 sticky top-8">
              <CardHeader>
                <CardTitle className="font-handwritten text-2xl text-rustic-brown">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg?height=48&width=48"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-rustic-brown text-sm truncate">{item.name}</h4>
                            <div className="flex items-center gap-1 mt-1">
                              {item.veg && <Leaf className="h-3 w-3 text-green-600" />}
                              {item.spicy && <Flame className="h-3 w-3 text-red-500" />}
                              <span className="text-xs text-rustic-brown/60">Qty: {item.quantity}</span>
                            </div>
                          </div>
                          <span className="font-medium text-sunset-orange text-sm">
                            ₹{(item.price * item.quantity).toFixed(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-rustic-brown/70">Subtotal</span>
                    <span className="text-rustic-brown">₹{subtotal.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-rustic-brown/70">
                      {orderDetails.deliveryMethod === "delivery" ? "Delivery Fee" : "Pickup"}
                    </span>
                    <span className="text-rustic-brown">
                      {orderDetails.deliveryMethod === "delivery" ? "₹30" : "Free"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-rustic-brown/70">Taxes (5%)</span>
                    <span className="text-rustic-brown">₹{taxes.toFixed(0)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span className="text-rustic-brown">Total</span>
                    <span className="text-sunset-orange text-lg">₹{total.toFixed(0)}</span>
                  </div>
                </div>

                {/* Estimated Time */}
                <div className="bg-gradient-to-r from-sunset-orange/10 to-mustard-yellow/10 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-rustic-brown">
                    <Clock className="h-4 w-4 text-sunset-orange" />
                    <span className="text-sm font-medium">
                      Estimated {orderDetails.deliveryMethod === "delivery" ? "delivery" : "pickup"}: 25-30 minutes
                    </span>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  onClick={handlePlaceOrder}
                  disabled={
                    !customerInfo.name ||
                    !customerInfo.phone ||
                    (orderDetails.deliveryMethod === "delivery" && !customerInfo.address) ||
                    isProcessing
                  }
                  className="w-full bg-gradient-to-r from-sunset-orange to-orange-500 hover:from-orange-500 hover:to-sunset-orange text-white font-bold py-4 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing Order...
                    </div>
                  ) : (
                    `Place Order - ₹${total.toFixed(0)}`
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
