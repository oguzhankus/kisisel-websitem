import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { useInView } from "framer-motion";

import CanvasLoader from "../layout/Loader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 0, 5]} intensity={1.2} />
      <mesh castShadow={false} receiveShadow={false} scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#f8fafc"
          metalness={0.15}
          roughness={0.25}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.35}
          map={decal}
          // @ts-expect-error
          flatShading
        />
      </mesh>
    </Float>
  );

};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <div ref={containerRef} className="h-full w-full">
      {isInView && (
        <Canvas
          frameloop="demand" // Only render on change
          dpr={1}
          gl={{
            preserveDrawingBuffer: false,
            powerPreference: "high-performance",
            antialias: false,
            precision: "lowp"
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enablePan={false} enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>

          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
