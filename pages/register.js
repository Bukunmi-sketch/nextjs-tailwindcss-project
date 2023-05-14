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

function register() {
    return (
        <>
            <Header />
            <main className={`min-h-screen flex justify-center font-bold border border-red-800 md:mt-20 md:flex-row `}>

                <section className="flex  items-center border-2 border-solid border-red-800 w-[70%] ">
                    {/* FIRST BOX */}
                    <div className='flex flex-col items-center h-full w-[50%] bg-blue-200 m-2.5  '>
                        <h3 className='mt-3'>Create a New Account</h3>

                        <div className='flex flex-col border border-green-800 p-12 w-full'>
                            <div className='flex flex-col  mb-10 flex-1 '>
                                <button className=' border border-white-800 p-2 flex-1 rounded-lg cursor-pointer bg-white shadow-md'> Sign up with Google</button>
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <button className=' border border-white-800 p-2 flex-1 rounded-lg cursor-pointer bg-white shadow-md'> Sign up with Apple id</button>
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <input type='' placeholder='Name' className=' border border-white-800 p-2 flex-1 rounded-lg  bg-white outline-none' />
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <input type='' placeholder='Phone No' className=' border border-white-800 p-2 flex-1 rounded-lg  bg-white outline-none' />
                            </div>
                        </div>
                    </div>

                    {/* SECOND BOX */}
                    <div className='flex flex-col h-full w-[50%] m-2.5 border border-gray-300'>
                        <div className='w-full border border-gray-300 mt-2.5 flex-shrink-0 rounded-xl relative'>
                            <Image src={rainbow} alt="healthworker" className='h-[300px] rounded-xl shadow-xl w-full' />
                        </div>
                        <div className='border border-gray-300 mt-2.5 rounded-xl relative'>
                            <Image src={nurse} alt="healthworker" className='h-[300px] rounded-xl shadow-xl w-full' />
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}

export default register