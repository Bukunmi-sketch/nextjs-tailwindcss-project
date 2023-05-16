import React from 'react'
import Link from 'next/link'

function Homeheader() {
  return (
    <div
    className="top-0 text-base font-bold text-black-800 text-center bg-[#EEF6FF] h-16 border w-full flex justify-around items-center fixed z-40">
    <h1 > Pcare </h1>

    <div className="invisible lg:visible flex border border-gray-300 justify-end items-center w-7/12 h-full ">
       <span className="bg-white rounded border border-white-300 px-10 py-2 shadow-md"> <Link href="/register"> Get a Plan</Link>  </span>
    </div>
  </div>
  )
}

export default Homeheader