"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Clock, Star, Users } from "lucide-react"

export function AnalyticsDashboard() {
  const topDishes = [
    { name: "Chorizo Croissant", orders: 23, revenue: 4577, trend: "up" },
    { name: "Ross Omelette", orders: 18, revenue: 3762, trend: "up" },
    { name: "Chicken Cafreal", orders: 15, revenue: 4185, trend: "down" },
    { name: "All Day Breakfast", orders: 12, revenue: 3468, trend: "up" },
  ]

  const peakHours = [
    { time: "12:00 PM", orders: 8, percentage: 80 },
    { time: "1:00 PM", orders: 12, percentage: 100 },
    { time: "2:00 PM", orders: 10, percentage: 83 },
    { time: "7:00 PM", orders: 9, percentage: 75 },
    { time: "8:00 PM", orders: 11, percentage: 92 },
  ]

  return (
    <div className="space-y-6">
      {/* Top Performing Dishes */}
      <Card>
        <CardHeader>
          <CardTitle className="font-handwritten text-xl text-rustic-brown">Top Dishes Today</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {topDishes.map((dish, index) => (
            <div key={dish.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-sunset-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{dish.name}</p>
                  <p className="text-sm text-gray-600">{dish.orders} orders</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-sunset-orange">₹{dish.revenue.toLocaleString()}</p>
                <div className="flex items-center gap-1">
                  {dish.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <span className={`text-xs ${dish.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {dish.trend === "up" ? "+12%" : "-5%"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Peak Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="font-handwritten text-xl text-rustic-brown flex items-center gap-2">
            <Clock className="h-5 w-5 text-sunset-orange" />
            Peak Hours
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {peakHours.map((hour) => (
            <div key={hour.time} className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{hour.time}</span>
              <div className="flex items-center gap-3 flex-1 mx-4">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-sunset-orange to-mustard-yellow h-2 rounded-full transition-all duration-300"
                    style={{ width: `${hour.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600 min-w-[3rem]">{hour.orders} orders</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">4.8</p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">89%</p>
            <p className="text-sm text-gray-600">Repeat Customers</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
