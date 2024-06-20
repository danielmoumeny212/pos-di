import { BarChartIcon, HomeIcon, PackageIcon, ShoppingCartIcon, MenuIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface NavigationProps {
  displayNavbar: boolean;
  setDisplayNavbar: () => void;
}

const Navigation = ({ displayNavbar, setDisplayNavbar }: NavigationProps) => {
  return (
    <div className={`flex flex-col bg-gray-100 dark:bg-gray-800 p-4 transition-all duration-300 h-screen ${displayNavbar ? 'w-60' : 'w-24'} overflow-hidden`}>
      <div className='flex justify-between'>
        <div></div>
        <div>
          {displayNavbar ? (
            <ChevronLeftIcon className='h-5 w-5 cursor-pointer' onClick={() => setDisplayNavbar(!displayNavbar)} />
          ) : (
            <ChevronRightIcon className='h-5 w-5 cursor-pointer' onClick={() => setDisplayNavbar(!displayNavbar)} />
          )}
        </div>
      </div>
      {displayNavbar ? (
        <nav className="grid gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <HomeIcon className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <PackageIcon className="h-5 w-5" />
            Products
          </Link>
          <Link
            href="/orders"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Orders
          </Link>
          <Link
            href="/menu"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <MenuIcon className="h-5 w-5" />
            Menu
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <BarChartIcon className="h-5 w-5" />
            Analytics
          </Link>
        </nav>
      ) : (
        <nav className="grid gap-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <HomeIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 dark:hover:bg-gray-700"
          >
            <PackageIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/orders"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <ShoppingCartIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/menu"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <MenuIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/analytics"
            className="flex items-center gap-2 rounded-md py-2 px-3 hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700"
          >
            <BarChartIcon className="h-5 w-5" />
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
