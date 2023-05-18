import '@/styles/globals.css'
// import Header from '@/components/header'
//import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* <Header/> */}
    {/* <RecoilRoot> */}
    <Component {...pageProps} />
    {/* </RecoilRoot> */}
    </>
  )
}
