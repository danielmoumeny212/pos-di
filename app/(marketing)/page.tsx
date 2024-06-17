import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon, ContactIcon, GanttChartIcon, InfoIcon, MenuIcon, ReceiptIcon, ShoppingCartIcon, XIcon } from "lucide-react"
import Image from "next/image"
import Hero from "@/components/HomePage/Hero"

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          {/* <MenuIcon className="h-6 w-6" /> */}
          <Image
            src="/logo.png"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Restaurant Operations
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our POS system and digital menu offer a comprehensive suite of features to help you manage your
                  restaurant more efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <ShoppingCartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-bold">Order Management</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your order processing with our intuitive POS interface and real-time order tracking.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <ReceiptIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-bold">Inventory Tracking</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Effortlessly manage your inventory with our automated tracking and reporting tools.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <ContactIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-bold">Contactless Ordering</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enhance customer experience with our digital menu and contactless ordering capabilities.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-bold">Advanced Analytics</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gain valuable insights into your business with our comprehensive reporting and analytics tools.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <ShoppingCartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-bold">Customer Management</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enhance customer loyalty and engagement with our customer relationship management features.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <GanttChartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <h3 className="text-lg font-bold">Staff Management</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your staff scheduling, time tracking, and performance management with our comprehensive
                  tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="pricing">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that best fits your restaurant s needs.
              </p>
            </div>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader className="border-b">
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small restaurants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">$49</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Order management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Inventory tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Contactless ordering
                    </li>
                    <li className="flex items-center gap-2">
                      <XIcon className="h-4 w-4 text-red-500" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <XIcon className="h-4 w-4 text-red-500" />
                      Customer management
                    </li>
                    <li className="flex items-center gap-2">
                      <XIcon className="h-4 w-4 text-red-500" />
                      Staff management
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="border-b">
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Ideal for medium-sized restaurants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">$99</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Order management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Inventory tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Contactless ordering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Customer management
                    </li>
                    <li className="flex items-center gap-2">
                      <XIcon className="h-4 w-4 text-red-500" />
                      Staff management
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="border-b">
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Tailored for large restaurant chains</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold">$199</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="grid gap-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Order management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Inventory tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Contactless ordering
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Customer management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-green-500" />
                      Staff management
                    </li>
                  </ul>
                  <Button>Get Started</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t" id="contact">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact Us</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
