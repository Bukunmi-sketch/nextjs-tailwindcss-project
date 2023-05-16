import { Inter, Roboto_Mono } from 'next/font/google';
import Homeheader from '@/components/homeheader'
import Sidebar from '@/components/sidebar';
import Sidebarlink from '@/components/sidebarlink';
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

function Home() {
    return (
        <>
            <Homeheader />
            <main className={`bg-black min-h-screen flex  max-w-[1500px] mx-auto `}>
               <Sidebar />
                   {/* SIDEBAR */}
                

                {/* -----------------------------------END OF CONTAINER -------------------------------- */}
            </main>
        </>
    )
}

export default Home