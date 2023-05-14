import { Inter } from 'next/font/google';
import Header from '@/components/header'

const inter=Inter({subsets:['latin']})

import React from 'react'

function register() {
  return (
     <main className={`min-h-screen   font-mono font-bold border border-red-800 mt-20 ${inter.className}`}>
        <Header />


     </main>
  )
}

export default register