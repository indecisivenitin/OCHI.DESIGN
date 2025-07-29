import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full py-20  bg-[#004D43] rounded-3xl'>
        <div className='py-10 px-10 text border-t-[0.5px] border-b-[0.5px] border-zinc-500 flex whitespace-nowrap overflow-hidden'>
            <motion.h1
            initial={{x: "0"}}
            animate={{x: '-100%'}}
            transition={{repeat: Infinity, ease: "linear", duration:7}}
            className='uppercase text-[12vw] leading-none font-["Founders Grotesk"] font-medium tracking-tighter pr-4'>We are ochi.</motion.h1>
            <motion.h1
            initial={{x: "0"}}
            animate={{x: '-100%'}}
            transition={{repeat: Infinity, ease: "linear", duration:7}}
            className='uppercase text-[12vw] leading-none font-["Founders Grotesk"] font-medium tracking-tighter'>We are ochi.</motion.h1>
            <motion.h1
            initial={{x: "0"}}
            animate={{x: '-100%'}}
            transition={{repeat: Infinity, ease: "linear", duration:7}}
            className='uppercase text-[12vw] leading-none font-["Founders Grotesk"] font-medium tracking-tighter'>We are ochi.</motion.h1>
            
        </div>
    </div>
  )
}

export default Marquee
