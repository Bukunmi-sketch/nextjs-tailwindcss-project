import { Inter, Roboto_Mono } from 'next/font/google';
import Homeheader from '@/components/homeheader'
import Sidebar from '@/components/sidebar';
import  { useState } from 'react';

import Feeds from '@/components/feeds';
import Sidebarlink from '@/components/sidebarlink';
import Image from 'next/image'
import Link from 'next/link'
import nurse from "@/assets/nurse.png"
import rainbow from "@/assets/rainbow.png"
import Modal from '@/components/Modal';
//import {getProviders, getSession, useSession } from "next-auth/react";

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

    const [session, setsession] = useState(true);

if(!session) return <Login />

    return (
        <>
            {/* <Homeheader /> */}
            <main className={`bg-black min-h-screen flex text-white  max-w-[1500px] mx-auto `}>
               <Sidebar />
               <Feeds />
                <Modal/>

                {/* -----------------------------------END OF CONTAINER -------------------------------- */}
            </main>
        </>
    )
}

export default Home;

/*
export async function getServerSideProps(context){
    const trendingResults =await fetch("https://api/...").then( (res) => res.json()
    );

    const followeResults =await fetch("https://api/...").then( (res) => res.json()
    );
   const providers =await getProviders();
   const session =await getSession(context);

   return{
    props:{
        trendingResults,
        followeResults,
        providers,
        session,
    }
   }

}
*/