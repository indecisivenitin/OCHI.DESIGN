import { useEffect, useRef } from "react";

const Pupil = () => {
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = [eye1Ref.current, eye2Ref.current];

      eyes.forEach((eye) => {
        const pupil = eye.querySelector(".eye-dot");
        const rect = eye.getBoundingClientRect();

        // Center of the eye
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // Distance from center
        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        // Angle and capped movement
        const angle = Math.atan2(dy, dx);
        const maxOffset = rect.width * 0.15; // 15% of eye width
        const offsetX = Math.cos(angle) * maxOffset;
        const offsetY = Math.sin(angle) * maxOffset;

        pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full bg-cover bg-center bg-[url(./src/assets/eyes.jpg)]'>
        <div className='relative w-[32vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[80%] flex gap-10'>
          <div ref={eye1Ref} className="eye1 w-[13vw] h-[13vw] rounded-full bg-white flex items-center justify-center relative">
            <div className="eye-in w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
              <div className="eye-dot w-6 h-6 rounded-full bg-white absolute"></div>
            </div>
          </div>

          <div ref={eye2Ref} className="eye1 w-[13vw] h-[13vw] rounded-full bg-white flex items-center justify-center relative">
            <div className="eye-in w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
              <div className="eye-dot w-6 h-6 rounded-full bg-white absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
