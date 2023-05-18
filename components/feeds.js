import React from 'react'
import {SparklesIcon} from '@heroicons/react/24/outline'
import Input from './input'
import React, { useState, useEffect } from 'react';


function Feeds() {
    
  const [posts, setPosts] = useState([]);



  return (
    <div className='flex-grow border border-gray-700 max-w-2xl sm:ml-[72px]  xl:ml-[370px]'>
          <div className='text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700'>
            <h2 className='text-lg sm:text-xl font-bold'>Home</h2>
            <div className='hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto'>
              <SparklesIcon className='h-5 text-white'/>
            </div>
          </div>

          <Input/>
    </div>
  )
}

export default Feeds