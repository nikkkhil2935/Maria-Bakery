import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/contexts/cart-context"
import { CartButton } from "@/components/cart-button"
import { CartSidebar } from "@/components/cart-sidebar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Maria's Goan Eatery & Bakery - Authentic Goan & Italian Cuisine",
  description:
    "Experience authentic Goan and Italian flavors at Maria's cozy café in Vasai-Virar. Fresh croissants, traditional curries, and homemade desserts served with love.",
  keywords: "Goan food, Italian cuisine, café, bakery, Vasai-Virar, croissants, curry, authentic food",
  authors: [{ name: "Maria's Goan Eatery & Bakery" }],
  openGraph: {
    title: "Maria's Goan Eatery & Bakery",
    description: "Authentic Goan & Italian cuisine in the heart of Vasai-Virar",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dancingScript.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#ff6b35" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartButton />
            <CartSidebar />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
