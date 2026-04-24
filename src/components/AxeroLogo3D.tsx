import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function Logo3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth floating
      groupRef.current.position.y = Math.sin(t) * 0.2;
      // Slow rotation
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Circle (C shape) */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.25, 16, 100, Math.PI * 1.8]} />
        <meshStandardMaterial color="#2E5BFF" emissive="#2E5BFF" emissiveIntensity={0.5} />
      </mesh>

      {/* A Shape */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[1.5, 2.5, 3]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Inner cut line */}
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.2, 2.2, 0.2]} />
        <meshStandardMaterial color="#070707" />
      </mesh>
    </group>
  );
}

export default function AxeroLogo3D() {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ alpha: true }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#2E5BFF" />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />

        {/* Logo */}
        <Logo3D />

        {/* Controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
