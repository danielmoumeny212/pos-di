
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
import NavBar from "../(main)/(routes)/_components/navbar"

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
      <NavBar />
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 p-6">
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
                className="flex items-center justify-between"
                onClick={() => handleProductSelect(product)}
              >
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
              </Button>
            ))}
          </div>
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
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Customer Info</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="(123) 456-7890" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john@example.com" />
            </div>
            <div>
              <Label htmlFor="table">Table</Label>
              <Select >
                <SelectTrigger>
                  <SelectValue placeholder="Select table" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Table 1</SelectItem>
                  <SelectItem value="2">Table 2</SelectItem>
                  <SelectItem value="3">Table 3</SelectItem>
                  <SelectItem value="4">Table 4</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Button variant="outline">
              <TrashIcon className="w-5 h-5 mr-2" />
              Cancel Order
            </Button>
            <Button variant="outline">
              <CreditCardIcon className="w-5 h-5 mr-2" />
              Process Payment
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
