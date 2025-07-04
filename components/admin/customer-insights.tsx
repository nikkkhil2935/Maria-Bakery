"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Star,
  Phone,
  Mail,
  Calendar,
  ShoppingBag,
  TrendingUp,
  Search,
  Filter,
  Download,
  Heart,
  Award,
} from "lucide-react"
import { useState } from "react"

export function CustomerInsights() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  const customers = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      totalOrders: 23,
      totalSpent: 7845,
      avgOrderValue: 341,
      lastOrder: "2024-01-15",
      joinDate: "2023-08-15",
      favoriteItems: ["Chorizo Croissant", "Cold Coffee"],
      status: "VIP",
      rating: 5,
      reviews: 3,
    },
    {
      id: 2,
      name: "Rahul Mehta",
      email: "rahul.mehta@email.com",
      phone: "+91 87654 32109",
      totalOrders: 18,
      totalSpent: 5940,
      avgOrderValue: 330,
      lastOrder: "2024-01-14",
      joinDate: "2023-09-22",
      favoriteItems: ["Ross Omelette", "Chicken Cafreal"],
      status: "Regular",
      rating: 5,
      reviews: 2,
    },
    {
      id: 3,
      name: "Sarah D'Souza",
      email: "sarah.dsouza@email.com",
      phone: "+91 76543 21098",
      totalOrders: 31,
      totalSpent: 10850,
      avgOrderValue: 350,
      lastOrder: "2024-01-15",
      joinDate: "2023-06-10",
      favoriteItems: ["All Day Breakfast", "Red Wine Cake"],
      status: "VIP",
      rating: 5,
      reviews: 5,
    },
    {
      id: 4,
      name: "Amit Kumar",
      email: "amit.kumar@email.com",
      phone: "+91 65432 10987",
      totalOrders: 7,
      totalSpent: 2380,
      avgOrderValue: 340,
      lastOrder: "2024-01-12",
      joinDate: "2023-12-05",
      favoriteItems: ["Mushroom Xacuti"],
      status: "New",
      rating: 4,
      reviews: 1,
    },
    {
      id: 5,
      name: "Cynthia Dsouza",
      email: "cynthia.dsouza@email.com",
      phone: "+91 54321 09876",
      totalOrders: 45,
      totalSpent: 15750,
      avgOrderValue: 350,
      lastOrder: "2024-01-13",
      joinDate: "2023-03-20",
      favoriteItems: ["Chicken Cafreal", "Chorizo Croissant", "Cold Coffee"],
      status: "VIP",
      rating: 5,
      reviews: 8,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "VIP":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Regular":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "New":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "VIP":
        return <Award className="h-3 w-3" />
      case "Regular":
        return <Heart className="h-3 w-3" />
      case "New":
        return <Star className="h-3 w-3" />
      default:
        return <Users className="h-3 w-3" />
    }
  }

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm),
  )

  const sortedCustomers = [...filteredCustomers].sort((a, b) => {
    switch (sortBy) {
      case "spent":
        return b.totalSpent - a.totalSpent
      case "orders":
        return b.totalOrders - a.totalOrders
      case "recent":
        return new Date(b.lastOrder).getTime() - new Date(a.lastOrder).getTime()
      default:
        return 0
    }
  })

  const customerStats = {
    total: customers.length,
    vip: customers.filter((c) => c.status === "VIP").length,
    regular: customers.filter((c) => c.status === "Regular").length,
    new: customers.filter((c) => c.status === "New").length,
    avgOrderValue: customers.reduce((sum, c) => sum + c.avgOrderValue, 0) / customers.length,
    totalRevenue: customers.reduce((sum, c) => sum + c.totalSpent, 0),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-handwritten text-3xl text-rustic-brown">Customer Insights</h1>
          <p className="text-gray-600">Understand your customers and build lasting relationships</p>
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

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Customers</p>
                <p className="text-3xl font-bold text-gray-900">{customerStats.total}</p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +15% this month
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">VIP Customers</p>
                <p className="text-3xl font-bold text-gray-900">{customerStats.vip}</p>
                <p className="text-sm text-gray-500">
                  {Math.round((customerStats.vip / customerStats.total) * 100)}% of total
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                <p className="text-3xl font-bold text-gray-900">₹{Math.round(customerStats.avgOrderValue)}</p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +8% this month
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">₹{customerStats.totalRevenue.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +22% this month
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recent Orders</SelectItem>
                <SelectItem value="spent">Total Spent</SelectItem>
                <SelectItem value="orders">Total Orders</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Customer List */}
      <div className="space-y-4">
        {sortedCustomers.map((customer) => (
          <Card key={customer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Customer Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-xl text-gray-900">{customer.name}</h3>
                        <Badge className={`${getStatusColor(customer.status)} flex items-center gap-1 border`}>
                          {getStatusIcon(customer.status)}
                          {customer.status}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="h-4 w-4" />
                          {customer.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="h-4 w-4" />
                          {customer.phone}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4" />
                          Customer since{" "}
                          {new Date(customer.joinDate).toLocaleDateString("en-IN", {
                            month: "short",
                            year: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < customer.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({customer.reviews})</span>
                    </div>
                  </div>

                  {/* Favorite Items */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Favorite Items</h4>
                    <div className="flex flex-wrap gap-2">
                      {customer.favoriteItems.map((item, index) => (
                        <Badge key={index} variant="secondary" className="bg-sunset-orange/10 text-sunset-orange">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="lg:w-80">
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Total Orders</p>
                      <p className="text-2xl font-bold text-gray-900">{customer.totalOrders}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Total Spent</p>
                      <p className="text-2xl font-bold text-sunset-orange">₹{customer.totalSpent.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Avg Order Value</p>
                      <p className="text-2xl font-bold text-gray-900">₹{customer.avgOrderValue}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Last Order</p>
                      <p className="text-lg font-medium text-gray-900">
                        {new Date(customer.lastOrder).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedCustomers.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No customers found</h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
