import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Power4 } from "gsap/all" 
import { GoDotFill } from "react-icons/go";
import { FaLocationArrow } from "react-icons/fa6";



const Projects = () => {

    const[isHovering, setHovering]= useState(false)
    return (
        <div id="projects" className="bg-pink-100">
            <div className='w-full min-h-screen bg-pink-100 pt-20 '>
                <div className='w-full border-b-[1px] px-20 border-b-blue-950 pb-10'>
                    <h1 className='text-6xl font-light text-blue-950 '>Featured Projects</h1>
                </div>
                <div className="cards px-20 py-10 w-full h-[80vh] flex  bg-pink-100">
                    <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className=" relative cardL w-[50%] min-h-[80vh] flex flex-col gap-8">
                        <h1 className='absolute overflow-hidden flex z-50 text-amber-300 left-full -translate-x-[60%] top-1/2 -translate-y-30 text-8xl font-bold'>{"SALIENCE LABS".split('').map((item, index) => <motion.span
                         initial={{y:"100%"}}
                         animate={isHovering ? {y:"0"} : {y:"100%"}}
                         transition={{ease: Power4.easeIn, delay: index*.1}}
                         className='inline-block'>{item}</motion.span>)}</h1>
                        <span className='flex gap-2 items-center text-blue-950'> <GoDotFill /><span className='text-2xl'>SALIENCE LABS</span>
                        </span>
                        <div className="box w-[90%] ">
                            <div className='w-full rounded-2xl overflow-hidden hover:scale-105'>
                                <img className='w-full' src="./src/assets/p1.png" alt="" />
                            </div>
                        </div>
                        <div className="buttons w-full flex gap-3 ">
                            <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>BRAND IDENTITY</button>
                            <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>PITCH DECK</button>
                        </div>
                    </div>
                    <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className="  relative cardR w-[50%] min-h-[60vh] flex flex-col gap-8">
                        <h1 className=' flex overflow-hidden absolute z-50 text-amber-300 right-full translate-x-[40%] top-1/2 translate-y-5 text-7xl font-bold'>{"CARDBOARD SPACESHIP".split('').map((item, index) => <motion.span
                        initial={{y:"100%"}}
                         animate={isHovering ? {y:"0"} : {y:"100%"}}
                         transition={{ease: Power4.easeIn, delay: index*.1}}
                        >{item}</motion.span>)}</h1>
                        <span className='flex gap-2 items-center text-blue-950'><GoDotFill /> <span className='text-2xl'>CARDBOARD SPACESHIP</span>
                        </span>
                        <div className="box w-[90%]">
                            <div className='w-full rounded-2xl overflow-hidden hover:scale-105'>
                                <img className='w-full' src="./src/assets/p2.png" alt="" />
                            </div>
                        </div>
                        <div className="buttons w-full flex gap-3 ">
                            <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>BRAND TEMPLATE</button>
                            <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>SALES DECK</button>
                            <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>SOCIAL MEDIA TEMPLATES</button>
                        </div>
                    </div>
                </div>
                <div className="cards px-20 py-30 w-full h-[100vh] flex  bg-pink-100">
                    <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className=" relative  cardL w-[50%] min-h-[80vh] flex flex-col gap-8 bg-pink-100">
                        <h1 className=' flex overflow-hidden  absolute z-50 text-amber-300 right-full translate-x-280 top-1/2 -translate-y-50 text-7xl font-bold'>{"AH2 & MATT HORN".split('').map((item, index) => <motion.span
                        initial={{y:"100%"}}
                         animate={isHovering ? {y:"0"} : {y:"100%"}}
                         transition={{ease: Power4.easeIn, delay: index*.1}}
                        >{item}</motion.span>)}</h1>
                        <span className='flex gap-2 items-center text-blue-950'> <GoDotFill /><span className='text-2xl'>
                            AH2 & Matt Horn</span>
                        </span>
                        <div className="box w-[90%] bg-pink-100">
                            <div className='w-full rounded-2xl overflow-hidden hover:scale-105'>
                                <img className='w-full' src="./src/assets/p3.png" alt="" />
                            </div>
                            <div className="buttons w-full flex gap-3 pt-8 bg-pink-100">
                                <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>PITCH DECK</button>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className=" relative cardR w-[50%] min-h-[80vh] flex flex-col gap-8 bg-pink-100">
                        <h1 className=' flex overflow-hidden absolute z-50  text-amber-300 right-full translate-x-7 top-1/2 -translate-y-30 text-6xl font-bold'>{"FYDE".split('').map((item, index) => <motion.span
                        initial={{y:"100%"}}
                         animate={isHovering ? {y:"0"} : {y:"100%"}}
                         transition={{ease: Power4.easeIn, delay: index*.1}}
                        >{item}</motion.span>)}</h1>
                        <span className='flex gap-2 items-center text-blue-950'><GoDotFill /> <span className='text-2xl'>Fyde</span>
                        </span>
                        <div className="box w-[90%] bg-pink-100">
                            <div className='w-full rounded-2xl overflow-hidden hover:scale-105'>
                                <img className='w-full' src="./src/assets/p4.png" alt="" />
                            </div>
                            <div className="buttons w-full flex gap-3 pt-8 bg-pink-100">
                                <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>AUDIT</button>
                                <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>COPYWRITING</button>
                                <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>SALES DECK</button>
                                <button className='w-auto py-2 px-3 border-[2px] rounded-2xl border-blue-950 text-blue-950 text-xl font-medium hover:bg-black hover:text-white'>SLIDE DESIGN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
