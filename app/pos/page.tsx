"use client"
import React, { useState } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { BellIcon, CheckIcon, CreditCardIcon, PrinterIcon, SettingsIcon, TrashIcon, XIcon } from "lucide-react"
import NavBarPos from "../(main)/(routes)/_components/navbarPos"
const initialProducts = [
  { id: 1, name: "Cheeseburger", price: 2000, qty: 1 },
  { id: 2, name: "Fries", price: 2000 , qty:  1 },
  { id: 3, name: "Soda", price: 1500, qty: 1 },
  {  id: 4, name: "Salad", price: 1000 , qty: 1 },
  { id: 5, name: "Chicken Sandwich", price: 3000, qty: 1 },

];

export default function Boutique() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<any>([])
  const addToCart = (productToAdd:any) => {
    
    setCart((currentCart:any) => {
      const productInCart = currentCart.find((product:any) => product.id === productToAdd.id);
      if (productInCart) {
        return currentCart.map((product:any) =>
          product.id === productToAdd.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }
      return [...currentCart, { ...productToAdd, quantity: 1 }];
    });
  };

  const removeFromCart = (productId:any) => {
    setCart((currentCart : any) => {
      const productInCart = currentCart.find((product:any) => product.id === productId);
      if (productInCart.quantity > 1) {
        return currentCart.map((product:any) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      }
      return currentCart.filter((product:any) => product.id !== productId);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product:any) => total + product.price * product.quantity, 0);
  };
  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <>
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
          
            
            <button
            key={product.id}
           
            className="flex items-center justify-between h-32 "
               
            onClick={() => addToCart(product)}>
              
              <span>{product.name}:</span>
              <span> {product.price} Fcfa</span>
              <div>
                {/* <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-[120px] h-full object-cover object-center"></img> */}

                </div>
            </button>
          
        ))}
          </div>
       
        </div>
     
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
              {cart.map((product:any) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.price} x {product.quantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <XIcon className="w-5 h-5" />
                      
                      <span className="sr-only">Remove</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={() => addToCart(product)}
                    >
                      <XIcon className="w-5 h-5" />
                      
                      <span className="sr-only">Add</span>
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
                <TableCell className="font-bold">{getTotalPrice()} Fcfa</TableCell>
                <TableCell />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
       </main>
    
    </div>
    
    </>
  );
}
