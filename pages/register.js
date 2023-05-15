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

                <section className="flex flex-col items-center border-2 border-solid border-yellow-800  md:flex-row md:w-[70%] ">
                    {/* FIRST BOX */}
                    <div className='flex flex-col items-center h-full  bg-blue-200 m-2.5 md:w-[50%] '>
                        <h3 className='mt-3'>Create a New Account</h3>

                        <div className='flex flex-col border border-green-800 p-12 w-full'>
                            <div className='flex flex-col  mb-10 flex-1 '>
                                <button className=' border border-white-800 p-4 flex-1 rounded-lg cursor-pointer bg-white shadow-md'> Sign up with Google</button>
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <button className=' border border-white-800 p-4 flex-1 rounded-lg cursor-pointer bg-white shadow-md'> Sign up with Apple id</button>
                            </div>

                            <div className='flex flex-col justify-center items-center mb-10 flex-1 '>
                                <p>OR</p>
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <input type='' placeholder='Name' className=' border border-white-800 p-4 flex-1 rounded-lg  bg-white shadow-md text-center outline-none hover:outline-gray-400' />
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <input type='' placeholder='Phone No' className=' border border-white-800 p-4 flex-1 rounded-lg  bg-white text-center shadow-md outline-none hover:outline-gray-400' />
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <h3 className='text-2xl'>Date of birth</h3>

                                <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                            </div>

                            <div className='mb-10 flex'>

                                <input type='' placeholder='Month' className='col-span-2 border-2 border-gray-300 p-4 rounded-lg  bg-white text-center shadow-md shadow-gray-500/50 outline-none hover:outline-gray-400 w-[50%] mr-2' />

                                <input type='' placeholder='Day' className=' border border-white-800 p-4 rounded-lg  bg-white text-center shadow-md outline-none hover:outline-gray-400 w-[30%] mr-2' />

                                <input type='' placeholder='Year' className=' border border-white-800 p-4 rounded-lg  bg-white text-center shadow-md outline-none hover:outline-gray-400 w-[30%]' />
                            </div>

                            <div className='flex flex-col  mb-10 flex-1 '>
                                <button className='bg-black text-white py-4 px-4 border border-solid border-black rounded-lg'>Continue</button>
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