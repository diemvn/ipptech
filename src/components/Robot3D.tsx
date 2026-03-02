import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Stage, Float } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  // Using the official Three.js Robot Expressive model - very reliable
  const { scene } = useGLTF('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/RobotExpressive/RobotExpressive.glb');
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <primitive 
      ref={groupRef}
      object={scene} 
      scale={0.4} 
      position={[0, -1, 0]} 
    />
  );
}

export default function Robot3D() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} shadows={{ type: 'contact', opacity: 0.4, blur: 2 }}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <Model />
            </Float>
          </Stage>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 1.8}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/gltf/RobotExpressive/RobotExpressive.glb');
