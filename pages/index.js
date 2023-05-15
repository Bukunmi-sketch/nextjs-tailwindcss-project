import Image from 'next/image'
import { Inter, Roboto_Mono } from 'next/font/google';
import Link from 'next/link'
import Header from '@/components/header'
import nurse from "@/assets/nurse.png"
import runner from "@/assets/runner.png"
import kids from "@/assets/kids.png"
import animals from "@/assets/animals.png"
import textimage from "@/assets/textimage.png"
import faber from "@/assets/faber.png"
import julia from "@/assets/julia.png"


 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export default function Home() {
  return (
    <main className={` min-h-screen   font-mono font-bold border border-red-800 mt-20`}>
   {/* <main className={` min-h-screen   font-mono font-bold border border-red-800 mt-20 ${inter.variable} ${roboto_mono.variable}`}> */}
      <Header />

      {/* FIRST SECTION AFTER HEEADER */}

      <section className='flex items-center justify-center flex-col border border-gray-300 w-full md:p-14'>

        <div className='border border-yellow-500 w-full md:w-2/4 h-48  flex items-start flex-col'>
          <div className='border border-gray-300 tracking-wide mb-6 text-3xl'>
              The #1 personal digital healthcare company for everyone
          </div>

          <div className='border border-gray-300 tracking-wide'>
            personalize your health, prevent illness, get latest update on healthcare... explore ways to stay strong, young and healthy
          </div>

        </div>

        <button className='bg-pink-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-12 rounded shadow-md'>Try for free</button>
      </section>

      {/* HUNDREDS OF HEALTH PROFESSIONALS */}

      <section className='flex flex-col mx-auto items-center justify-center border px-4 py-16 border-green-900 w-full md:flex-row  p-14'>

        <div className='border border-gray-300 w-2/4 m-2.5 rounded-xl md:w-[340px]'>
          <Image src={nurse} alt="healthworker" width="350px" height="300px" className='rounded-xl shadow-xl'/>
        </div>
        <div className='border border-gray-300 w-2/4 m-2.5 rounded-xl shadow-xl md:w-[340px]'>
          <Image src={textimage} alt="healthworker" width="350px" height="300px" className='rounded-xl shadow-xl'/>
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


      {/* WHY YOU NEED HEALTHCARERIP */}
      <section className=' border px-4 py-8 border-green-900 w-full '>

        <h3 className='text-center'>Latest Tips</h3>

        <div className='flex flex-col items-center justify-center border border-gray-300 m md:flex-row sm:p-14 '>

          <div className='flex flex-col jusitfy-center items-center border border-gray-300 w-2/4 h-[350px] m-2.5 md:w-[340px]'>
            <Image src={runner} alt="healthworker" width="350px" height="200px" className='rounded-xl shadow-xl h-[70%]'/>
            <p className='m-12'>Women Health</p>
          </div>

          <div className='flex flex-col jusitfy-center items-center border border-gray-300 w-2/4 h-[350px] m-2.5 md:w-[340px]'>
            <Image src={kids} alt="healthworker" width="350px" height="200px" className='rounded-xl shadow-xl h-[70%]'/>
            <p className='m-12'>Diseases and Precautions</p>
          </div>

          <div className='flex flex-col jusitfy-center items-center border border-gray-300 w-2/4 h-[350px] m-2.5 md:w-[340px]'>
            <Image src={animals} alt="healthworker" width="350px" height="200px" className='rounded-xl shadow-xl h-[70%]'/>
            <p className='m-12'>Pets and Care</p>
          </div>
        </div>

      </section>

      {/* WHY YOU NEED HEALTHCARERIP */}
      <section className=' border px-4 py-8 border-green-900 w-full '>

        <div className='flex flex-col items-center justify-center border border-gray-300 m md:flex-row sm:p-14 '>
          
          <ul className='list-disc border border-gray-300 w-[90%] p-4 m-2.5  md:w-[30%]'>
          <div>Product</div>
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/business">Flo for Business</Link></li>
            <li><Link href="/security">Security at Flo</Link></li>
            <li><Link href="/privacy">Privacy Portal</Link></li>
          </ul>
          <ul className='list-disc border border-gray-300 w-[90%] p-4 m-2.5  md:w-[30%]'>
          <div>Company</div>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/press">Press Center</Link></li>
            <li><Link href="/body">Your Body your story</Link></li>
          </ul>
          <ul className='list-disc border border-gray-300 w-[90%] p-4 m-2.5  md:w-[30%]'>
          <div>Consent</div>
            <li><Link href="/health">Health Library</Link></li>
            <li><Link href="/editorial">Editorial Process and Standards</Link></li>
            <li><Link href="/advertisng">Advertising Principles</Link></li>
            <li><Link href="/tools">Tools</Link></li>
          </ul>
        </div>

      </section>

    </main>
  )
}
