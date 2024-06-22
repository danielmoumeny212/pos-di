import { ContactIcon, GanttChartIcon, InfoIcon, ReceiptIcon, ShoppingCartIcon, XIcon } from "lucide-react"

const RestaurantFeaturesList = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Des Outils En Un Pour Gérer Votre Restaurant
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Notre système de point de vente et notre menu numérique offrent une suite complète de fonctionnalités pour vous aider à gérer votre restaurant plus efficacement.
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
                  Streamline your staff scheduling, time tracking, and performance management features.
                </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RestaurantFeaturesList