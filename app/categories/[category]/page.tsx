"use client"

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"
import { useParams } from "next/navigation"

export default function ProductsPage() {
  const { category } = useParams()
  const { data, isLoading } = useProducts(category as string)

  if (isLoading)
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )

  if (data && data.length === 0)
    return (
      <div>
        <h1 className="text-4xl text-white font-bold mb-6">No Products Found in Category: {category}</h1>
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