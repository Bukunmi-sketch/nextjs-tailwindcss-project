import React from 'react'
import Sidebarlink from './sidebarlink'

function Sidebar() {
    return (
        <div className='hidden  border border-white border-solid sm:flex sm:text-white flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full '>

            <div className='space-y-2.5 mt-4 mb-2.5 xl:ml:24'>
                <Sidebarlink text="Home" Icon={HomeIcon} active />
                <Sidebarlink text="Explore" Icon={HashtagIcon} active />
                <Sidebarlink text="Notifications" Icon={Bell} active />
                <Sidebarlink text="Messages" Icon={InboxIcon} active />
                <Sidebarlink text="Bookmarks" Icon={BookmarkIcon} active />
                <Sidebarlink text="Lists" Icon={ClipboardListIcon} active />
                <Sidebarlink text="Profile" Icon={UserIcon} active />
                <Sidebarlink text="More" Icon={DotsCircleHorizontalIcon} active />

            </div>
        </div>
    )
}

export default Sidebar