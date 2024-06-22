import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon, ContactIcon, GanttChartIcon, InfoIcon, MenuIcon, ReceiptIcon, ShoppingCartIcon, XIcon } from "lucide-react"
import Hero from "@/components/HomePage/Hero"
import Footer from "@/components/Partial/Footer"
import Collaboration from "@/components/HomePage/Collaboration"
import MealsTypes from "@/components/HomePage/MealsTypes"

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          {/* <MenuIcon className="h-6 w-6" /> */}
          <Image
            src="/logo.png"
            alt="pizza image"
            width={100}
            height={20}
          />
          <span className="sr-only">Acme Restaurant POS</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <Hero/>
        <MealsTypes/>               
        <Collaboration/>
        <Footer/>
      </main>
    </div>
  )
}
