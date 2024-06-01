"use client"
import { Button } from "@/components/ui/button"
import { CopyIcon, DownloadIcon } from "lucide-react"

export default function LinkQrCodePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[280px] h-[560px] rounded-[36px] overflow-hidden border-[8px] border-black dark:border-white">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
              <div className="text-gray-500 dark:text-gray-400 text-4xl">Menu Preview</div>
            </div>
            <img
              src="/placeholder.svg"
              alt="Menu Preview"
              width={280}
              height={560}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-center justify-between w-full">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => {
                navigator.clipboard.writeText("https://example.com/menu")
             
              }}
            >
              <CopyIcon className="h-5 w-5" />
              <span className="sr-only">Copy Menu Link</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => {
                const qrCodeUrl =
                  "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://example.com/menu"
                const link = document.createElement("a")
                link.href = qrCodeUrl
                link.setAttribute("download", "menu-qr-code.png")
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              
              }}
            >
              <DownloadIcon className="h-5 w-5" />
              <span className="sr-only">Download QR Code</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
