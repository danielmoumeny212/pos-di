import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {

  return (
    <section className='relative flex items-center justify-center h-[1000px] lg:h-[800px] px-4 md:px-8 lg:px-24'>
      <div className='grid grid-cols-1 lg:grid-cols-2 h-[800px] lg:h-[600px] gap-4 max-w-[1000px] mx-[auto]'>
        <div className='flex flex-col justify-between h-[360px] lg:h-[600px] sm:px-4 lg:px-1 py-2 lg:py-12'>
          <h1 className='leading-[60px] sm:leading-[86px] lg:leading-[92px] font-montserrat text-5xl sm:text-6xl lg:text-6xl font-bold'>La <span className='text-primary'>magie</span> de déguster chez soi</h1>
          <div className='flex flex-col justify-between h-28 md:h-[104px]'>
            <p className='opacity-50 text-base'>Commandez et faites vous livrer en un click par les restaurants à proximité de chez vous</p>
            <div>
            <Link
              href="#"
              className="inline-flex h-9 w-[220px] items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
              >
                Explorez les restaurants 
            </Link> 
            </div>
          </div>
        </div>


        {/* -----Image container */}
        <div className='flex items-center justify-center'>
          <Image
            src='/hero.png'
            width={470}
            height={470}
            alt="hero image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero