import { Inter, Roboto_Mono } from 'next/font/google';
import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'

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

function Username() {
    return (
        <>
            <Header />
            <main className={`min-h-screen flex justify-center mt-[65px]  border border-dotted border-red-800 md:mt-20 md:flex-row `}>

                {/* CONTAINER BOX */}

                <section className="flex flex-col items-center border-2 border-dashed border-yellow-800  md:flex-row md:w-[70%] ">
                    {/* FIRST BOX */}
                    <div className='flex flex-col items-center justify-center h-full  w-full  bg-blue-200 m-2.5 md:p-12 '>

                        <div className='flex flex-col relative border border-green-800 h-5/6 p-12  w-full'>

                            <div className='flex flex-col  mb-10  text-xl'>
                                <p className=''>What should we call you?</p>
                                <p>Your @username is unique. You can always change it later.</p>
                            </div>

                            <div className='flex flex-col border  mb-10 '>
                                <input type='text' placeholder='Username' className=' border border-white-800 h-[40px] text-bold p-4 flex-1 rounded-lg  bg-white shadow-md outline-none hover:outline-gray-400' />
                            </div>

                            <div className='flex flex-col mb-10 border '>
                                <button className='bg-black text-white text-xl font-bold py-4 px-4 border border-solid border-black rounded-lg'><Link href="/interest">Continue </Link></button>
                            </div>


                        </div>
                    </div>

                </section>

                {/* -----------------------------------END OF CONTAINER -------------------------------- */}
            </main>
        </>
    )
}

export default Username