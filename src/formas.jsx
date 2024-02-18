"use client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import React from "react";
import { useEnvironment } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { RGBELoader } from "three-stdlib";

import { useLoader } from "@react-three/fiber";

export function Model({ url, scale, position, rotation }) {
  const { nodes, materials } = useGLTF(url);

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </group>
  );
}

const Objeto = () => {
  // const env = useEnvironment({ files: "env/prueba2.hdr" });
  // const envirome = useLoader.preload(RGBELoader, env);

  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "#e00" }}>
        <h1 style={{ color: "fff", backgroundColor: "transparent" }}>Objeto</h1>
        <Canvas>
          <mesh>
            <sphereGeometry args={[1, 100, 94]} />
            <MeshDistortMaterial
              distort={1}
              speed={0.6}
              factor={8}
              color="#221438"
              metalness={0.3}
              ior={2.3}
              roughness={0.2}
              iridescence={0.7}
              iridescenceIOR={1.3}
              clearcoatRoughness={0}
              specularIntensity={1}
            />
          </mesh>

          <Model
            url={"/burbu.glb"}
            scale={[0.692, 0.606, 0.686]}
            position={[-2, 1, 1]}
            rotation={[-0.043, -0.209, 0.047]}
          />
          <OrbitControls />
          <color args={["#080406"]} attach="background" />
          <Suspense fallback={null}>
            <Environment
              files={[
                "px.png",
                "nx.png",
                "py.png",
                "ny.png",
                "pz.png",
                "nz.png",
              ]}
              path="env2/"
              blur={2}
            />
          </Suspense>
        </Canvas>
      </div>
      <div style={{ height: "100vh" }}>
        <Canvas>
          <Model
            url={"/blob3.glb"}
            scale={[0.692, 0.606, 0.686]}
            position={[0, 0, 0]}
            rotation={[-0.043, -0.209, 0.047]}
          />
          <Model
            url={"/burbu.glb"}
            scale={[0.692, 0.606, 0.686]}
            position={[-3, 2, 0]}
            rotation={[-0, 9, 10]}
          />
          <OrbitControls />
          <color args={["#080406"]} attach="background" />
          {/* <Environment preset="city" /> */}
          <Suspense fallback={null}>
            <Environment
              files={[
                "px.png",
                "nx.png",
                "py.png",
                "ny.png",
                "pz.png",
                "nz.png",
              ]}
              path="env2/"
              blur={6}
            />
          </Suspense>
        </Canvas>
        <h2>cdsds</h2>
      </div>

      <div style={{ height: "100vh" }}>
        <Canvas>
          <Model
            url={"/blob3.glb"}
            scale={[0.692, 0.606, 0.686]}
            position={[0, 0, 0]}
            rotation={[-0.043, -0.209, 0.047]}
          />
          <Model
            url={"/burbu.glb"}
            scale={[0.692, 0.606, 0.686]}
            position={[-3, 2, 0]}
            rotation={[-0.043, -0.209, 0.047]}
          />
          <OrbitControls />
          <color args={["#080406"]} attach="background" />
          <Environment preset="city" />
        </Canvas>
      </div>
    </>
  );
};

useGLTF.preload("/blob3.glb");
useGLTF.preload("/burbu.glb");
export default Objeto;
