"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Plus, Edit, Trash2, EyeOff, Leaf, Flame, Star, TrendingUp, TrendingDown } from "lucide-react"
import Image from "next/image"

export function MenuManagement() {
  const [showAddForm, setShowAddForm] = useState(false)

  const menuItems = [
    {
      id: 1,
      name: "Chorizo Croissant",
      category: "Croissant Sandwiches",
      price: 199,
      description: "Flaky buttery croissant filled with spicy Goan chorizo and fresh herbs",
      image: "/chorizo-croissant.png",
      veg: false,
      spicy: true,
      featured: true,
      available: true,
      ordersToday: 23,
      revenue: 4577,
      trend: "up",
      stock: "In Stock",
    },
    {
      id: 2,
      name: "Ross Omelette",
      category: "Main Course",
      price: 209,
      description: "Traditional Goan curry omelette served with fresh bread",
      image: "/ross-omelette.png",
      veg: false,
      spicy: false,
      featured: true,
      available: true,
      ordersToday: 18,
      revenue: 3762,
      trend: "up",
      stock: "In Stock",
    },
    {
      id: 3,
      name: "Mushroom Xacuti",
      category: "Main Course",
      price: 279,
      description: "Rich and flavorful vegetarian curry with mushrooms in traditional Goan spices",
      image: "/mushroom-xacuti.png",
      veg: true,
      spicy: true,
      featured: false,
      available: true,
      ordersToday: 8,
      revenue: 2232,
      trend: "down",
      stock: "Low Stock",
    },
    {
      id: 4,
      name: "Red Wine Cake",
      category: "Drinks & Desserts",
      price: 229,
      description: "Decadent chocolate cake infused with red wine",
      image: "/placeholder.svg?height=200&width=300",
      veg: true,
      spicy: false,
      featured: true,
      available: false,
      ordersToday: 0,
      revenue: 0,
      trend: "down",
      stock: "Out of Stock",
    },
  ]

  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    veg: false,
    spicy: false,
    featured: false,
    available: true,
  })

  const handleAddItem = () => {
    // In a real app, this would make an API call
    console.log("Adding new item:", newItem)
    setShowAddForm(false)
    setNewItem({
      name: "",
      category: "",
      price: "",
      description: "",
      veg: false,
      spicy: false,
      featured: false,
      available: true,
    })
  }

  const toggleAvailability = (itemId: number) => {
    // In a real app, this would make an API call
    console.log(`Toggling availability for item ${itemId}`)
  }

  const toggleFeatured = (itemId: number) => {
    // In a real app, this would make an API call
    console.log(`Toggling featured status for item ${itemId}`)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-handwritten text-3xl text-rustic-brown">Menu Management</h1>
          <p className="text-gray-600">Manage your menu items, pricing, and availability</p>
        </div>
        <Button onClick={() => setShowAddForm(true)} className="bg-sunset-orange hover:bg-orange-500">
          <Plus className="h-4 w-4 mr-2" />
          Add New Item
        </Button>
      </div>

      {/* Add New Item Form */}
      {showAddForm && (
        <Card className="border-2 border-sunset-orange/30">
          <CardHeader>
            <CardTitle className="font-handwritten text-2xl text-rustic-brown">Add New Menu Item</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Item Name</Label>
                <Input
                  id="name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  placeholder="Enter item name"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={newItem.category}
                  onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                  placeholder="Enter category"
                />
              </div>
              <div>
                <Label htmlFor="price">Price (₹)</Label>
                <Input
                  id="price"
                  type="number"
                  value={newItem.price}
                  onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                placeholder="Enter item description"
              />
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="veg"
                  checked={newItem.veg}
                  onCheckedChange={(checked) => setNewItem({ ...newItem, veg: checked })}
                />
                <Label htmlFor="veg">Vegetarian</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="spicy"
                  checked={newItem.spicy}
                  onCheckedChange={(checked) => setNewItem({ ...newItem, spicy: checked })}
                />
                <Label htmlFor="spicy">Spicy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={newItem.featured}
                  onCheckedChange={(checked) => setNewItem({ ...newItem, featured: checked })}
                />
                <Label htmlFor="featured">Featured</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="available"
                  checked={newItem.available}
                  onCheckedChange={(checked) => setNewItem({ ...newItem, available: checked })}
                />
                <Label htmlFor="available">Available</Label>
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleAddItem} className="bg-sunset-orange hover:bg-orange-500">
                Add Item
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <Card key={item.id} className={`overflow-hidden ${!item.available ? "opacity-60" : ""}`}>
            <CardContent className="p-0">
              <div className="flex">
                {/* Image */}
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg?height=128&width=128"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  {!item.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <EyeOff className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                    <span className="text-xl font-bold text-sunset-orange">₹{item.price}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.veg && (
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        <Leaf className="h-3 w-3 mr-1" />
                        Veg
                      </Badge>
                    )}
                    {item.spicy && (
                      <Badge className="bg-red-100 text-red-800 text-xs">
                        <Flame className="h-3 w-3 mr-1" />
                        Spicy
                      </Badge>
                    )}
                    {item.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge
                      className={`text-xs ${
                        item.stock === "In Stock"
                          ? "bg-green-100 text-green-800"
                          : item.stock === "Low Stock"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.stock}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm mb-3">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600">Today: {item.ordersToday} orders</span>
                      <span className="text-gray-600">₹{item.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {item.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600" />
                      )}
                      <span className={`text-xs ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                        {item.trend === "up" ? "+12%" : "-5%"}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={item.available}
                          onCheckedChange={() => toggleAvailability(item.id)}
                          size="sm"
                        />
                        <Label className="text-sm">Available</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch checked={item.featured} onCheckedChange={() => toggleFeatured(item.id)} size="sm" />
                        <Label className="text-sm">Featured</Label>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 bg-transparent">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
