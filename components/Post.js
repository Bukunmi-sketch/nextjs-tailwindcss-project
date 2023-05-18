import React, { useState, useEffect } from 'react';
import { EllipsisHorizontalIcon, ChatBubbleBottomCenterTextIcon, ShareIcon, ChartBarIcon, TrashIcon, HeartIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
//import Moment from "react-moment"
//import { useRecoilState } from "recoil"
//import {modalState, postIdState } from "../atoms/modalAtom";


function Post({ id, post, postPage }) {


    // const  [isOpen , setIsOpen ]=useRecoilState(modalState);
    // const  [postid , setPosIid ]=useRecoilState(modalState);
    const [sessionid, useSession] = useState(0);
    const [postid, setPostId] = useState(0);
    const [comments, setaComments] = useState([]);
    const [likes, setalikes] = useState([]);
    const [liked, setaliked] = useState(false);
    const router = useRouter();

//     useEffect(
//         ()=>setaliked(
//             likes.findIndex((like) => like.id === session.user.id) !== -1
//         )
// [likes]
//     )

    const likepost =()=>{
        // if(liked)
        //   await delete postid from userid
        //  else{
        //     await like the post
        //  }
         console.log("likedpost");
    }


    return (
        <div className='text-white p-3 flex cursor-pointer border-b border-gray-700' onClick={() => router.push(`/${id}`)}>
            {!postPage && (
                <img src="" alt="" className='h-11 w-11 rounded-full mr-4 ' />
            )}

            <div className='flex flex-col space-y-2 w-full'>
                <div className={`flex ${!postPage && "jusfify-between"}`}>
                    {postPage && (
                        <img src="" alt="profile pic" className='h-11 w-11 rounded-full mr-4 ' />
                    )}

                    <div className='text-[#6e767d] '>
                        <div className='inline-block group'>
                            <h4 className={`font-bold text-15px sm:text-base text-[#d9d9d9] group-hover:underline ${!postPage && "inline-block"}`}>Olarinde Bukunmi</h4>
                            <span className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}>@bukunmi</span>
                        </div>
                        .{""}
                        <span className='hover:under
                 text-sm sm:text-[15px]'>
                            {/* <Moment fromNow>{}</Moment> */}
                        </span>
                        {!postPage && (<p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'> holy shit fire dfirodfoid fdogf </p>)}
                    </div>

                    <div className='icon group flex-shrink-0 ml-auto'>
                        <EllipsisHorizontalIcon className='text-[#6e767d] group-hover:text-[#1d9bf0] ' />
                    </div>
                </div>
                {postPage && (
                    <p className='text-[#d9d9d9] text-[15px] sm:text-base mt-0.5'> holy shit fire dfirodfoid fdogf </p>
                )}

                <img src="" alt="post image" className=' rounded-2xl max-h-[700px] object-cover mr-2 ' />

                {/* ICON BUTTON REACTION */}
                <div className={`text-[#6e767d] flex justify-between w-10/12 ${postPage && "mx-auto "}`}>
                    {/* COMMENT BUTTON */}
                    <div className='flex items-center  space-x-1 group' onClick={(e) => {
                        e.stopPropagation();
                        //  setPostId(id);
                        setIsOpen(true);
                    }}>

                        <div className='icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10 '>
                            <ChatBubbleBottomCenterTextIcon className='h-5 group-hover:text-[#1d9bf0]' />
                        </div>
                        {
                            comments.length > 0 && (
                                <span className='group-hover:text-[#1d9bf0] text-sm'> {comments.length}
                                </span>
                            )
                        }
                    </div>

                    {/* DELETE BUTTON */}
                    {sessionid == postid ? (
                        <div className='flex items-center  space-x-1 group' onClick={(e) => {
                            e.stopPropagation();
                            //delete()
                            router.push("/");
                        }}>
                            <div className='icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10 '>
                                <TrashIcon className='h-5 group-hover:text-red-600' />
                            </div>
                        </div>
                    ) : (
                        <div className='flex items-center  space-x-1 group'>
                            <div className='icon group-hover:bg-green-500/10 group-hover:bg-opacity-10 '>
                                <ShareIcon className='h-5 group-hover:text-green-500' />
                            </div>
                        </div>
                    )}
                    {/* HEART ICON */}

                    <div className='flex items-center  space-x-1 group' onClick={(e) => {
                        e.stopPropagation();
                        //likepost()
                    }}>
                        <div className='icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10 '>
                        {liked ? (
                            <HeartIcon className='h-5 group-hover:text-[#1d9bf0]' />
                            ) : (
                                <HeartIcon className='h-5 group-hover:text-[#1d9bf0]' />
                            )  }
                        </div>
                        {
                            likes.length > 0 && (
                                <span className={`group-hover:text-pink-600  text-sm ${liked && "text-pink-600"}`}> {likes.length}
                                </span>
                            )
                        }
                        </div>
                      
                        {/* SHARE ICON */}

                        <div className='icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10 '>
                            <ShareIcon className='h-5 group-hover:text-[#1d9bf0]' />
                        </div>

                        {/* CHART ICON */}
                        <div className='icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10 '>
                            <ChartBarIcon className='h-5 group-hover:text-[#1d9bf0]' />
                        </div>


                    </div>
                    {/* END OF BUTTON REACTION */}

                </div>
            </div>
            )
}

            export default Post