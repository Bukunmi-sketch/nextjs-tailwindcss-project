import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import faber from "@/assets/faber.png"
import julia from "@/assets/julia.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` min-h-screen   font-mono font-bold border border-red-800 mt-20 ${inter.className}`}
    >
      <Header />

      {/* FIRST SECTION AFTER HEEADER */}

      <section className='flex items-center justify-center flex-col border border-gray-300 w-full md:p-14'>

        <div className='border border-yellow-500 w-full md:w-2/4 h-48  flex items-start flex-col'>
          <div className='border border-gray-300 tracking-wide mb-6'>
            personal digital healthcare company for everyone
          </div>

          <div className='border border-gray-300 tracking-wide'>
            personalize your health, prevent illness, get latest update on healthcare... explore ways to stay strong, young and healthy
          </div>

        </div>

        <button className='bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow-2xl'>Try for free</button>
      </section>

      {/* HUNDREDS OF HEALTH PROFESSIONALS */}

      <section className='flex flex-col mx-auto items-center justify-center border px-4 py-16 border-green-900 w-full md:flex-row  p-14'>

        <div className='border border-gray-300 w-2/4 m-2.5 md:w-[340px]'>
          <Image src={faber} alt="healthworker" width="350px" height="300px" />
        </div>
        <div className='border border-gray-300 w-2/4 m-2.5 md:w-[340px]'>
          <Image src={julia} alt="healthworker" width="350px" height="300px" />
        </div>

      </section>

      {/* WHY YOU NEED HEALTHCARERIP */}
      <section className=' border px-4 py-8 border-green-900 w-full '>

        <h3 className='text-center'>Why you need healthcaretip? </h3>

        <div className='flex flex-col items-center justify-center border border-gray-300 m md:flex-row sm:p-14 '>
          <div className='border border-gray-300 w-[90%] p-4 m-2.5  md:w-[30%]'>
            Accurate predictions Tracking your periods and ovulation with Flo can help you calculate and predict symptoms ahead of time, getting y ou prepared for the days ahead.
          </div>
          <div className='border border-gray-300 w-[90%] p-4 m-2.5  md:w-[30%]'>
            Accurate predictions Tracking your periods and ovulation with Flo can help you calculate and predict symptoms ahead of time, getting y ou prepared for the days ahead.
          </div>
          <div className='border border-gray-300 w-[90%] p-4 m-2.5  md:w-[30%]'>
            Accurate predictions Tracking your periods and ovulation with Flo can help you calculate and predict symptoms ahead of time, getting y ou prepared for the days ahead.
          </div>
        </div>

      </section>


      <section className=' border px-4 py-8 border-green-900 w-full '>

        <h3 className='text-center'>Latest Tips</h3>

        <div className='flex flex-col items-center justify-center border border-gray-300 m md:flex-row sm:p-14 '>

          <div className='border border-gray-300 w-2/4 m-2.5 md:w-[340px]'>
            <Image src={faber} alt="healthworker" width="350px" height="300px" />
            <p>Women Health</p>
          </div>

          <div className='border border-gray-300 w-2/4 m-2.5 md:w-[340px]'>
            <Image src={julia} alt="healthworker" width="350px" height="300px" />
            <p>Disease and Precautions</p>
          </div>

          <div className='border border-gray-300 w-2/4 m-2.5 md:w-[340px]'>
            <Image src={julia} alt="healthworker" width="350px" height="300px" />
            <p>Pets and Care</p>
          </div>
        </div>

      </section>

    </main>
  )
}
