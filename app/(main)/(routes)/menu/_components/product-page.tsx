
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckIcon, EyeIcon, PencilIcon, PlusIcon, PrinterIcon, TrashIcon, XIcon } from "lucide-react"

export default function ProductPageComponent() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg ">
      <div className="flex items-center justify-between border-b pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12">
            {/* <img src="/placeholder.svg" alt="Ola Click" /> */}
          </Avatar>
          <div>
            <h1 className="text-xl font-bold">Daniel Restaurant</h1>
            <div className="flex items-center space-x-2 text-gray-500">
              <PencilIcon className="w-4 h-4" />
              <span className="text-sm">17/45</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
            Set Hours
          </Button>
          <Button variant="outline" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
            Change Image 1440 x 360px
          </Button>
        </div>
      </div>
      <div className="flex mt-6 space-x-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Button variant="secondary" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              Change Colors
            </Button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Show SKU</span>
              <Switch id="sku-toggle" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckIcon className="text-green-500 w-4 h-4" />
              <Input placeholder="Category Name" className="flex-1" />
              <span className="text-sm text-gray-500">5/30</span>
            </div>
            <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              Move
            </Button>
            <Button variant="secondary" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <PlusIcon className="w-4 h-4 text-white" />
              <span className="sr-only">Add Category</span>
            </Button>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start space-x-4">
              <img src="/placeholder.svg" alt="Hamburger" width={80} height={80} className="rounded-lg" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold">Hamburger</h2>
                    <p className="text-sm text-gray-500">Hamburger with onion, tomato and lettuce</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckIcon className="text-green-500 w-4 h-4" />
                    <span className="text-sm text-gray-500">9/36</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                        Single Price
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                        Multiple Prices
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input placeholder="F CFA 35,00" className="w-24 text-right" />
                      <Input placeholder="F CFA 30,00" className="w-24 text-right" />
                      <span className="text-sm text-gray-500">14%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      Add Garnish
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger id="garnish-1">
                          <SelectValue placeholder="Choose Garnish" />
                        </SelectTrigger>
                      </Select>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="hover:bg-red-500 hover:text-white dark:hover:bg-red-600"
                      >
                        <XIcon className="w-4 h-4 text-white" />
                        <span className="sr-only">Remove</span>
                      </Button>
                      <Select>
                        <SelectTrigger id="garnish-2">
                          <SelectValue placeholder="Choose Garnish" />
                        </SelectTrigger>
                      </Select>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="hover:bg-red-500 hover:text-white dark:hover:bg-red-600"
                      >
                        <XIcon className="w-4 h-4 text-white" />
                        <span className="sr-only">Remove</span>
                      </Button>
                      <Button variant="secondary" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                        <PlusIcon className="w-4 h-4 text-white" />
                        <span className="sr-only">Add</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start space-x-4">
              <img src="/placeholder.svg" alt="Pizza" width={80} height={80} className="rounded-lg" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold">Pizza</h2>
                    <p className="text-sm text-gray-500">Pepperoni pizza with extra cheese</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckIcon className="text-green-500 w-4 h-4" />
                    <span className="text-sm text-gray-500">12/36</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                        Single Price
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                        Multiple Prices
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input placeholder="F CFA 45,00" className="w-24 text-right" />
                      <Input placeholder="F CFA 40,00" className="w-24 text-right" />
                      <span className="text-sm text-gray-500">12%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      Add Garnish
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger id="garnish-1">
                          <SelectValue placeholder="Choose Garnish" />
                        </SelectTrigger>
                      </Select>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="hover:bg-red-500 hover:text-white dark:hover:bg-red-600"
                      >
                        <XIcon className="w-4 h-4 text-white" />
                        <span className="sr-only">Remove</span>
                      </Button>
                      <Select>
                        <SelectTrigger id="garnish-2">
                          <SelectValue placeholder="Choose Garnish" />
                        </SelectTrigger>
                      </Select>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="hover:bg-red-500 hover:text-white dark:hover:bg-red-600"
                      >
                        <XIcon className="w-4 h-4 text-white" />
                        <span className="sr-only">Remove</span>
                      </Button>
                      <Button variant="secondary" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                        <PlusIcon className="w-4 h-4 text-white" />
                        <span className="sr-only">Add</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button variant="secondary" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
            <PlusIcon className="w-4 h-4 text-white" />
            <span className="sr-only">Add Product</span>
          </Button>
        </div>
        <div className="w-72 space-y-4">
          <div className="flex items-center justify-between">
            <Select>
              <SelectTrigger id="status">
                <SelectValue placeholder="Visible" />
              </SelectTrigger>
            </Select>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <PrinterIcon className="w-4 h-4 text-gray-500" />
                <span className="sr-only">Print</span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <TrashIcon className="w-4 h-4 text-gray-500" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Switch id="visibility-toggle" defaultChecked />
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <PencilIcon className="w-4 h-4 text-gray-500" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <EyeIcon className="w-4 h-4 text-gray-500" />
                <span className="sr-only">View</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Input placeholder="Label (0)" className="flex-1" />
            <Button variant="secondary" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <PlusIcon className="w-4 h-4 text-white" />
              <span className="sr-only">Add</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
