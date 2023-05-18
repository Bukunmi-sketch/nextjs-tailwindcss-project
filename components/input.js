import Image from "next/image";
import nurse from "@/assets/nurse.png";
import { useRef, useState } from "react";
import { XMarkIcon, PhotoIcon, ChartBarIcon, CalendarIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

//import "emoji-mart/css/emoji-mart.css";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function Input() {

    const [input, setInput] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [showEmojis, setShowEmojis] = useState(false);
    const [loading, setLoading] = useState(false);
    const filePickerRef = useRef(null);


    const addEmoji = (e) => {
        let sym = e.unified.split("_");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    }

    const sendPost = () => {
        if (loading) return;
        setLoading(true);

        /*  if(selectedFile){
              await
          }
  */
        setLoading(false);
        setInput("");
        setSelectedFile(null);
        setShowEmojis(false);
    }



    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }
    }


    return (
        <div
            className={`border-b border-gray-700 flex space-x-3 overflow-y-scroll ${ loading && "opacity-60" }`}
        >
            <Image
                src={nurse}
                alt="healthworker"
                className="rounded-full h-11 w-11 cursor-pointer shadow-xl"
            />
            <div className="w-full divide-y divide-gray-700">
                <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                    <textarea
                        className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                        placeholder="what's happening"
                        value={input}
                        rows="2"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>

                {selectedFile && (
                    <div className="relative">
                        <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#277c26]bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer " onClick={() => setSelectedFile(null)}>
                            <XMarkIcon className="text-white h-5" />
                        </div>

                        <img src={selectedFile} alt="" className="rounded-2xl max-h-80 object-contain" />
                    </div>
                )}

                {!loading && (

                    <div className="flex items-center justify-between scroll-pt-2.5">
                        <div className="flex items-center">
                            <div className="icon">
                                <PhotoIcon className="h-[22px] text-[#1d9bf0]" onClick={() => filePickerRef.current.click()} />
                                <input type="file" hidden onChange={addImageToPost} ref={filePickerRef} />
                            </div>

                            <div className="icon rotate-90">
                                <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
                            </div>

                            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                                <FaceSmileIcon className="h-[22px] text-[#1d9bf0]" />
                            </div>

                            <div className="icon">
                                <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
                            </div>

                            {showEmojis && (
                                <Picker data={data} onEmojiSelect={addEmoji}
                                    style={{ position: "absolute", marginTop: "465px", marginLeft: -40, maxWidth: "320px", borderRadius: "20px" }} theme="dark" />
                            )
                            }

                        </div>
                        <button className="bg-[#169bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50  disabled:cursor-pointer " disabled={!input.trim() && !selectedFile} onClick={sendPost}>Tweet</button>
                    </div>
                )}


            </div>
        </div>
    );
}

export default Input;
