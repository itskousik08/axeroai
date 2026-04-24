import React, { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { 
  OrbitControls,
  Float, 
  PerspectiveCamera, 
  Environment, 
  useProgress, 
  Html,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Stars
} from "@react-three/drei";
import * as THREE from "three";

/**
 * INSTALL COMMAND:
 * npm install three @react-three/fiber @react-three/drei
 */

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-white/5 border-t-white rounded-full animate-spin"></div>
        <span className="font-mono text-[9px] text-white/40 uppercase tracking-[0.3em]">{Math.round(progress)}%</span>
      </div>
    </Html>
  );
}

function Logo3D() {
  const meshRef = useRef<THREE.Group>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/axero-logo-white.png",
      (tex) => {
        tex.anisotropy = 4;
        setTexture(tex);
      },
      undefined,
      () => {
        // Simple fallback
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 40;
          ctx.beginPath();
          ctx.arc(256, 256, 200, 0, Math.PI * 2);
          ctx.stroke();
          const procTex = new THREE.CanvasTexture(canvas);
          setTexture(procTex);
        }
      }
    );
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.mouse;

    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(t * 0.4) * 0.15;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, (x * Math.PI) / 12, 0.05);
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, (-y * Math.PI) / 15, 0.05);
    }
  });

  if (!texture) return null;

  return (
    <group ref={meshRef}>
      {/* Front Face - Only 2 layers for a slight shadow effect without lag */}
      <mesh position={[0, 0, 0.05]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial 
          map={texture} 
          alphaMap={texture}
          transparent={true} 
          alphaTest={0.1}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Shadow layer */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[5.2, 5.2]} />
        <meshBasicMaterial 
          map={texture} 
          alphaMap={texture}
          transparent={true} 
          color="#000000"
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

export default function AxeroLogo3D() {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="w-full h-full relative z-0">
        <Canvas gl={{ antialias: false, alpha: true }} dpr={1}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
          
          <Suspense fallback={<Loader />}>
            <Stars 
              radius={80} 
              depth={40} 
              count={2000} 
              factor={4} 
              saturation={0} 
              fade 
              speed={1.5} 
            />
            
            <ambientLight intensity={0.8} />
            <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
            
            <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.1}>
              <Logo3D />
            </Float>
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={0.3}
            dampingFactor={0.1}
          />
        </Canvas>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
    </div>
  );
}


