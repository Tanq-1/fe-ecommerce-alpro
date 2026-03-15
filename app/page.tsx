"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl text-white font-bold">Welcome to AlproShop</h1>

      <Link href="/products" className="underline text-white hover:text-blue-500">
        Browse Products
      </Link>
    </div>
  )
}