import Link from 'next/link'


function Header() {
  return (
    <div
    className="top-0 text-base bg font-bold text-black-800 text-center bg-cyan-300 h-16 border w-full flex justify-around items-center fixed">
    <h1 > Pcare </h1>

    <div className="invisible lg:visible flex border border-gray-300 justify-around items-center w-7/12 h-full ">
       <span>Products</span>
       <span>Explore Health</span>
       <span className="bg-white rounded border border-white-300 px-10 py-2 shadow-md"> <Link href="/register"> Login</Link> </span>
       <span className="bg-white rounded border border-white-300 px-10 py-2 shadow-md"> <Link href="/register"> Try Free</Link>  </span>
    </div>
  </div>
  )
}

export default Header
