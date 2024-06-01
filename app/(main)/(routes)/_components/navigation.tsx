import { BarChartIcon, HomeIcon, PackageIcon, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className="hidden md:block bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <nav className="grid gap-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700"
              
            >
              <HomeIcon className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700"
              
            >
              <PackageIcon className="h-5 w-5" />
              Products
            </Link>
            <Link
              href="/orders"
              className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700"
              
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Orders
            </Link>
            <Link
              href="/analytics"
              className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700"
              
            >
              <BarChartIcon className="h-5 w-5" />
              Analytics
            </Link>
          </nav>
        </div>
  )
}

export default Navigation
