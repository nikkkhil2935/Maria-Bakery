"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
} from "lucide-react"
import { OrderManagement } from "@/components/admin/order-management"
import { AnalyticsDashboard } from "@/components/admin/analytics-dashboard"
import { MenuManagement } from "@/components/admin/menu-management"
import { CustomerInsights } from "@/components/admin/customer-insights"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock data for quick stats
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
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Orders</span>
            </TabsTrigger>
            <TabsTrigger value="menu" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Menu</span>
            </TabsTrigger>
            <TabsTrigger value="customers" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Customers</span>
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

            {/* Recent Orders Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="font-handwritten text-2xl text-rustic-brown">Recent Orders</CardTitle>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentOrders.slice(0, 3).map((order) => (
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

              <AnalyticsDashboard />
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <OrderManagement />
          </TabsContent>

          <TabsContent value="menu">
            <MenuManagement />
          </TabsContent>

          <TabsContent value="customers">
            <CustomerInsights />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
