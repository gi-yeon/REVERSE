/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import VendingPage from "../../UI/three/VendingTest";

export function VendingMachine(props) {
  const { nodes, materials } = useGLTF(
    "/assets/vendingmachine/vendingmachinemod.glb"
  );
  return (
    <group {...props} dispose={null}>
      <group
        position={[-40, 0, 120]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            // geometry={nodes.vending_crystal_blinn3_0001.geometry}
            // material={materials["blinn3.001"]}
            position={[2.19, 6.13, 0.03]}
          >
            <Html
              style={{
                backgroundColor: "gray",
                width: "144px",
                height: "150px",
              }}
              transform
              occlude
              rotation={[0, Math.PI / 2, 0]}
              position={[0.1, 0, 0]}
              distanceFactor={10}
            >
              {/* <h1>hello?</h1> */}
              <VendingPage />
            </Html>
          </mesh>
          <mesh
            geometry={nodes.vending_crystal_lambert32_0001.geometry}
            material={materials["lambert32.001"]}
            position={[0.95, 4.26, -0.44]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/vendingmachinemod.glb");
