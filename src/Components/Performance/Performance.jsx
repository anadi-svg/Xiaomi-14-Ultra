import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { MoveDown } from "lucide-react";

const PerformanceSection = ({ background, info, isScroll }) => {
  return (
    <div
      style={{ scrollSnapAlign: "start" }}
      className='h-screen w-full relative'
    >
      {info}

      <img src={background} alt='' className='h-full w-full object-cover' />
      {isScroll && (
        <div className='text-white absolute bottom-10 left-[50%] translate-x-[-50%] flex flex-col items-center gap-y-1.5 '>
          <span>Swipe</span>
          <MoveDown color='white' size={16} />
        </div>
      )}
    </div>
  );
};

export default function Performance() {
  const perfContRef = useRef();

  const charging = (
    <div className=' absolute top-20 text-white left-0 w-full flex items-center justify-center flex-col gap-5 '>
      <span className=' !text-2xl w-full  !mt-4 font-medium'>
        90W Xiaomi HyperCharge
      </span>
      <hr className='w-1/3 border border-[#15F5BA]' />
      <span className='font-normal !text-base'>80W Wireless TurboCharge</span>
    </div>
  );

  const snapdragon = (
    <div className=' absolute top-16 text-white left-0 w-full flex items-center justify-center flex-col gap-3 '>
      <span className=' !text-2xl w-full text-[#15F5BA] !mt-4 font-bold'>
        Snapdragon® 8 Gen 3
      </span>
      <span className=' font-[300] !text-lg'>
        Xiaomi Dual IceLoop Cooling System
      </span>
      <hr className='w-1/3 border border-[#15F5BA]' />
      <span className=' font-[300] text-lg'>UFS 4.0 + LPDDR5X</span>
    </div>
  );

  return (
    <div
      ref={perfContRef}
      style={{ scrollSnapType: "y mandatory" }}
      className='h-screen overflow-y-scroll w-full absolute top-0  bg-white z-[5] hide-scrollbar'
    >
      <PerformanceSection
        background={"./N1_Assets/Performance/Charging/bg.png"}
        info={charging}
        isScroll
      />

      <PerformanceSection
        background={"./N1_Assets/Performance/Snapdragon/bg.png"}
        info={snapdragon}
      />
    </div>
  );
}
