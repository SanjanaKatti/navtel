"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, OrbitControls, useGLTF } from "@react-three/drei";

interface ProductGLBCanvasProps {
  modelSrc: string;
  autoRotate?: boolean;
}

const GLBModel = ({ modelSrc }: { modelSrc: string }) => {
  const gltf = useGLTF(modelSrc);
  return <primitive object={gltf.scene} />;
};

const ProductGLBCanvas: React.FC<ProductGLBCanvasProps> = ({
  modelSrc,
  autoRotate = false,
}) => {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.2, 3.4], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[2.5, 2.8, 2]} intensity={1.15} />
      <directionalLight position={[-2.8, -1.8, -1.4]} intensity={0.35} />
      <Environment preset="studio" />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.18}>
          <group position={[0, -0.05, 0]}>
            <GLBModel modelSrc={modelSrc} />
          </group>
        </Bounds>
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        minDistance={2.1}
        maxDistance={4}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.65}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
      />
    </Canvas>
  );
};

export default ProductGLBCanvas;
