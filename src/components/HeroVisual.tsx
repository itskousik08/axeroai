import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralCore() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.cos(t / 4) / 4;
      mesh.current.rotation.y = Math.sin(t / 4) / 4;
      mesh.current.rotation.z = Math.sin(t / 1.5) / 10;
      mesh.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#2E5BFF"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#1a35a0"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

function DataNodes() {
  const points = useMemo(() => {
    const p = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, []);

  const pointRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointRef.current) {
      pointRef.current.rotation.y += 0.001;
      pointRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <Points ref={pointRef} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#888888"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function HeroVisual() {
  return (
    <div className="w-full h-full min-h-[400px] relative pointer-events-none lg:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#2E5BFF" />
        <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={1} />
        
        <NeuralCore />
        <DataNodes />
        
        {/* Subtle dynamic grid or atmosphere could be added here */}
      </Canvas>
      
      {/* Overlay UI elements can be placed around this in Hero.astro */}
    </div>
  );
}
