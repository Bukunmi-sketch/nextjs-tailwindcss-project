import { Inter, Roboto_Mono } from 'next/font/google';
import Header from '@/components/header'

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
            <main className={`min-h-screen flex flex-col justify-center font-bold border border-red-800 md:mt-20 md:flex-row `}>


                <div className='flex flex-col items-center h w-[40%] bg-blue-200 m-2.5  '>
                    <h3 className='mt-3'>Create a New Account</h3>

                    <div className='flex flex-col border border-green-800 p-12'>
                        <div className='flex flex-col border border-red-800'>
                            <input type='' placeholder='Name' />
                        </div>

                        <div className='flex flex-col border border-red-800'>
                            <input type='' placeholder='Phone No' />
                        </div>
                    </div>

                </div>

                <div className='flex flex-col w-[40%] m-2.5 border border-gray-300'>
                    <div className=''>1st box</div>
                    <div className=''>2nd box</div>
                </div>


            </main>
        </>
    )
}

export default register