import React from 'react'
import Sidebarlink from './sidebarlink'
import { BeakerIcon, HomeIcon, HashtagIcon, BellIcon ,  InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon } from '@heroicons/react/24/outline'
//import {HomeIcon} from '@heroicons/react/24/solid'
//import { HashtagIcon , BellIcon, InboxIcon, BookmarkIcon, ClipboardListIcon, UserIcon, DotsCircleHorizontalIcon} from '@heroicons/react/24/outline';


function Sidebar() {
    return (
        <div className='hidden  border border-white border-solid sm:flex sm:text-white flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full '>

            <div className='space-y-2.5 mt-4 mb-2.5 xl:ml:24'>

            <Sidebarlink text="Home" Icon={HomeIcon} active={true} /> 
                <Sidebarlink text="Explore" Icon={HashtagIcon} />
                <Sidebarlink text="Notifications" Icon={BellIcon}  />
                <Sidebarlink text="Messages" Icon={InboxIcon}  />
                <Sidebarlink text="Bookmarks" Icon={BookmarkIcon}  />
                <Sidebarlink text="Profile" Icon={UserIcon}  />
                <Sidebarlink text="Lists" Icon={ClipboardIcon}  />
            </div>
        <button className='hidden xl:inline m-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8] text-center'>Tweet</button>
        </div>
    )
}

export default Sidebar;