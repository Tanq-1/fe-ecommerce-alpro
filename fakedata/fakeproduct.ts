import { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: 1,
    title: "ScreenWatch",
    price: 20,
    category: "Wearables",
    image: "/products/1.png",
    description: "A handwatch. Now with a screen!",
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 2,
    title: "SmartMouse",
    price: 80,
    category: "Mouse",
    image: "/products/2.png",
    description: "An electric mouse",
    rating: { rate: 4.8, count: 250 },
  },
    {
    id: 3,
    title: "Smart Laser",
    price: 20,
    category: "Wearables",
    image: "/products/3.png",
    description: "L A S E R",
    rating: { rate: 4.5, count: 120 },
  },
    {
    id: 4,
    title: "Holo Laptop",
    price: 20,
    category: "Laptop",
    image: "/products/4.png",
    description: "Is it a physical laptop?",
    rating: { rate: 4.5, count: 120 },
  },
]