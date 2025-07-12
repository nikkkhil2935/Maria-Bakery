"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  BarChart3,
  TrendingUp,
  Users,
  ShoppingBag,
  Clock,
  DollarSign,
  Settings,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  Phone,
  MapPin,
  Plus,
  Edit,
  Trash2,
  Upload,
} from "lucide-react"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  // Mock authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (credentials.username === "admin" && credentials.password === "maria123") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials. Use admin/maria123")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="font-dancing text-3xl text-rustic-brown">Admin Access</CardTitle>
            <p className="text-gray-600">Enter your credentials to access the backend</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-sunset-orange hover:bg-orange-500">
                Login to Admin Panel
              </Button>
              <p className="text-xs text-gray-500 text-center">Demo credentials: admin / maria123</p>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Mock data for dashboard
  const todayStats = {
    orders: 47,
    revenue: 12450,
    customers: 38,
    avgOrderValue: 327,
  }

  const recentOrders = [
    {
      id: "MG001234",
      customer: "Priya Sharma",
      phone: "+91 98765 43210",
      items: ["Chorizo Croissant x2", "Cold Coffee x1"],
      total: 437,
      status: "preparing",
      time: "2 min ago",
      type: "delivery",
      address: "Vasai West, Near Station",
    },
    {
      id: "MG001235",
      customer: "Rahul Mehta",
      phone: "+91 87654 32109",
      items: ["Ross Omelette x1", "Chicken Cafreal x1"],
      total: 488,
      status: "ready",
      time: "5 min ago",
      type: "pickup",
      address: "Pickup at restaurant",
    },
    {
      id: "MG001236",
      customer: "Sarah D'Souza",
      phone: "+91 76543 21098",
      items: ["All Day Breakfast x1", "Red Wine Cake x1"],
      total: 518,
      status: "delivered",
      time: "12 min ago",
      type: "delivery",
      address: "Sandor, Vasai-Virar",
    },
  ]

  const menuItems = [
    {
      id: 1,
      name: "Chorizo Croissant",
      category: "Croissants",
      price: 199,
      image: "/chorizo-croissant.png",
      available: true,
      ordersToday: 23,
    },
    {
      id: 2,
      name: "Chicken Cafreal",
      category: "Goan Mains",
      price: 280,
      image: "/curry-rice.png",
      available: true,
      ordersToday: 18,
    },
    {
      id: 3,
      name: "Ross Omelette",
      category: "Goan Mains",
      price: 209,
      image: "/ross-omelette.png",
      available: false,
      ordersToday: 0,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "preparing":
        return "bg-blue-100 text-blue-800"
      case "ready":
        return "bg-green-100 text-green-800"
      case "delivered":
        return "bg-gray-100 text-gray-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-dancing text-3xl font-bold text-rustic-brown">Maria's Admin Panel</h1>
              <p className="text-gray-600">Manage your restaurant operations</p>
            </div>
            <Button
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="menu" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Menu
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-sunset-orange">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Today's Orders</p>
                      <p className="text-3xl font-bold text-gray-900">{todayStats.orders}</p>
                      <p className="text-sm text-green-600 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        +12% from yesterday
                      </p>
                    </div>
                    <div className="bg-sunset-orange/10 p-3 rounded-full">
                      <ShoppingBag className="h-6 w-6 text-sunset-orange" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
                      <p className="text-3xl font-bold text-gray-900">₹{todayStats.revenue.toLocaleString()}</p>
                      <p className="text-sm text-green-600 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        +8% from yesterday
                      </p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Customers Today</p>
                      <p className="text-3xl font-bold text-gray-900">{todayStats.customers}</p>
                      <p className="text-sm text-green-600 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        +15% from yesterday
                      </p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                      <p className="text-3xl font-bold text-gray-900">₹{todayStats.avgOrderValue}</p>
                      <p className="text-sm text-green-600 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        +5% from yesterday
                      </p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-dancing text-2xl text-rustic-brown">Recent Orders</CardTitle>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900">#{order.id}</span>
                        <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                          {getStatusIcon(order.status)}
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                      <p className="text-sm text-gray-500">{order.items.join(", ")}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm font-medium text-sunset-orange">₹{order.total}</span>
                        <span className="text-xs text-gray-500">{order.time}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      {order.type === "delivery" && (
                        <Button size="sm" variant="outline">
                          <MapPin className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-dancing text-2xl text-rustic-brown">Order Management</CardTitle>
                <p className="text-gray-600">Manage incoming orders and track their status</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">Order #{order.id}</h3>
                          <p className="text-sm text-gray-600">
                            {order.customer} • {order.phone}
                          </p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm font-medium">Items:</p>
                          <p className="text-sm text-gray-600">{order.items.join(", ")}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Total:</p>
                          <p className="text-sm text-gray-600">₹{order.total}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Type:</p>
                          <p className="text-sm text-gray-600">{order.type}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
                          Preparing
                        </Button>
                        <Button size="sm" variant="outline">
                          Ready
                        </Button>
                        <Button size="sm" variant="outline">
                          Delivered
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="menu" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-dancing text-2xl text-rustic-brown">Menu Management</h2>
                <p className="text-gray-600">Add, edit, and manage your menu items</p>
              </div>
              <Button className="bg-sunset-orange hover:bg-orange-500">
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <Card key={item.id} className={`overflow-hidden ${!item.available ? "opacity-60" : ""}`}>
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {!item.available && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-semibold">Out of Stock</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.category}</p>
                        </div>
                        <span className="font-bold text-sunset-orange">₹{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Orders today: {item.ordersToday}</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Upload className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-600 bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sales Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>This Week</span>
                      <span className="font-semibold">₹45,230</span>
                    </div>
                    <div className="flex justify-between">
                      <span>This Month</span>
                      <span className="font-semibold">₹1,89,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Orders</span>
                      <span className="font-semibold">1,247</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Chorizo Croissant</span>
                      <span className="text-green-600">156 orders</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chicken Cafreal</span>
                      <span className="text-green-600">134 orders</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ross Omelette</span>
                      <span className="text-green-600">98 orders</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
