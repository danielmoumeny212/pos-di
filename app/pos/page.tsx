
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { BellIcon, CheckIcon, CreditCardIcon, PrinterIcon, SettingsIcon, TrashIcon, XIcon } from "lucide-react"
import NavBarPos from "../(main)/(routes)/_components/navbarPos"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<any>([])
  const products = [
    { id: 1, name: "Cheeseburger", price: 12.99 },
    { id: 2, name: "Fries", price: 4.99 },
    { id: 3, name: "Soda", price: 2.99 },
    { id: 4, name: "Salad", price: 8.99 },
    { id: 5, name: "Chicken Sandwich", price: 10.99 },
  ]
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const handleProductSelect = (product: any) => {
    if (!selectedProducts.some((p:any) => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product])
    }
  }
  const handleRemoveProduct = (product:any) => {
    setSelectedProducts(selectedProducts.filter((p:any) => p.id !== product.id))
  }
  const total = selectedProducts.reduce((acc:any, product:any) => acc + product.price, 0)
  return (
    <div className="flex flex-col h-screen">
      <NavBarPos />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_440px] gap-6 p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Current Order</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <PrinterIcon className="w-5 h-5 mr-2" />
                Print
              </Button>
              <Button variant="outline">
                <CheckIcon className="w-5 h-5 mr-2" />
                Place Order
              </Button>
            </div>
          </div>
          <div className="mb-4">
            <Label htmlFor="search">Search Products</Label>
            <Input
              id="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <Button
                key={product.id}
                variant="outline"
                className="flex items-center justify-between h-32 "
                onClick={() => handleProductSelect(product)}
              >
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
                {/* <Image
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Product Image"
                  width={180}
                  height={120}
                  className="w-full object-fill"
                /> */}
                <div>
                <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-[120px] h-full object-cover object-center"></img>

                </div>
              </Button>
            ))}
          </div>
       
        </div>
        {/* Fils test */}
        <div>
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Total</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedProducts.map((product:any) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => handleRemoveProduct(product)}
                    >
                      <XIcon className="w-5 h-5" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="text-right font-bold">
                  Total:
                </TableCell>
                <TableCell className="font-bold">${total.toFixed(2)}</TableCell>
                <TableCell />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
       </main>
    </div>
  )
}
