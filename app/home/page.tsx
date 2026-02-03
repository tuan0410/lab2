"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: "MU Home Jersey 2025", price: "$79", image: "/jersey1.jpg" },
  { id: 2, name: "MU Away Jersey 2025", price: "$75", image: "/jersey2.jpg" },
  { id: 3, name: "MU Training Jacket", price: "$99", image: "/jacket.jpg" },
  { id: 4, name: "MU Scarf", price: "$20", image: "/scarf.jpg" },
  { id: 5, name: "MU Cap", price: "$18", image: "/cap.jpg" },
  { id: 6, name: "MU Backpack", price: "$45", image: "/bag.jpg" },
]

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="min-h-screen bg-black/70 text-white">

        {/* NAVBAR */}
        <div className="flex justify-between items-center px-8 py-4 border-b border-white/20">
          <h1 className="text-2xl font-bold text-red-600 flex items-center gap-2">
              Manchester United
            <img src="/logo.png" alt="MU Logo" className="w-8 h-8" />
              Store
          </h1>
          <div className="space-x-6 text-white font-semibold">
            <button
              onClick={() => window.location.reload()}
              className="hover:text-red-500 font-semibold"
          >
            Home
            </button>

      </div>

        </div>

        {/* HERO */}
        <div className="text-center py-10">
          <h2 className="text-4xl font-bold mb-2">Manchester United Store</h2>
          <p className="text-gray-300">Official Merchandise Collection</p>
        </div>

        {/* PRODUCTS */}
        <div className="px-8 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-black/60 backdrop-blur-md border border-white/20 text-white hover:scale-105 transition"
            >
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover rounded-md"
                />
              </CardHeader>

              <CardContent className="space-y-2">
                <CardTitle>{product.name}</CardTitle>
                <p className="text-gray-300">{product.price}</p>
                <Button className="w-full mt-2">Buy</Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  )
}
