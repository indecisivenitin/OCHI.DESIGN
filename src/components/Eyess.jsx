import { useEffect } from "react";


const Eyess = () => {
  useEffect(() => {
    const pupils = document.querySelectorAll(".eye-dot");

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;


      const xPercent = (mouseX / window.innerWidth - 0.5) * 2;
      const yPercent = (mouseY / window.innerHeight - 0.5) * 2;

      const maxMove = 30;

      const moveX = xPercent * maxMove * 2.2;
      const moveY = yPercent * maxMove * 2.2;

      pupils.forEach((dot) => {
        dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);




  useEffect(() => {
    const eyes = document.querySelectorAll(".eye-in");

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;


      const xPercent = (mouseX / window.innerWidth - 0.5) * 2;
      const yPercent = (mouseY / window.innerHeight - 0.5) * 2;

      const maxMove = 20;

      const moveX = xPercent * maxMove;
      const moveY = yPercent * maxMove;

      eyes.forEach((dot) => {
        dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
   
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-speed="-.6" className='relative w-full h-full bg-cover bg-center bg-[url(./src/assets/eyes.jpg)]' id="eyeDiv">
        <div className='relative w-[32vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[80%] flex gap-10'>

          <div className="eye1 w-[13vw] h-[13vw] rounded-full bg-white flex items-center justify-center relative">
            <div className="eye-in w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
              <div className="eye-dot w-6 h-6 rounded-full bg-white absolute"></div>
            </div>
          </div>

          <div className="eye1 w-[13vw] h-[13vw] rounded-full bg-white flex items-center justify-center relative">
            <div className="eye-in w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
              <div className="eye-dot w-6 h-6 rounded-full bg-white absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Eyess

