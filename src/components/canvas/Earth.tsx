import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../layout/Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  const earthRef = useRef<THREE.Group>(null);

  return (
    <primitive 
      ref={earthRef}
      object={earth.scene} 
      scale={1.7} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
  const containerRef = useRef(null);
  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ 
          preserveDrawingBuffer: false, 
          powerPreference: "high-performance", 
          alpha: true,
          antialias: true,
          precision: "highp"
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={2.5}
            enablePan={false}
            enableZoom={false}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
