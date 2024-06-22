import Image from 'next/image';

const MealsTypes = () => {
  return (
    <section className="w-full py-24 lg:py-64 bg-gray-100 dark:bg-gray-800 px-4 lg:px-32">
          <h3 className="text-3xl font-bold mb-2">All in one</h3>
          <p className="text-muted-foreground mb-6">It's is an amazing system</p>
          <div className="grid grid-cols-4 md:grid-col-4 gap-4">
            <div className="relative overflow-hidden bg-red-400 rounded-sm">
              <Image
                src="/06.jpg"
                width={230}
                height={230}
                layout="responsive"
                className="brightness-50"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-lg text-white text-center font-bold">Des déjeuners équilibrés</p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-blue-300 rounded-sm">
              <Image
                src="/06.jpg"
                width={230}
                height={230}
                layout="responsive"
                className="brightness-50"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-lg text-white font-bold text-center">Vos meilleurs restaurants</p>
              </div>
            </div>

            <div className="relative overflow-hidden bg-green-400 rounded-sm">
              <Image
                src="/06.jpg"
                width={230}
                height={230}
                layout="responsive"
                className="brightness-50"
                />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-lg text-white font-bold text-center">Des repas constants</p>
              </div>
            </div>
            <div className="relative overflow-hidden bg-yellow-400 rounded-sm">
              <Image
                src="/06.jpg"
                width={230}
                height={230}
                layout="responsive"
                className="brightness-50"
              />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <p className="text-lg text-white font-bold text-center">Des plats populaires</p>
              </div>
            </div>
          </div>
        </section> 
  )
}

export default MealsTypes