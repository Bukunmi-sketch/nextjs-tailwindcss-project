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
     <main className={`min-h-screen   font-mono font-bold border border-red-800 mt-20 `}>
        <Header />


     </main>
  )
}

export default register