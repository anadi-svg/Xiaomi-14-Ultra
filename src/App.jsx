import React, { useRef, Suspense, useState, useMemo } from "react";
import "./App.css";
// import LoaderComponent from "./Components/LoaderComponent";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PresentationControls,
  useProgress,
  Html,
} from "@react-three/drei";
import { Model as ModelBlue } from "./Components/N1WHITE";
import { TextureLoader } from "three";
import useAnimationStore from "./Store/AnimationState";
import Animation from "./Components/Animations";
import { MdCancel } from "react-icons/md";

import Gallery from "./Components/Gallery/Gallery";
import Display from "./Components/Display/Display";
import Camera from "./Components/Camera/Camera";
import Performance from "./Components/Performance/Performance";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className='loading-container'>
        <div className='loading-bar-container'>{progress.toFixed(0) + "%"}</div>
      </div>
    </Html>
  );
};

function BackgroundBox() {
  const meshRef = useRef();

  const texture = useMemo(
    () => new TextureLoader().load("./images/back.png"),
    []
  );

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as desired
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1000, 1000, 1000]} />
      <meshBasicMaterial side={2} map={texture} />
    </mesh>
  );
}

function CancelButton({ showImages, setShowImages }) {
  const setActiveState = useAnimationStore((state) => state.setActiveState);
  const activeState = useAnimationStore((state) => state.activeState);

  const handleClick = () => {
    setShowImages(false);
    setActiveState(0);
  };

  return (
    <MdCancel
      size={25}
      color={activeState === 2 ? "#000" : activeState === 3 ? "#fff" : "#fff"}
      className='cancel-button'
      onClick={handleClick}
      style={{
        zIndex: activeState === 0 ? -1 : 8,
      }}
    />
  );
}

function App() {
  const setActiveState = useAnimationStore((state) => state.setActiveState);
  const activeState = useAnimationStore((state) => state.activeState);
  const [showImages, setShowImages] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  // const perfContRef = useRef();
  const menuRef = useRef();

  return (
    <>
      {!modelLoaded && (
        <div className='absolute -top-0 left-0 max-w-screen w-screen overflow-hidden h-screen flex justify-center items-center'>
          <img
            src={"./N1_Assets/Loaderbg.png"}
            style={{
              objectFit: "contain",
              height: "100vh",
            }}
          />
        </div>
      )}
      <div className='main-canvas-container relative  '>
        <div className='canvas-container-2 h-screen w-[440px] relative'>
          <Canvas
            style={{
              zIndex: 0,
              background:
                activeState !== 0
                  ? activeState === 2
                    ? "#fff"
                    : activeState === 3 // Check if activeState is equal to 3
                    ? "#fff" // If true, set color to "#fff"
                    : "#000"
                  : "transparent",
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Environment
                //attach file

                files={"./potsdamer_platz_1k.hdr"}
              />
              {activeState !== 3 && activeState !== 2 && <BackgroundBox />}
              <ModelBlue setModelLoaded={setModelLoaded} />
            </Suspense>

            <Animation menuRef={menuRef} />
          </Canvas>
        </div>

        <CancelButton showImages={showImages} setShowImages={setShowImages} />
        {/* Performance container */}
        {activeState === 4 && <Performance />}

        {/*For camera container */}
        {activeState === 2 && <Camera />}

        {/*For display container */}
        {activeState === 3 && <Display />}

        {/*For menu container */}
        {modelLoaded && activeState !== 2 && activeState !== 4 && (
          <div ref={menuRef} className='menu-container'>
            {
              <>
                <div
                  className='icon-container'
                  onClick={() => setActiveState(1)}
                >
                  {/* <img src='./images/color.jpg' className='color-img-icon' /> */}

                  <div className='color-img-icon'></div>
                  <div className='color-white-bg'></div>
                  <div className='color-icon-text'>Color</div>
                </div>
                <div
                  className='icon-container'
                  onClick={() => setActiveState(2)}
                >
                  <img src='./images/home_3.png' className='camera-img-icon' />
                  <div className='camera-icon-text'>Camera</div>
                </div>
                <div
                  className='icon-container'
                  onClick={() => setActiveState(3)}
                >
                  <img src='./images/home_2.png' className='ecran-img-icon' />
                  <div className='ecran-icon-text'>Display</div>
                </div>
                <div
                  className='icon-container'
                  onClick={() => setActiveState(4)}
                >
                  <img
                    src='./images/home_4.png'
                    className='performance-img-icon'
                  />
                  <div className='performance-icon-text'>Performance</div>
                </div>
              </>
            }
          </div>
        )}

        {/*For gallery container */}
        {activeState === 2 && showImages && <Gallery />}
      </div>
    </>
  );
}

export default App;
