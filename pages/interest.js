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
                           <p>What do you want to see on healthytip?</p>
                            <p> Select at least 3 interests to personalize your </p>
                            <p>experience. They will be visible on your profile.</p>
                        </div>

                        {/* BOX CONTAINING INTERESTS  */}
                        <div className='grid relative border border-green-800 h-5/6 p-12  w-full lg:grid-cols-2 lg:gap-x-10  md:gap-x-14'>

                            <div className='flex items-center justify-center font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <p>Health</p>
                            </div>

                            <div className='flex items-center justify-center font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <p>Health</p>
                            </div>

                            <div className='flex items-center justify-center font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <p>Health</p>
                            </div>


                            <div className='flex items-center justify-center font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <p>Health</p>
                            </div>

                            <div className='flex items-center justify-center font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <p>Health</p>
                            </div>

                            <div className='flex items-center justify-center font-bold bg-white border border-gray-300  mb-10 h-[150px] border rounded-lg '>
                                <p>Health</p>
                            </div>

                        </div>
                        <div className='flex flex-col mb-10 w-4/5 border md:w-2/5'>
                            <button className='bg-black text-white text-xl font-bold py-4 px-4 border border-solid border-black rounded-lg'><Link href="/topic">Continue </Link></button>
                        </div>


                    </div>

                </section>

                {/* -----------------------------------END OF CONTAINER -------------------------------- */}
            </main>
        </>
    )
}

export default Interest