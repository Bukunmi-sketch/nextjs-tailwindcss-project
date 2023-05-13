import React from 'react'


function Header() {
  return (
    <div
    className="top-0 text-base bg font-bold text-black-800 text-center bg-cyan-300 h-16 border w-full flex justify-around items-center fixed">
    <h1 > Health Care </h1>

    <div className="invisible lg:visible flex border border-gray-300 justify-around items-center w-7/12 h-full ">
       <span>Products</span>
       <span>Explore Health</span>
       <span className="bg-white rounded border border-white-300 px-10 py-2"> Login  </span>
       <span className="bg-white rounded border border-white-300 px-10 py-2"> Try Free</span>
    </div>
  </div>
  )
}

export default Header
