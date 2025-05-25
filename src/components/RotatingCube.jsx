// components/RotatingCube.jsx
import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import me from '../assets/me2.jpg';

const Cube = () => {
  const texture = useLoader(TextureLoader, me);

  return (
    <mesh rotation={[0.5, 0.8, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} map={texture} />
      ))}
    </mesh>
  );
};

const RotatingCube = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Cube />
      <OrbitControls autoRotate />
    </Canvas>
  );
};

export default RotatingCube;
