import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Float, 
  PerspectiveCamera, 
  Text, 
  MeshDistortMaterial, 
  Sphere, 
  Points, 
  PointMaterial,
  Stars,
  Environment
} from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import AxeroLogo from './AxeroLogo';

/**
 * INSTALL COMMAND:
 * npm install three @react-three/fiber @react-three/drei framer-motion lucide-react
 */

// --- 3D Background Components ---

function NeuralParticles({ count = 2000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.y = t;
    pointsRef.current.rotation.x = t * 0.5;
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function MetallicRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ringsRef.current) return;
    const t = state.clock.getElapsedTime();
    const { x, y } = state.mouse;

    ringsRef.current.children.forEach((child, i) => {
      const speed = 0.2 + i * 0.1;
      child.rotation.z = t * speed;
      child.rotation.x = THREE.MathUtils.lerp(child.rotation.x, y * 0.2, 0.05);
      child.rotation.y = THREE.MathUtils.lerp(child.rotation.y, x * 0.2, 0.05);
    });
  });

  return (
    <group ref={ringsRef}>
      {[2, 2.5, 3.1].map((radius, i) => (
        <mesh key={radius} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
          <torusGeometry args={[radius, 0.015, 16, 100]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={1} 
            roughness={0.1} 
            emissive="#ffffff"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

function NeuralGrid() {
  return (
    <gridHelper 
      args={[40, 40, 0x333333, 0x111111]} 
      position={[0, -5, 0]} 
      rotation={[0.2, 0, 0]} 
    />
  );
}

// --- Main Hero Component ---

export default function AxeroHero3D() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
          <color attach="background" args={['#000000']} />
          
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} color="#444444" intensity={0.5} />
            
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <MetallicRings />
              <NeuralParticles count={1500} />
            </Float>
            
            <NeuralGrid />
            
            <mesh position={[0, 0, -2]}>
              <sphereGeometry args={[1, 64, 64]} />
              <MeshDistortMaterial
                color="#111111"
                speed={2}
                distort={0.4}
                radius={1}
                metalness={1}
                roughness={0.1}
              />
            </mesh>

            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* Dark Gradient Overlays for Readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 w-full max-w-7xl px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Logo Badge (Subtle) */}
          <div className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 group cursor-pointer hover:bg-white/10 transition-colors">
            <Zap className="w-3.5 h-3.5 text-white animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-mono group-hover:text-white transition-colors">System v1.0.2 Active</span>
          </div>

          <div className="mb-8">
            <AxeroLogo size={82} className="drop-shadow-[0_0_50px_rgba(255,255,255,0.4)]" />
          </div>
          
          <p className="max-w-2xl text-lg md:text-xl text-white/50 mb-12 font-light leading-relaxed tracking-wide px-4">
            Architecting the <span className="text-white font-medium">Intelligence Layer</span> of the global digital infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-3 group transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
            >
              Explore Stack
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-colors cursor-pointer group flex items-center gap-2"
            >
              Our Thesis
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all -ml-2 group-hover:ml-0" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Technical Decals */}
        <div className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-1 items-start font-mono text-[8px] text-white/20 uppercase tracking-[0.2em]">
          <span>Lat: 37.7749° N</span>
          <span>Lng: 122.4194° W</span>
          <span>Status: Synchronized</span>
        </div>
        
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col gap-1 items-end font-mono text-[8px] text-white/20 uppercase tracking-[0.2em]">
          <span>Neural Engine: Online</span>
          <span>Packet Relay: 0.2ms</span>
          <span>Security: Encrypted</span>
        </div>
      </div>

      {/* Scanline Effect Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden h-full w-full">
        <div className="w-full h-[1px] bg-white/10 animate-[scan_6s_linear_infinite] absolute top-[-10%]"></div>
      </div>
    </section>
  );
}
