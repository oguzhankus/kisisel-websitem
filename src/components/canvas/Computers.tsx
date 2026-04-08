import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import type { Group } from "three";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const groupRef = useRef<Group>(null);
  
  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.8} />
      
      {/* 3D Grid Floor / Pedestal - Shadows Disabled for Performance */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.64 : 0.96}
        position={isMobile ? [0, -0.8, -1.5] : [0, -2.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="h-full w-full">
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ position: [15.5, 2.1, 4.85], fov: 28 }}
        gl={{
          alpha: true,
          antialias: true,
          precision: "highp", 
          preserveDrawingBuffer: false,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        className="h-full w-full !bg-transparent"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate={false}
            autoRotateSpeed={0.32}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={0} 
            maxPolarAngle={Math.PI}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
