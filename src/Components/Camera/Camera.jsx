import React, { useRef, useEffect } from "react";
import "./index.css";
import useAnimationStore from "../../Store/AnimationState";
import { gsap } from "gsap";
export default function Camera() {
  const ref = useRef();
  const activeState = useAnimationStore((state) => state.activeState);
  useEffect(() => {
    if (activeState === 2) {
      gsap.to(ref.current, {
        duration: 1,
        opacity: 1,
        delay: 0.3,
        onStart: () => {
          ref.current.style.zIndex = 3;
        },
      });
    } else {
      gsap.to(ref.current, {
        opacity: 0,
      });
    }
  }, [activeState]);

  return (
    <div
      className='cam-container'
      ref={ref}
      style={{
        backgroundImage: `url(./N1_Assets/Camera/bg.png)`,
      }}
    >
      <div className='camera-header '>
        <div className='header-img-container'>
          <img src='./N1_Assets/Camera/Icons/Leica.svg' className='header-img' />
          <span className='icon-cam-heading'>Leica 50MP Quad Cameras</span>
        </div>
        <div className='icon-cam'>
          <img
            src='./N1_Assets/Camera/Icons/Sensor.svg'
            className='icon-cam-img'
          />
          {/* <span className="icon-cam-heading">50MP</span> */}
          <span className='icon-cam-text'>All-New 2.54cm(1) Sensor</span>
        </div>
        <div className='icon-cam'>
          <img
            src='./N1_Assets/Camera/Icons/Aperture.svg'
            className='icon-cam-img'
          />
          {/* <span className="icon-cam-heading">2MP</span> */}
          <span className='icon-cam-text'>f/1.63-4.0 Variable Aperture</span>
        </div>
        <div className='icon-cam'>
          <img
            src='./N1_Assets/Camera/Icons/Camera.svg'
            className='icon-cam-img'
          />
          {/* <span className="icon-cam-heading">2MP</span> */}
          <span className='icon-cam-text'>Leica Dual Telephoto Cameras</span>
        </div>
        <div className='icon-cam'>
          <img
            src='./N1_Assets/Camera/Icons/Zoom.svg'
            className='icon-cam-img'
          />
          {/* <span className="icon-cam-heading">2MP</span> */}
          <span className='icon-cam-text'>12-120mm | 120x Zoom</span>
        </div>
        {/* <div className='icon-cam'
           style={{
            transform: "translateY(-40px)"
          }}>
          <img
            src='/assets/icons_camera/03.svg'
            className='icon-cam-img'
            style={{
              // border : "2px solid #000",
              width: "80px",
              height: "80px",
             
            }}
          />
          <span className='icon-cam-heading'>8MP</span>
          <span className='icon-cam-text'>Ultra - wide</span>
        </div> */}
      </div>
    </div>
  );
}
