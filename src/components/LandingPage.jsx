import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from "framer-motion";

const LandingPage = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen bg-black pt-1'>
            <div className="textstructure mt-52 px-20">
                {["we create", "eye opening", "presentation"].map((item, index) => {
                    return <div className="masker ">
                        <div className='w-fit flex overflow-hidden'>
                            {index === 1 && (<motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className='w-[9vw] h-[5vw] bg-green-500 relative top-2 rounded-xl mr-2 origin-left bg-center bg-cover' style={{backgroundImage:`url('./src/assets/blockimage.jpg')`}}></motion.div>)}
                            <h1 className="font-['Founders Grotesk'] uppercase text-[7vw] leading-[6vw] -tracking-[11px] font-medium">{item}</h1>
                        </div>
                    </div>
                })}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-32'></div>
            <div className='flex justify-between py-8 px-20'>
                <p className='text-[1vw] font-light'>For public and private companies</p>
                <p className='text-[1vw] font-light'>From the first pitch to IPO</p>
                <span className='flex gap-6 items-center'>
                    <button className='border-[1px] py-2 px-4 rounded-full hover:bg-white hover:text-black'>START THE PROJECT</button>
                    <span className='w-10 h-10 border-[1px] rounded-full flex justify-center items-center hover:bg-white hover:text-black'>
                        <CiLocationArrow1 />
                    </span>

                </span>
            </div>
            <div className='absolute h-15 w-50 bg-red-500 top-58 -right-16 flex justify-between py-4 px-4 rotate-90'>
                <span className='text-2xl font-semibold rotate-270 py-[3px]'>W.</span>
                <span className='rotate-180'><p className='font-medium p-[2px] '>Site of the Day</p></span>
            </div>
          
        </div>
    )
}

export default LandingPage
