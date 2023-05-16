import React from 'react'
import Sidebarlink from './sidebarlink'

function Sidebar() {
    return (
        <div className='hidden text-white border border-white border-solid sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full '>

            <div className='space-y-2.5 mt-4 mb-2.5 xl:ml:24'>
                <Sidebarlink />
            </div>


        </div>
    )
}

export default Sidebar