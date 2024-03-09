import React, { useRef, useEffect } from "react";
import "./index.css";
import { gsap } from "gsap";
import useAnimationStore from "../../Store/AnimationState";

export default function Display() {
  const ref = useRef();
  const activeState = useAnimationStore((state) => state.activeState);
  useEffect(() => {
    if (activeState === 3) {
      gsap.to(ref.current, {
        duration: 1,
        opacity: 1,
        delay: 0.4,
      });
      ref.current.style.zIndex = 6;
    } else {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => {
          ref.current.style.zIndex = 1;
        },
      });
    }
  }, [activeState]);

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `url(./N1_Assets/Display/Bg.png)`,
      }}
      className='display-container'
    >
      <div className='display-icon-header'>
        <div className='display-icon-div'>
          <div className='display-img-div'>
            <img
              src='./N1_Assets/Display/Amoledicon.svg'
              className='display-icon-img'
            />
          </div>
          <span className='display-icon-text-heading'>
            2K 120Hz LTPO AMOLED
          </span>
          <span className='display-icon-text'>
            Quad Curved Display with Dolby Vision®
          </span>
          <hr
            style={{
              width: "30%",
              border: "1px solid #15F5BA",
            }}
          />
          <span className='display-icon-text'>
            Xiaomi Ceramic Glass Protection
          </span>
        </div>
      </div>
    </div>
  );
}
