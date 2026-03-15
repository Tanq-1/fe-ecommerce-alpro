"use client"

import { useCategories } from "@/hooks/useCategories"
import type { Category } from "@/types/product"
import Link from "next/link"

export default function CategoriesPage() {
  const { data } = useCategories() as { data: Category[] | undefined }

  return (
    <div>
      <h1 className="text-2xl text-white font-bold mb-4">Categories</h1>

      <ul>
        {data?.map((c: Category) => (
          <li className="text-white underline" key={c.id}>
            <Link className="hover:text-blue-500" href={`/products?category=${c.name}`}>
            {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}