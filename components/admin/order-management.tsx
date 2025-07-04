"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Download,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Truck,
  Store,
} from "lucide-react"

export function OrderManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const orders = [
    {
      id: "MG001234",
      customer: "Priya Sharma",
      phone: "+91 98765 43210",
      email: "priya.sharma@email.com",
      items: [
        { name: "Chorizo Croissant", quantity: 2, price: 199 },
        { name: "Cold Coffee", quantity: 1, price: 159 },
      ],
      subtotal: 557,
      deliveryFee: 30,
      tax: 28,
      total: 615,
      status: "preparing",
      type: "delivery",
      address: "A-101, Sunrise Apartments, Vasai West, Near Railway Station, Maharashtra 401202",
      landmark: "Opposite HDFC Bank",
      orderTime: "2024-01-15T14:30:00",
      estimatedTime: "2024-01-15T15:00:00",
      paymentMethod: "cash",
      specialInstructions: "Extra spicy, no onions in coffee",
    },
    {
      id: "MG001235",
      customer: "Rahul Mehta",
      phone: "+91 87654 32109",
      email: "rahul.mehta@email.com",
      items: [
        { name: "Ross Omelette", quantity: 1, price: 209 },
        { name: "Chicken Cafreal", quantity: 1, price: 279 },
      ],
      subtotal: 488,
      deliveryFee: 0,
      tax: 24,
      total: 512,
      status: "ready",
      type: "pickup",
      address: "Pickup at restaurant",
      orderTime: "2024-01-15T14:25:00",
      estimatedTime: "2024-01-15T14:55:00",
      paymentMethod: "upi",
      specialInstructions: "",
    },
    {
      id: "MG001236",
      customer: "Sarah D'Souza",
      phone: "+91 76543 21098",
      email: "sarah.dsouza@email.com",
      items: [
        { name: "All Day Breakfast", quantity: 1, price: 289 },
        { name: "Red Wine Cake", quantity: 1, price: 229 },
      ],
      subtotal: 518,
      deliveryFee: 30,
      tax: 26,
      total: 574,
      status: "delivered",
      type: "delivery",
      address: "B-205, Ocean View, Sandor, Vasai-Virar, Maharashtra 401201",
      landmark: "Near Mudra Studio",
      orderTime: "2024-01-15T13:45:00",
      estimatedTime: "2024-01-15T14:15:00",
      deliveredTime: "2024-01-15T14:12:00",
      paymentMethod: "cash",
      specialInstructions: "Ring the bell twice",
    },
    {
      id: "MG001237",
      customer: "Amit Kumar",
      phone: "+91 65432 10987",
      email: "amit.kumar@email.com",
      items: [
        { name: "Mushroom Xacuti", quantity: 1, price: 279 },
        { name: "Plain Croissant", quantity: 2, price: 89 },
      ],
      subtotal: 457,
      deliveryFee: 30,
      tax: 23,
      total: 510,
      status: "pending",
      type: "delivery",
      address: "C-301, Green Valley, Vasai East, Maharashtra 401208",
      landmark: "Behind Big Bazaar",
      orderTime: "2024-01-15T14:45:00",
      estimatedTime: "2024-01-15T15:15:00",
      paymentMethod: "upi",
      specialInstructions: "Call before delivery",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "preparing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "ready":
        return "bg-green-100 text-green-800 border-green-200"
      case "delivered":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <AlertCircle className="h-4 w-4" />
      case "preparing":
        return <Clock className="h-4 w-4" />
      case "ready":
        return <CheckCircle className="h-4 w-4" />
      case "delivered":
        return <CheckCircle className="h-4 w-4" />
      case "cancelled":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    // In a real app, this would make an API call
    console.log(`Updating order ${orderId} to ${newStatus}`)
  }

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.phone.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    const matchesType = typeFilter === "all" || order.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-handwritten text-3xl text-rustic-brown">Order Management</h1>
          <p className="text-gray-600">Manage and track all customer orders</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by order ID, customer name, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="preparing">Preparing</SelectItem>
                <SelectItem value="ready">Ready</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="delivery">Delivery</SelectItem>
                <SelectItem value="pickup">Pickup</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                {/* Order Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">#{order.id}</h3>
                      <p className="text-sm text-gray-600">{formatTime(order.orderTime)}</p>
                    </div>
                    <Badge className={`${getStatusColor(order.status)} flex items-center gap-1 border`}>
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      {order.type === "delivery" ? <Truck className="h-3 w-3" /> : <Store className="h-3 w-3" />}
                      {order.type.charAt(0).toUpperCase() + order.type.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-sunset-orange">₹{order.total}</span>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Customer Details</h4>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{order.phone}</span>
                        <Button size="sm" variant="outline" className="h-6 px-2 bg-transparent">
                          Call
                        </Button>
                      </div>
                      <p className="text-sm text-gray-500">{order.email}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      {order.type === "delivery" ? "Delivery Address" : "Pickup Details"}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-600">{order.address}</p>
                          {order.landmark && <p className="text-sm text-gray-500">Landmark: {order.landmark}</p>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Order Timeline</h4>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Ordered: {formatTime(order.orderTime)}</p>
                      <p className="text-sm text-gray-600">
                        Est. {order.type}: {formatTime(order.estimatedTime)}
                      </p>
                      {order.deliveredTime && (
                        <p className="text-sm text-green-600">Delivered: {formatTime(order.deliveredTime)}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Order Items</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm text-gray-700">
                            {item.name} x{item.quantity}
                          </span>
                          <span className="text-sm font-medium text-gray-900">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="text-gray-900">₹{order.subtotal}</span>
                        </div>
                        {order.deliveryFee > 0 && (
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="text-gray-900">₹{order.deliveryFee}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Tax</span>
                          <span className="text-gray-900">₹{order.tax}</span>
                        </div>
                        <div className="flex justify-between font-medium border-t border-gray-200 pt-1 mt-1">
                          <span className="text-gray-900">Total</span>
                          <span className="text-sunset-orange">₹{order.total}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Instructions */}
                {order.specialInstructions && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Special Instructions</h4>
                    <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      {order.specialInstructions}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {order.status === "pending" && (
                    <>
                      <Button
                        size="sm"
                        onClick={() => updateOrderStatus(order.id, "preparing")}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Accept Order
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => updateOrderStatus(order.id, "cancelled")}>
                        Cancel Order
                      </Button>
                    </>
                  )}
                  {order.status === "preparing" && (
                    <Button
                      size="sm"
                      onClick={() => updateOrderStatus(order.id, "ready")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Mark Ready
                    </Button>
                  )}
                  {order.status === "ready" && order.type === "delivery" && (
                    <Button
                      size="sm"
                      onClick={() => updateOrderStatus(order.id, "delivered")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Mark Delivered
                    </Button>
                  )}
                  {order.status === "ready" && order.type === "pickup" && (
                    <Button
                      size="sm"
                      onClick={() => updateOrderStatus(order.id, "delivered")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Mark Picked Up
                    </Button>
                  )}
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Customer
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
