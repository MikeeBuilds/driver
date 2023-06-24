import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
          <div className='home__text-container '>
              <h1 className='text-4xl font-extrabold'>
                  Car Catalogue
              </h1>
              <p className='text-lg mt-4'>
                Explore The Cars You Might Like
              </p>
          </div>

          <div className='home__filters'>
            <SearchBar />

            <div className='home__container'>
              <CustomFilter />
              <Link 
                            href='/'
                            className='text-gray-500'
                        >
                            Privacy Policy
                        </Link>
            </div>
          </div>
      </div>
    </main>
  )
}
