import Image from "next/image";
import nurse from "@/assets/nurse.png";
import { useRef, useState } from "react";
import { XMarkIcon, PhotoIcon, ChartBarIcon, CalendarIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

import "emoji-mart/css/emoji-mart.css";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function Input() {

    const [input, setInput] = useState("");
    const [selectedfile, setSelectedFile] = useState("");
    const [showEmojis, setShowEmojis] = useState(false);
    const filePickerRef = useRef(null);

    const addImageToPost=()=>{

    }


    return (
        <div
            className={`border-b border-gray-700 flex space-x-3 overflow-y-scroll`}
        >
            <Image
                src={nurse}
                alt="healthworker"
                className="rounded-full h-11 w-11 cursor-pointer shadow-xl"
            />
            <div className="w-full divide-y divide-gray-700">
                <div>
                    <textarea
                        className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                        placeholder="what's happening"
                        value={input}
                        rows="2"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>

                {selectedfile && (
                    <div className="relative">
                        <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#277c26]bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer " onClick={() =>setSelectedFile(null)}>
                            <XMarkIcon className="text-white h-5" />
                        </div>

                        <Image src={selectedfile} alt="" className="rounded-2xl max-h-80 object-contain" />
                    </div>
                )}

                <div className="flex items-center justify-between scroll-pt-2.5">
                    <div className="flex items-center">
                        <div className="icon">
                            <PhotoIcon className="h-[22px] text-[#1d9bf0]" onClick={()=>filePickerRef.current.click()} />
                            <input type="file" hidden onChange={addImageToPost}  ref={filePickerRef} />
                        </div>

                        <div className="icon rotate-90">
                            <ChartBarIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>

                        <div className="icon" onClick={() =>setShowEmojis(!showEmojis)}>
                            <FaceSmileIcon className="h-[22px] text-[#1d9bf0]" />
                        </div>

                        <div className="icon">
                            <CalendarIcon className="h-[22px] text-[#1d9bf0]"/>
                        </div>

                        {/* {} */}

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Input;
