import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { ActivityIcon, BarChartIcon,  DollarSignIcon, HomeIcon, MoveHorizontalIcon, Package2Icon, PackageIcon, ShoppingCartIcon, UsersIcon } from "lucide-react"
import Image from "next/image"

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
       
        <div className="grid gap-6">
          <section>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="flex items-center gap-4">
                <Select defaultValue="today">
                  <SelectTrigger className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
                    <SelectValue>Today</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="yesterday">Yesterday</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <MoveHorizontalIcon className="h-6 w-6" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Total Revenue</CardTitle>
                  <DollarSignIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">$45,231.89</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>New Customers</CardTitle>
                  <UsersIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">+2,350</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+180.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Total Orders</CardTitle>
                  <ShoppingCartIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">+12,234</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+19% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Active Customers</CardTitle>
                  <ActivityIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">+573</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+201 since last hour</p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Orders</h2>
              <Link href="#" className="text-primary hover:underline" >
                View all
              </Link>
            </div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Order</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>Unpaid</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </section>
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Top Selling Products</h2>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="rounded-t-lg w-full aspect-square object-cover"
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Gourmet Burger</h3>
                  <p className="text-gray-500 dark:text-gray-400">Delicious handcrafted burger</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold">$12.99</span>
                    <Button >Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="rounded-t-lg w-full aspect-square object-cover"
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Margherita Pizza</h3>
                  <p className="text-gray-500 dark:text-gray-400">Classic Italian pizza</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold">$9.99</span>
                    <Button >Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <Image
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={300}
                  height={300}
                  className="rounded-t-lg w-full aspect-square object-cover"
                />
                <CardContent>
                  <h3 className="text-lg font-bold">Caesar Salad</h3>
                  <p className="text-gray-500 dark:text-gray-400">Fresh and healthy salad</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold">$7.99</span>
                    <Button>Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      
    </div>
  )
}

export default DashboardPage
