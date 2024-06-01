import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { BellIcon,  Package2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Link href="#" className="flex items-center gap-2">
        <Package2Icon className="h-6 w-6" />
        <span className="text-lg font-bold">Acme POS</span>
      </Link>
      <nav className="hidden md:flex items-center gap-4">
        <Link href="/menu" className="hover:underline">
          Menu
        </Link>
       
        <Link href="/pos" className="hover:underline">
          POS
        </Link>
      </nav>
    </div>
    <div className="flex items-center gap-4">
    <Button variant="ghost" size="icon" className="rounded-full">
        <BellIcon className="h-6 w-6" />
        <span className="sr-only">Notifications</span>
      </Button>
    <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
      <Image src="/placeholder-user.jpg" width={36} height={36} alt="Avatar" className="overflow-hidden rounded-full" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuItem>Support</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

      
    </div>
  </header>
  )
}
export default NavBar