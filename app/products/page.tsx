"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"
import { useSearchParams } from "next/navigation"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const category = searchParams?.get("category") || undefined
  const { data, isLoading } = useProducts(category)

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )

  return (
    <div className="p-6">
      {category && (
        <h1 className="text-4xl text-white font-bold mb-6">
          Product Category: {category}
        </h1>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}