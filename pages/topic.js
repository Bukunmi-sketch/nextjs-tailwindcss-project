import { Inter, Roboto_Mono } from 'next/font/google';
import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'
import pregnancy from "@/assets/pregnancy.png"

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

function Interest() {
    return (
        <>
            <Header />
            <main className={`min-h-screen flex justify-center mt-[65px]  border border-dotted border-red-800 md:mt-20 md:flex-row `}>

                {/* CONTAINER BOX */}

                <section className="flex flex-col items-center border-2 border-dashed border-yellow-800  md:flex-row md:w-[70%] ">
                    {/* FIRST BOX */}
                    <div className='flex flex-col items-center justify-center h-full  w-full  bg-blue-200 m-2.5 md:p-12 '>

                        <div className='flex flex-col  mb-10  text-xl'>
                            <p>Don’t miss out</p>
                            <p>When you follow a topic, </p>
                            <p>you’ll see their posts in your Timeline. </p>
                            <p>You’ll also get more relevant recommendations.</p>
                        </div>

                        {/* BOX CONTAINING INTERESTS  */}
                        <div className='grid relative border border-green-800 h-5/6 p-2  w-full md:p-12 2xl:grid-cols-2 2xl:gap-x-10 md:gap-x-14'>

                            <div className='flex items-center justify-around relative font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <Image src={pregnancy} alt="pregnacy test" className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] ' />
                                <div className='flex flex-col w-2/4'>
                                    <p className='text-2xl mb-4'>Pregnancy Care</p>
                                    <p className='font-light'>Everything to know for health pregnant</p>
                                </div>

                                <button className='bg-black text-white font-bold px-4 py-2 rounded-md'>Follow</button>
                            </div>

                            <div className='flex items-center justify-around relative font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <Image src={pregnancy} alt="pregnacy test" className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] ' />
                                <div className='flex flex-col w-2/4'>
                                    <p className='text-2xl mb-4'>Pregnancy Care</p>
                                    <p className='font-light'>Everything to know for health pregnant</p>
                                </div>

                                <button className='bg-black text-white font-bold px-4 py-2 rounded-md'>Follow</button>
                            </div>

                            <div className='flex items-center justify-around relative font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <Image src={pregnancy} alt="pregnacy test" className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] ' />
                                <div className='flex flex-col w-2/4'>
                                    <p className='text-2xl mb-4'>Pregnancy Care</p>
                                    <p className='font-light'>Everything to know for health pregnant</p>
                                </div>

                                <button className='bg-black text-white font-bold px-4 py-2 rounded-md'>Follow</button>
                            </div>


                            <div className='flex items-center justify-around relative font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <Image src={pregnancy} alt="pregnacy test" className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] ' />
                                <div className='flex flex-col w-2/4'>
                                    <p className='text-2xl mb-4'>Pregnancy Care</p>
                                    <p className='font-light'>Everything to know for health pregnant</p>
                                </div>

                                <button className='bg-black text-white font-bold px-4 py-2 rounded-md'>Follow</button>
                            </div>

                            <div className='flex items-center justify-around relative font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <Image src={pregnancy} alt="pregnacy test" className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] ' />
                                <div className='flex flex-col w-2/4'>
                                    <p className='text-2xl mb-4'>Pregnancy Care</p>
                                    <p className='font-light'>Everything to know for health pregnant</p>
                                </div>

                                <button className='bg-black text-white font-bold px-4 py-2 rounded-md'>Follow</button>
                            </div>

                            <div className='flex items-center justify-around relative font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <Image src={pregnancy} alt="pregnacy test" className='h-[70px] w-[70px] md:h-[100px] md:w-[100px] ' />
                                <div className='flex flex-col w-2/4'>
                                    <p className='text-2xl mb-4'>Pregnancy Care</p>
                                    <p className='font-light'>Everything to know for health pregnant</p>
                                </div>

                                <button className='bg-black text-white font-bold px-4 py-2 rounded-md'>Follow</button>
                            </div>

                            
                        </div>
                        <div className='flex flex-col mb-10 w-4/5 border md:w-2/5'>
                            <button className='bg-black text-white text-xl font-bold py-4 px-4 border border-solid border-black rounded-lg'><Link href="/step2">Continue </Link></button>
                        </div>


                    </div>

                </section>

                {/* -----------------------------------END OF CONTAINER -------------------------------- */}
            </main>
        </>
    )
}

export default Interest