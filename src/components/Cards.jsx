import React from 'react'

const Cards = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1"  className='w-full pt-40 bg-zinc-200 flex gap-10 pb-30 px-20'>
            <div className=' relative w-[50%] h-[50vh] bg-[#004D43] rounded-xl '>
                <div className='absolute w-52 h-52 bg-center bg-no-repeat bg-[url("./src/assets/p5.png")] top-20 left-80'>
                </div>
                <button className=' absolute top-100 left-10 border-[1px] border-[#CDEA68] rounded-2xl px-3 py-1 text-[#CDEA68]'>©2019–2022</button>
            </div>
            <div className=' relative w-[25%] h-[50vh] bg-[#212121] rounded-xl '>
                <div className=' absolute w-48 h-48 bg-center bg-no-repeat bg-[url("./src/assets/p6.png")] top-25 left-25'>
                </div>
                <button className='absolute top-100 left-10 border-[1px] border-zinc-100 rounded-2xl px-3 py-1'>Rating 5.0 on Clutch</button>
            </div>
            <div className=' relative w-[25%] h-[50vh] bg-[#212121] rounded-xl '>
                <div className='absolute top-25 left-25 w-48 h-48 bg-center bg-no-repeat bg-[url("./src/assets/p7.png")]'>
                </div>
                <button className='absolute top-100 left-10 border-[1px] border-zinc-100 rounded-2xl px-3 py-1'>Business Bootcamp Alumni</button>
            </div>
        </div>
    )
}

export default Cards
