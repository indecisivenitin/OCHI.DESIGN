import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

import { motion } from 'framer-motion';
const Ready = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='  w-full h-screen pt-10 bg-[#cdea68]'>
            <div className='w-full  flex flex-col pt-30 items-center'>
                <h1 className='text-black text-9xl font-bold tracking-tighter'>READY</h1>
                <h1 className='text-black text-9xl font-bold tracking-tighter'>TO START</h1>
                <h1 className='text-black text-9xl font-bold tracking-tighter'>THE PROJECT ?</h1>
            </div>
            <div className='w-full flex flex-col pt-10 items-center gap-3'>
                <button className='group flex gap-4 items-center bg-black text-white py-5 px-8 rounded-full text-2xl'>START THE PROJECT <span className='flex items-center justify-center text-xs w-3 h-3 rounded-full bg-white group-hover:w-8 group-hover:h-8 group-hover:text-3xl group-hover:bg-white  group-hover:text-zinc-800 transition'><MdOutlineArrowOutward /></span>
                </button>
                <h4 className=' text-zinc-700 font-semibold text-2xl'>OR</h4>
                <button className=' group flex gap-4 items-center hover:bg-black hover:text-white bg-transparent border-[1px] border-zinc-800 text-zinc-700 py-5 px-8 rounded-full text-2xl '>HELLO@OCHI.DESIGN <span className='flex items-center justify-center text-xs w-3 h-3 rounded-full bg-zinc-700 group-hover:w-8 group-hover:h-8 group-hover:text-4xl group-hover:bg-white  group-hover:text-zinc-800 transition'><MdOutlineArrowOutward /></span>
                </button>
            </div>
        </div>
    )
}

export default Ready
