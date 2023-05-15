import { Inter, Roboto_Mono } from 'next/font/google';
import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'
import nurse from "@/assets/nurse.png"
import rainbow from "@/assets/rainbow.png"

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

function Step2() {
    return (
        <>
            <Header />
            <main className={`min-h-screen flex justify-center mt-[65px] font-bold border border-dotted border-red-800 md:mt-20 md:flex-row `}>

                {/* CONTAINER BOX */}

                <section className="flex flex-col items-center border-2 border-dashed border-yellow-800  md:flex-row md:w-[70%] ">
                    {/* FIRST BOX */}
                    <div className='flex flex-col items-center h-full  bg-blue-200 m-2.5 md:w-[50%] '>
                        <h3 className='mt-3'>Create a New Account</h3>

                        <div className='flex flex-col border border-green-800 p-12 w-full'>
                            
                            <div className='flex flex-col  mb-10 flex-1 '>
                                <h3 className='text-2xl'>Date of birth</h3>

                                <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <button className='bg-black text-white py-4 px-4 border border-solid border-black rounded-lg'><Link href="/step2">Continue </Link></button>
                            </div>


                        </div>
                    </div>

                     {/* -----------------------------------END OF FIRST BOX -------------------------------- */}

                    {/* -----------------------------------SECOND  BOX -------------------------------- */}
                    <div className='flex flex-col h-full  m-2.5 border border-gray-300 hidden md:w-[50%] md:flex '>
                        <div className='w-full border border-gray-300 mt-2.5 flex-shrink-0 rounded-xl relative'>
                            <Image src={rainbow} alt="healthworker" className='h-[400px] rounded-xl shadow-xl w-full' />
                        </div>
                        <div className='border border-gray-300 mt-2.5 rounded-xl relative'>
                            <Image src={nurse} alt="healthworker" className='h-[400px] flex-shrink-0 rounded-xl shadow-xl w-full' />
                        </div>
                    </div>

                    {/* -----------------------------------END OF SECOND  BOX -------------------------------- */}

                </section>

                {/* -----------------------------------END OF CONTAINER -------------------------------- */}
            </main>
        </>
    )
}

export default Step2