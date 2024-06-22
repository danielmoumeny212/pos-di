import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";


const Collaboration = () => {
  return (
    <section className="w-full py-24 lg:py-64 bg-white dark:bg-gray-800">
          <div className="container mx-auto text-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-12 md:px-[66px] lg:px-4 ">
                  <div className="relative max-w-[560px] md:max-w-[610px] mx-auto rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 cursor-pointer text-white">
                    <Image 
                      src="/delivery.jpg"
                      width={500}
                      layout="responsive"
                      height={500}
                      className="brightness-75"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-8 lg:px-8">
                        <h3 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold mb-8 text-left">Livrez avec Eat Fast</h3>
                        <div className="text-left">
                            <Link href="#" className={cn(buttonVariants(), 'lg:w-52 lg:h-12 text-lg hover:bg-primary')}><span className="mr-2">Lire plus</span> <span className="inline-block ml-1">&rarr;</span></Link>
                        </div>
                    </div>
                  </div>
                  <div className="relative max-w-[560px] md:max-w-[610px] mx-auto rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 cursor-pointer text-white">
                      <Image 
                          src="/merchant.jpg"
                          width={100}
                          height={100}
                          layout='responsive'
                          className="brightness-75"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-8  lg:px-8">
                          <h3 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold mb-8 text-left">Collaborez avec nous</h3>
                          <div className="text-left">
                              <Link href="#" className={cn(buttonVariants(), 'lg:w-52 lg:h-12 text-lg hover:bg-primary')}><span className="mr-2">Lire plus</span> <span className="inline-block ml-1">&rarr;</span></Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

  )
}

export default Collaboration