import React from 'react'
import { PiDotDuotone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";


const About = () => {
  return (
    <div className='w-full py-20 bg-[#CDEA68]'>

      <section className='w-full px-40 py-10 text-black '>
        <p className='text-5xl leading-20'>Ochi is a strategic presentation agency for forward-</p>
        <span className='text-5xl leading-20'>thinking businesses that need to <span className='text-5xl underline leading-20'>raise funds, sell</span></span>
        <p className='text-5xl underline leading-20'>prod­ucts, ex­plain com­plex ideas, <span className='text-5xl underline leading-20'>and</span> hire great peo­ple.</p>
      </section>
      <div className='w-full h-[1px] bg-gray-800 mt-10'></div>

      <section className='w-full px-40 py-10 text-black flex  gap-28'>
         <section className='w-[30%] px-15 py-5 flex flex-col gap-12 '>
          <h3 className='text-2xl font-medium underline underline-offset-6'>About us:</h3>
          <p className='text-[1vw] flex'> In Ukrainian, ochi - means eyes. It's not just a beautiful word, but our philosophy. Almost everything that needs to be communicated is better shown than explained.</p>
          <p className='text-[1vw] '>We believe a great presentation evokes interest and drives business results far better than any saying can. Hence, we founded ochi to help you persuade colleagues and clients by creating eye-opening presentations.</p>
          
        </section>
        <section className='w-[30%] px-15 py-5 flex flex-col gap-12'>
          <h3 className='text-2xl font-medium underline underline-offset-6'>What you can expect:</h3>
          <p className='text-[1vw]'>
            We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.
          </p>
          <p className='text-[1vw]'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
        </section>
        <section className='w-[30%] px-15 py-5 flex flex-col gap-2 '>
          <h3 className='text-2xl font-medium underline underline-offset-6'>Socials:</h3>
          <p className='text-[1vw] hover:underline mt-6'>Instagram</p>
          <p className='text-[1vw] hover:underline'>Behance</p>
          <p className='text-[1vw] hover:underline'>Facebook</p>
          <p className='text-[1vw] hover:underline'>Linkedin</p>
        </section>
      </section>
      <div className='w-full h-[1px] bg-gray-800 mt-10'></div>


      <section className='w-full px-30 py-10 text-black flex justify-between'>
        <div>
          <h1 className='text-6xl'>Our approach:</h1>
          <button className=' group border-[1px] border-black text-white bg-black rounded-full py-4 px-6 mt-8 flex gap-4 items-center hover:py-5'>READ MORE <CiLocationArrow1 className=' group-hover:text-2xl transition group-hover:bg-black group-hover:scale-130 group-hover:mb-0 mb-1 text-[8px] bg-white rounded-full '/></button> 
          </div>

          <div className='group'>
            <img className='rounded-xl w-2xl transition ' src="./src/assets/section.jpg" alt="" />
          </div>
      </section>
    </div>
  )
}

export default About
