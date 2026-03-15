"use client"

import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { items, removeItem, clearCart } = useCart()
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0)
  const checkout = () => {
    if (items.length === 0){
      alert("Won't you buy something first?")
      return
    }
    const confirmation = window.confirm(`Are you sure you want to buy the items you just picked? The total price is $${totalPrice}`)
    if (confirmation){
      alert("Thank You! We will send to you ASAP (probably)")
      clearCart()
    }

  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-white">Cart</h1>
      <h2 className="text-3xl text-white">Total Price: ${totalPrice}</h2>
      <div className="flex space-x-4">
        <button className="text-red-500 border p-2 mt-2 hover:text-red-300" onClick={clearCart}>Clear Cart</button>
        <button className="text-green-500 border p-2 mt-2 hover:text-green-300" onClick={checkout}>Checkout Items</button>
      </div>

      {items.map((item) => (
        <div key={item.id} className="flex justify-between border p-4 mt-2 text-white">
          <div>{item.title} ${item.price}</div>

          <button className="hover:text-red-500" onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  )
}