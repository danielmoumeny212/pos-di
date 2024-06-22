import Link from "next/link"
import Image from "next/image"
import MealsTypes from "@/components/HomePage/MealsTypes"
import Hero from "@/components/HomePage/Hero"
import RestaurantFeaturesList from "@/components/HomePage/RestaurantFeaturesList"
import Collaboration from "@/components/HomePage/Collaboration"
import Footer from "@/components/Partial/Footer"
import Faq from "@/components/HomePage/Faq"

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          {/* <MenuIcon className="h-6 w-6" /> */}
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
        <RestaurantFeaturesList/>
        <Collaboration/>
        <Faq/>
        <Footer/>
      </main>
    </div>
  )
}
