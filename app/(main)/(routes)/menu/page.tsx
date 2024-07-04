import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductPageComponent from "./_components/product-page";
import LinkQrCodePage from "./_components/link-qrcode";

export default function MenuPage() {
    return (
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-light p-4 md:gap-8 md:p-10 w-full justify-center items-center">
          <div className=" w-full  gap-2">
            <h1 className="text-3xl font-semibold">Menu </h1>
          </div>
          <div className="grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav
              className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
            >
           
      <Tabs
       defaultValue="page" className="w-full">
        <TabsList>
          <TabsTrigger value="page">Ma page produit</TabsTrigger>
          <TabsTrigger value="link">Generer QrCode </TabsTrigger>
        </TabsList>
        <TabsContent value="page">
           <ProductPageComponent />
        </TabsContent>
        <TabsContent value="link">
           <LinkQrCodePage />
        </TabsContent>
      </Tabs>
  
              
    </nav>
             
             
          </div>
        </main>
    )
  }
  