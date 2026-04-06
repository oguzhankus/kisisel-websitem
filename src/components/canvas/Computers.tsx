import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import type { Group } from "three";

import CanvasLoader from "../layout/Loader";

const Computers: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const groupRef = useRef<Group>(null);
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const baseY = -0.26;
    const scrollNudge = Math.min(scrollY.current, 720) * 0.00014;
    groupRef.current.rotation.y = baseY + scrollNudge;
    
    // Subtle breathing animation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <hemisphereLight intensity={0.22} groundColor="#0B0F1A" color="#a78bfa" />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[-15, 30, 20]}
        angle={0.25}
        penumbra={1}
        intensity={1.2}
        color="#e9e7ff"
        castShadow={false}
      />
      {/* Cinematic Rim Lights */}
      <pointLight position={[12, 6, -10]} intensity={1.5} color="#915eff" distance={40} />
      <pointLight position={[-14, 4, -8]} intensity={1.2} color="#22d3ee" distance={35} />
      <pointLight position={[0, 15, 0]} intensity={0.5} color="#ffffff" distance={50} />

      {/* Holographic Pod Lighting */}
      <pointLight position={[0, -2, 0]} intensity={2.5} color="#915eff" distance={12} />
      
      {/* 3D Grid Floor / Pedestal */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.4, 0]} receiveShadow>
        <circleGeometry args={[7, 64]} />
        <meshBasicMaterial 
          color="#915eff"
          transparent
          opacity={0.06}
          wireframe
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.41, 0]}>
        <circleGeometry args={[8, 4]} />
        <meshBasicMaterial 
          color="#22d3ee"
          transparent
          opacity={0.03}
          wireframe
        />
      </mesh>
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

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [15.5, 2.1, 4.85], fov: 28 }}
      gl={{
        alpha: true,
        antialias: false, // Disabling antialias for extra performance boost
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
          autoRotate
          autoRotateSpeed={0.32}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 2.65}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
