"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Settings, LogOut, Coffee, Menu, X } from "lucide-react"
import Link from "next/link"

export function AdminHeader() {
  const [showNotifications, setShowNotifications] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const notifications = [
    { id: 1, message: "New order #MG001237 received", time: "2 min ago", type: "order" },
    { id: 2, message: "Low stock alert: Chorizo", time: "15 min ago", type: "inventory" },
    { id: 3, message: "Customer review: 5 stars", time: "1 hour ago", type: "review" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-sunset-orange" />
              <div>
                <span className="font-handwritten text-xl text-rustic-brown">Maria's</span>
                <span className="block text-xs text-gray-500">Admin Panel</span>
              </div>
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Notifications */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[1.25rem] h-5 flex items-center justify-center">
                    {notifications.length}
                  </Badge>
                )}
              </Button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-medium text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b border-gray-50 hover:bg-gray-50">
                        <p className="text-sm text-gray-900">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View All Notifications
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Settings */}
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Maria Santos</p>
                <p className="text-xs text-gray-500">Restaurant Owner</p>
              </div>
              <div className="w-8 h-8 bg-sunset-orange rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">MS</span>
              </div>
            </div>

            {/* Logout */}
            <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 px-4">
                <div className="w-10 h-10 bg-sunset-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">MS</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Maria Santos</p>
                  <p className="text-sm text-gray-500">Restaurant Owner</p>
                </div>
              </div>

              <div className="flex items-center justify-between px-4">
                <Button variant="ghost" className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                  <Badge className="bg-red-500 text-white">{notifications.length}</Badge>
                </Button>
                <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>

              <div className="px-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
