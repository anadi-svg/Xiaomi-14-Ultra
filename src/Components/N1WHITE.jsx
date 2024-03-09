import React, { useRef, useEffect, useState } from "react";
import { Html, PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { gsap } from "gsap";
import * as THREE from "three";
import useAnimationStore from "../Store/AnimationState";
const colorArray = [
  {
    name: "Black",
    hex: "#191a1c",
    imageUrl: "./images/color_2.png",
  },
  {
    name: "White",
    hex: "#E0DDE6",
    imageUrl: "./images/color_3.png",
  },
];

export function Model(props) {
  const { nodes, materials } = useGLTF("./Models/n1-white.glb");

  const activeState = useAnimationStore((state) => state.activeState);

  const [color, setColor] = useState("#191a1c");
  const groupRef = useRef();

  useEffect(() => {
    props.setModelLoaded(true);
    // Animation timeline using gsap
    const timeline = gsap.timeline();

    // Initial spinning animation with movement
    timeline.to(groupRef.current.position, {
      x: 0,
      z: 0.4,
      duration: -10,
      ease: "power1.inOut",
      onUpdate: () => {
        groupRef.current.rotation.y += 0.1;
      },
    });

    timeline.to({}, { duration: 1 });
  }, []);

  useEffect(() => {
    if (activeState === 3) {
      gsap.to(groupRef.current.position, {
        x: 0.1,
        y: -0.5,
        z: -8.6,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: 0,
            y: 2.6,
            z: 0,
            duration: 1,
          });
        },
      });
    } else if (activeState === 2) {
      gsap.to(groupRef.current.position, {
        x: 1.2,
        y: 0.2,
        z: -8.6,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: window.innerWidth < 440 ? -0.4 : 0,
            y: -3.8,
            z: 0,
            duration: 1,
          });
        },
      });
    } else if (activeState === 1) {
      gsap.to(groupRef.current.rotation, {
        y: Math.PI,
        x: 0,
        z: 0,

        duration: 1,
      });
    } else if (activeState === 0) {
      gsap.to(groupRef.current.position, {
        x: window.innerWidth < 440 ? -0.3 : 0,
        y: 0.4,
        z: -10,
        duration: 1,
        onStart: () => {
          gsap.to(groupRef.current.rotation, {
            x: window.innerWidth < 440 ? -0.4 : 0,
            y: Math.PI,
            z: 0,
            duration: 1,
          });
        },
      });
    }
  }, [activeState]);

  return (
    <group>
      {activeState === 1 && (
        <Html position={[window.innerWidth < 440 ? -0.3 : 0, 0, -9]}>
          <div className='color-container'>
            <span
              className='color-header'
              style={{
                top: window.innerWidth < 440 ? "77%" : "84%",
              }}
            >
              {colorArray.filter((item) => item.hex === color)[0].name}
            </span>

            {/* <img
              src="./images/color_1.png"
              onClick={() => setColor("#D8E8D3")}
              className={`color-div ${
                color === "#D8E8D3" && "color-div-selected"
              } `}
            /> */}
            <img
              src='./images/color_2.png'
              onClick={() => setColor("#191a1c")}
              className={`color-div ${
                color === "#191a1c" && "color-div-selected"
              } `}
            />
            <img
              src='./images/color_3.png'
              onClick={() => setColor("#E0DDE6")}
              className={`color-div ${
                color === "#E0DDE6" && "color-div-selected"
              } `}
            />
          </div>
        </Html>
      )}
      {groupRef.current && (activeState === 0 || activeState === 1) && (
        <CustomOrbitControl object={groupRef} />
      )}
      <group {...props} dispose={null} scale={0.025} ref={groupRef}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Body2002_face.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body2002_face001.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body2002_face002.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face001.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face002.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face003.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face004.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face005.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face006.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face007.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face008.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face009.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face010.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body4002_face011.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body8_face.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body8_face001.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
          <mesh
            geometry={nodes.Body8_face002.geometry}
            material={materials["grainy black.001"]}
            position={[0, 1.14, -18.2]}
            rotation={[Math.PI, 0, 0]}
            scale={10}
          />
        </group>
        <mesh
          geometry={nodes.Body1.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1001.geometry}
          material={materials["F_dd843d009aa446c181201cb653547adb.002"]}
          position={[9.89, 6.82, -14.23]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1002.geometry}
          material={materials["F_2e0882c4409c4568aa8e0b58095e0581.002"]}
          position={[9.89, 6.82, -14.23]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1003.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[9.89, 6.82, -14.23]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1004.geometry}
          material={materials["F_1593330f51f34cdfbf460191f24f498e.002"]}
          position={[9.89, 6.82, -14.23]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1005.geometry}
          material={materials["F_e306ec5c969d4758b0d443c096279153.002"]}
          position={[9.89, 6.82, -14.23]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1006.geometry}
          material={materials["F_93acb71faa844a009a567363bc44dbdd.002"]}
          position={[9.89, 6.82, -14.23]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1007.geometry}
          material={materials["F_4131e5cbdab84938afea933f3570b07b.002"]}
          position={[9.89, 6.82, -14.23]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1008.geometry}
          material={materials["F_4db3756081384192afbd82560cebedd8.002"]}
          position={[-8.9, 6.91, -15]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1009.geometry}
          material={materials["F_ab510d3dbf844b148a0319458aa1f4e4.002"]}
          position={[-8.9, 6.91, -15]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1010.geometry}
          material={materials["grainy black.001"]}
          position={[-8.9, 6.91, -15]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1011.geometry}
          material={materials["grainy black.001"]}
          position={[-13.55, 6.91, -15.55]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1012.geometry}
          material={materials["F_ab510d3dbf844b148a0319458aa1f4e4.002"]}
          position={[2, 6.91, -15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1013.geometry}
          material={materials["Leather026.002"]}
          position={[2, 6.91, -15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1014.geometry}
          material={materials["F_ab510d3dbf844b148a0319458aa1f4e4.002"]}
          position={[-2, 6.91, -15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1015.geometry}
          material={materials["Leather026.002"]}
          position={[-2, 6.91, -15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1016.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1018.geometry}
          material={materials["F_4db3756081384192afbd82560cebedd8.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1019.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1020.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1021.geometry}
          material={materials["F_4a4b236f73a64b7b9019ecae4c6a02a2.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1022.geometry}
          material={materials["F_bb518162a6a94bf486bffb79f04f3761.002"]}
          position={[-0.5, -20.78, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1023.geometry}
          material={materials["F_a33588e9abc042a3970e5f98a3c92aa6.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1024.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1025.geometry}
          material={materials["F_a33588e9abc042a3970e5f98a3c92aa6.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1026.geometry}
          material={materials["F_5739c6d1d68c415682317c027f33dae7.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1027.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1028.geometry}
          material={materials["F_6b3939f275b94436909391622ef22c1d.002"]}
          position={[-8.9, 6.91, -15]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1029.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1030.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1031.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1032.geometry}
          material={materials["F_ff2f782148b941c5b323000211fbf687.002"]}
          position={[8.51, 18, -11.6]}
          rotation={[0, 0, Math.PI / 2]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1033.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1034.geometry}
          material={materials["F_bc1e2389ae414a7cb3cf59a77a5ba950.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1035.geometry}
          material={materials["F_3a7cfd6818ae46cc80d4ce9966ac360d.002"]}
          position={[3.24, -21.6, -3.94]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1036.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1037.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1038.geometry}
          material={materials["F_8b133efe446a40d581bafbdd26dc9422.002"]}
          position={[-0.2, -18.2, -0.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1039.geometry}
          material={materials["F_a33588e9abc042a3970e5f98a3c92aa6.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1040.geometry}
          material={materials["F_8b133efe446a40d581bafbdd26dc9422.002"]}
          position={[-0.2, -18.2, -0.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1041.geometry}
          material={materials["F_903491291f6f4331a5c5b420701e0aa4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1042.geometry}
          material={materials["F_8b133efe446a40d581bafbdd26dc9422.002"]}
          position={[-0.2, -18.2, -0.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1043.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1044.geometry}
          material={materials["F_8b133efe446a40d581bafbdd26dc9422.002"]}
          position={[-0.2, -18.2, -0.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1045.geometry}
          material={materials["F_6f4d0671828a4156b9556208d5461c5a.002"]}
          position={[2, 6.91, -15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1046.geometry}
          material={materials["F_8b133efe446a40d581bafbdd26dc9422.002"]}
          position={[-0.2, -18.2, -0.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1047.geometry}
          material={materials["F_4ae5bc6c983441eab15ac922fd34b335.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1048.geometry}
          material={materials["F_19653b3c216744f0a3bfd44859e3c6bf.002"]}
          position={[-0.2, -18.2, -0.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1049.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1050.geometry}
          material={materials["Leather026.002"]}
          position={[-0.2, -18.2, -0.54]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1051.geometry}
          material={materials["F_c541c8a7e8b74d35bf00bc239bd4abd4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1052.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[-11.4, 37.7, -3.63]}
          rotation={[0, 0, -Math.PI]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1053.geometry}
          material={materials["F_a33588e9abc042a3970e5f98a3c92aa6.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1054.geometry}
          material={materials["F_04ec0aabbe924c9b80912652054e2d91.002"]}
          position={[9.89, 6.82, -14.23]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1055.geometry}
          material={materials["F_c541c8a7e8b74d35bf00bc239bd4abd4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1056.geometry}
          material={materials["F_5739c6d1d68c415682317c027f33dae7.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1057.geometry}
          material={materials["F_bb518162a6a94bf486bffb79f04f3761.002"]}
          position={[-0.5, -20.78, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1058.geometry}
          material={materials["F_15793d1cf5754e5b9cb4a96335234b84.002"]}
          position={[-13.55, 6.91, -15.55]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1059.geometry}
          material={materials["F_5aa977c90ede40d6a29ed2f846f69de3.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1060.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1061.geometry}
          material={materials["F_b3c380dcfe7941d4a8c4094689680ea7.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1062.geometry}
          material={materials["F_6f4d0671828a4156b9556208d5461c5a.002"]}
          position={[-2, 6.91, -15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1063.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1064.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1065.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1066.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1067.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1068.geometry}
          material={materials["F_b3c380dcfe7941d4a8c4094689680ea7.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1069.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1071.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1072.geometry}
          material={materials["F_903491291f6f4331a5c5b420701e0aa4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1073.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1074.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1075.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1076.geometry}
          material={materials["F_903491291f6f4331a5c5b420701e0aa4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1077.geometry}
          material={materials["F_bc1e2389ae414a7cb3cf59a77a5ba950.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1078.geometry}
          material={materials["F_903491291f6f4331a5c5b420701e0aa4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1079.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1080.geometry}
          material={materials["F_903491291f6f4331a5c5b420701e0aa4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1081.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1082.geometry}
          material={materials["F_84c5300f0e6d426e9245001e7d2587e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1083.geometry}
          material={materials["F_84c5300f0e6d426e9245001e7d2587e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1084.geometry}
          material={materials["F_bc1e2389ae414a7cb3cf59a77a5ba950.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1085.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1086.geometry}
          material={materials["F_da10f1bf128045adbef826ab1942a750.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1087.geometry}
          material={materials["F_903491291f6f4331a5c5b420701e0aa4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1088.geometry}
          material={materials["F_b3c380dcfe7941d4a8c4094689680ea7.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1089.geometry}
          material={materials["F_4a4b236f73a64b7b9019ecae4c6a02a2.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1090.geometry}
          material={materials["F_d49f7dfbf1b5495c912ec9e5b247d1bd.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1091.geometry}
          material={materials["F_2e0882c4409c4568aa8e0b58095e0581.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1092.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1093.geometry}
          material={materials["F_d33995dcaf354f508f0a5fc7dbda8fbe.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1094.geometry}
          material={materials["F_da934a29ca7147e995aa2e446b9bdc1d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1095.geometry}
          material={materials["F_9f2fa2d7f6354282952042a740df28d0.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1096.geometry}
          material={materials["F_354d760c89e44845afdaa467a56573ba.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1097.geometry}
          material={materials["F_ee49e9993bef477799a2f7f33bde485d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1098.geometry}
          material={materials["F_e581cf38d5d346288e1035e37777c8e9.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1099.geometry}
          material={materials["F_f7557c1bf863493488bf00e0656f0336.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1100.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1101.geometry}
          material={materials["F_e8eb90e3b79b46fc9fcc40d4a1910c69.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1102.geometry}
          material={materials["F_f4fb85da0ae74f639c86cd0684ceaf41.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1103.geometry}
          material={materials["F_057854ebc1cc4678a4e43ac3d89757ee.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body1104.geometry}
          material={materials["F_24d9d793cd41407ca663cb1590fb765e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body10.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body10001.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body10002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body100.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body101.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body102.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body103.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body104.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body105.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body106.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body107.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body108.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body109.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body11.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          name='back'
          material-color={activeState === 1 ? color : "#dfebf7"}
          material-roughness={0.8}
          castShadow
          receiveShadow
          geometry={nodes.Body11001.geometry}
          material={materials["new black leather"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body11002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body110.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body111.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body112.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body113.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body114.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body115.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body116.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body117.geometry}
          material={materials["F_4accb735ad334169b7f9ff29cb1e58e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body118.geometry}
          material={materials["F_4accb735ad334169b7f9ff29cb1e58e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body119.geometry}
          material={materials["F_4accb735ad334169b7f9ff29cb1e58e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body12.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body12001.geometry}
          material={materials["Leather026.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body12002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body120.geometry}
          material={materials["F_4accb735ad334169b7f9ff29cb1e58e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body121.geometry}
          material={materials["F_4accb735ad334169b7f9ff29cb1e58e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body122.geometry}
          material={materials["F_4accb735ad334169b7f9ff29cb1e58e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body13.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body13001.geometry}
          material={materials["F_4a4b236f73a64b7b9019ecae4c6a02a2.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body13002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body13003.geometry}
          material={materials["Leather026.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body14.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          material-color={activeState === 1 ? color : "#dfebf7"}
          geometry={nodes.Body14001.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body14002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body15.geometry}
          material={materials["shiney white gold.003"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body15001.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body15002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body16.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body16001.geometry}
          material={materials["F_b3c380dcfe7941d4a8c4094689680ea7.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body16002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body16003.geometry}
          material={materials["shiney gold.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body16004.geometry}
          material={materials["F_396cbb80ac9d48db8f367324c8b1b97e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body16005.geometry}
          material={materials["F_ab510d3dbf844b148a0319458aa1f4e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body16006.geometry}
          material={materials["Leather026.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body17.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body17001.geometry}
          material={materials["F_3b7b22e007014ab18dc641a643e55d4b.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body17002.geometry}
          material={materials["F_4db3756081384192afbd82560cebedd8.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body17003.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body17004.geometry}
          material={materials["F_2ce13b174b1e4ba1997377d3a204b8e8.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body18.geometry}
          material={materials["F_3096069787564a3393fe58b835f9cf45.002"]}
          position={[0, -18.2, -1.39]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body18001.geometry}
          material={materials["F_73e4ac9271ff4646907efb84b16f0f9a.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body18002.geometry}
          material={materials["F_3096069787564a3393fe58b835f9cf45.003"]}
          position={[0, -18.2, -0.97]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body19.geometry}
          material={materials["Leather026.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body19001.geometry}
          material={materials["F_ab510d3dbf844b148a0319458aa1f4e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2001.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2002.geometry}
          material={materials["F_43e82e305369483880b3c960f2114f46.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2003.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2004.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2005.geometry}
          material={materials["F_84c5300f0e6d426e9245001e7d2587e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2006.geometry}
          material={materials["F_84c5300f0e6d426e9245001e7d2587e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2007.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2008.geometry}
          material={materials["grainy black.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2009.geometry}
          material={materials["grainy black.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2010.geometry}
          material={materials["grainy black.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body2011.geometry}
          material={materials["grainy black.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body20.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body20001.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body21.geometry}
          material={materials["F_6f4d0671828a4156b9556208d5461c5a.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body21001.geometry}
          material={materials["F_ae92d7dfcd6c4097b07e910c758965e0.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body22.geometry}
          material={materials["F_8df6a06457d54e98b6b944745e49e669.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body22001.geometry}
          material={materials["F_a0694e1a3e6443269fd92daef82d7f14.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body23.geometry}
          material={materials["F_bc1e2389ae414a7cb3cf59a77a5ba950.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body23001.geometry}
          material={materials["F_422afbf5bebd4e6b9e99584f548b04a3.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body23002.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body23003.geometry}
          material={materials["F_ff2f782148b941c5b323000211fbf687.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body23004.geometry}
          material={materials["F_a99d4f7c990b4e4eb817f3f9a99778af.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body23005.geometry}
          material={materials["F_8df6a06457d54e98b6b944745e49e669.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body24.geometry}
          material={materials["F_8df6a06457d54e98b6b944745e49e669.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body24001.geometry}
          material={materials["F_959211814be34aeb9626e266172861fc.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body25.geometry}
          material={materials["F_8df6a06457d54e98b6b944745e49e669.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body25001.geometry}
          material={materials["F_4a4b236f73a64b7b9019ecae4c6a02a2.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26.geometry}
          material={materials["F_ea729722b3a64ad8873b5306f817f7c4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26001.geometry}
          material={materials["F_15ea9a656a39436e9275f734a291a0bd.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26002.geometry}
          material={materials["F_ccdcd15197464c218a8ef5ddca0701f4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26003.geometry}
          material={materials["F_2cbef3024a604333953e003c1741518a.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26004.geometry}
          material={materials["F_2cc7ab1710f84b7681e4e6afe5c96064.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26005.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26006.geometry}
          material={materials["F_379ff0f2c027411a93c1a106b6640ca9.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26007.geometry}
          material={materials["F_615b69276e384cc3b4d5f27c3e1fc86a.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body26008.geometry}
          material={materials["F_c908d91b442e42f384ae6d213dde0ece.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body27.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body27001.geometry}
          material={materials["F_bc1e2389ae414a7cb3cf59a77a5ba950.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body27002.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body28.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body29.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body3.geometry}
          material={materials["F_84c5300f0e6d426e9245001e7d2587e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body3001.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body3002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body3003.geometry}
          material={materials["F_73e4ac9271ff4646907efb84b16f0f9a.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body30.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body31.geometry}
          material={materials["F_4a2e4ac466a044bf928b1065db3c93be.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body32.geometry}
          material={materials["F_070df1233c864bff977945844e8c58f7.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body33.geometry}
          material={materials["F_084c1c7745214bf9885ddba4fd89ad11.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body34.geometry}
          material={materials["F_084c1c7745214bf9885ddba4fd89ad11.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body35.geometry}
          material={materials["F_084c1c7745214bf9885ddba4fd89ad11.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body36.geometry}
          material={materials["F_084c1c7745214bf9885ddba4fd89ad11.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body37.geometry}
          material={materials["F_42b0073352a94494846b2e24ae402d37.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body38.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body38001.geometry}
          material={materials["F_96af8c3d2f444559a47b3e23d5160c73.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body38002.geometry}
          material={materials["F_8df6a06457d54e98b6b944745e49e669.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body39.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4.geometry}
          material={materials["F_84c5300f0e6d426e9245001e7d2587e4.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4001.geometry}
          material={materials["F_43e82e305369483880b3c960f2114f46.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4002.geometry}
          material={materials["F_070df1233c864bff977945844e8c58f7.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4003.geometry}
          material={materials["F_6f246bf3d543467abcb1ad1011b4de4f.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4004.geometry}
          material={materials["F_74eec4e9f6cf4c56b64fa21faec954a6.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4005.geometry}
          material={materials["F_ae92d7dfcd6c4097b07e910c758965e0.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4006.geometry}
          material={materials["F_cf7d372ed0f742c598ed3eb2d585aef3.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4007.geometry}
          material={materials["F_c7d62c054c5c400a8f77b82eeddbc409.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4008.geometry}
          material={materials["F_396cbb80ac9d48db8f367324c8b1b97e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4009.geometry}
          material={materials["F_cc3acb07971d491eae07baa77f35c888.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4010.geometry}
          material={materials["F_8df6a06457d54e98b6b944745e49e669.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4011.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4012.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4013.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4014.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4015.geometry}
          material={materials["grainy black.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body4016.geometry}
          material={materials["grainy black.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body40.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body41.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body42.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body43.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body44.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body45.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body46.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body47.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body48.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body49.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body5.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body5001.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body5002.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body5003.geometry}
          material={materials["grainy black.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body50.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body51.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body52.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body53.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body54.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body55.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body56.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body57.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body58.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body59.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body6.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body6001.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body6002.geometry}
          material={materials["Leather026.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body60.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body61.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body62.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body63.geometry}
          material={materials["F_970d5466485d4984beb46d5e0022fdd0.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body63001.geometry}
          material={materials["F_422afbf5bebd4e6b9e99584f548b04a3.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body63002.geometry}
          material={materials["F_ad9ac6759b194f2e99b0ae8ef120d0b5.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body63003.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body63004.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body63005.geometry}
          material={materials["F_379ff0f2c027411a93c1a106b6640ca9.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body63006.geometry}
          material={materials["F_c908d91b442e42f384ae6d213dde0ece.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body63007.geometry}
          material={materials["F_3a7cfd6818ae46cc80d4ce9966ac360d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body64.geometry}
          material={materials["F_64a278e3bdab443bb4937b782d6e38a6.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body65.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body66.geometry}
          material={materials["F_64a278e3bdab443bb4937b782d6e38a6.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body67.geometry}
          material={materials["F_2cbef3024a604333953e003c1741518a.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body67001.geometry}
          material={materials["F_36fd8f48822d4c81a65123e621f1f066.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body67002.geometry}
          material={materials["F_88ac9bad61014d72a3ba249c79605b56.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body67003.geometry}
          material={materials["F_d524132442ec46908871ad2565718b3e.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body67004.geometry}
          material={materials["F_d3f989f9fcad4e2c99befcd8caad9f94.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body68.geometry}
          material={materials["F_883a112774254db89be7986510117e34.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[10, 9.55, 10]}
        />
        <mesh
          geometry={nodes.Body69.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body7.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body7001.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body7002.geometry}
          material={materials["F_73e4ac9271ff4646907efb84b16f0f9a.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body70.geometry}
          material={materials["F_4a2e4ac466a044bf928b1065db3c93be.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body71.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body72.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body73.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body74.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body75.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body76.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body77.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body78.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body79.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body8.geometry}
          material={materials["F_43e82e305369483880b3c960f2114f46.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body8001.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body8002.geometry}
          material={materials["F_7dba7f784bee460ebbc48c2d1611f5de.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body8003.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body8004.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body80.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body81.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body82.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body83.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body84.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body85.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body86.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body87.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body88.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body89.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body9.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[-0.12, -96.09, -5.64]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body9001.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body9002.geometry}
          material={materials["grainy black.001"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body90.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body91.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body92.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body93.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body94.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body95.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body96.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body97.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body98.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Body99.geometry}
          material={materials["F_12aecdedd27c4b60a55e7bef8977692d.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={10}
        />
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials["speaker.001"]}
          position={[18.71, -97.35, -4.73]}
          scale={[10.97, 8.57, 2.19]}
        />
        <mesh
          geometry={nodes.Plane001.geometry}
          material={materials["speaker.001"]}
          position={[-5.93, 61.92, -5.61]}
          scale={[10.97, 8.57, 2.19]}
        />
        <mesh
          geometry={nodes.Plane002.geometry}
          material={materials["speaker.001"]}
          position={[-0.69, 59.63, -2.75]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[12.66, 8.57, 2.19]}
        />
        <mesh
          geometry={nodes.screen.geometry}
          material={materials["Material.002"]}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.screen001.geometry}
          material={materials.Preset}
          position={[0, -18.2, -1.14]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Body1129.geometry}
          material={materials["Leather026.001"]}
          position={[2, 6.91, -15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={10}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./Models/n1-white.glb");

const CustomOrbitControl = ({ object }) => {
  const { gl, camera } = useThree();
  let isDragging = false;
  const previousMouse = useRef([0, 0]);
  const activeState = useAnimationStore((state) => state.activeState);

  const onMouseDown = (event) => {
    isDragging = true;
    previousMouse.current =
      event.type === "touchstart"
        ? [event.touches[0].clientX, event.touches[0].clientY]
        : [event.clientX, event.clientY];
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  const onMouseMove = (event) => {
    if (!isDragging) return;
    const clientX =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const clientY =
      event.type === "touchmove" ? event.touches[0].clientY : event.clientY;
    const deltaMove = [
      clientX - previousMouse.current[0],
      clientY - previousMouse.current[1],
    ];

    const deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        toRadians(deltaMove[1]),
        toRadians(deltaMove[0]),
        0,
        "XYZ"
      )
    );

    object.current.quaternion.multiplyQuaternions(
      deltaRotationQuaternion,
      object.current.quaternion
    );

    previousMouse.current = [clientX, clientY];
  };

  const toRadians = (angle) => {
    return angle * (Math.PI / 180);
  };
  useFrame(() => {
    if (!isDragging && activeState !== 1) object.current.rotateY(0.005);
  });

  useEffect(() => {
    gl.domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    gl.domElement.addEventListener("mousemove", onMouseMove);

    window.addEventListener("touchstart", onMouseDown);
    window.addEventListener("touchend", onMouseUp);
    window.addEventListener("touchmove", onMouseMove);
  }, []);

  return null;
};
