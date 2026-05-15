"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const moltenMat = (
  emissiveIntensity = 1.0,
  emissive = "#f97316",
  base = "#1a0a04"
) => (
  <meshStandardMaterial
    color={base}
    emissive={emissive}
    emissiveIntensity={emissiveIntensity}
    roughness={0.35}
    metalness={0.6}
  />
);

function Dumbbell() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.6;
      ref.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.15;
    }
  });
  return (
    <group ref={ref}>
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 2.4, 24]} />
        <meshStandardMaterial
          color="#2a1408"
          metalness={0.85}
          roughness={0.25}
          emissive="#ea580c"
          emissiveIntensity={0.4}
        />
      </mesh>
      {[-1.05, 1.05].map((y) => (
        <group key={y} position={[0, y, 0]}>
          <mesh>
            <cylinderGeometry args={[0.7, 0.7, 0.45, 32]} />
            {moltenMat(0.9, "#ea580c", "#1a0a04")}
          </mesh>
          <mesh position={[0, 0, 0]}>
            <torusGeometry args={[0.7, 0.04, 12, 48]} />
            {moltenMat(2.2, "#ffb84a", "#2a1408")}
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Kettlebell() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.5;
      ref.current.position.y = Math.sin(Date.now() * 0.0015) * 0.15;
    }
  });
  return (
    <group ref={ref}>
      <mesh position={[0, -0.2, 0]}>
        <sphereGeometry args={[0.85, 32, 32]} />
        {moltenMat(0.8)}
      </mesh>
      <mesh position={[0, 0.85, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.4, 0.1, 16, 32, Math.PI]} />
        {moltenMat(1.4, "#fb923c", "#2a1408")}
      </mesh>
      <mesh position={[-0.4, 0.4, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.55, 16]} />
        {moltenMat(1.0, "#fb923c", "#2a1408")}
      </mesh>
      <mesh position={[0.4, 0.4, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.55, 16]} />
        {moltenMat(1.0, "#fb923c", "#2a1408")}
      </mesh>
    </group>
  );
}

function Barbell() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.z += dt * 0.4;
    }
  });
  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 3.5, 24]} />
        <meshStandardMaterial
          color="#2a1408"
          metalness={0.9}
          roughness={0.2}
          emissive="#ea580c"
          emissiveIntensity={0.3}
        />
      </mesh>
      {[-1.55, -1.25, 1.25, 1.55].map((y, i) => {
        const isOuter = Math.abs(y) > 1.4;
        return (
          <mesh key={i} position={[0, y, 0]}>
            <cylinderGeometry args={[isOuter ? 0.42 : 0.55, isOuter ? 0.42 : 0.55, 0.18, 32]} />
            {moltenMat(isOuter ? 1.5 : 0.9, "#f97316", "#1a0a04")}
          </mesh>
        );
      })}
    </group>
  );
}

interface SingleEquipmentProps {
  type: "dumbbell" | "kettlebell" | "barbell";
}

function EquipmentMesh({ type }: SingleEquipmentProps) {
  switch (type) {
    case "dumbbell":
      return <Dumbbell />;
    case "kettlebell":
      return <Kettlebell />;
    case "barbell":
      return <Barbell />;
  }
}

export function Equipment3D({ type }: SingleEquipmentProps) {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 5], fov: 38 }}
      className="!h-full !w-full"
    >
      <color attach="background" args={["#0a0503"]} />
      <ambientLight intensity={0.18} />
      <directionalLight position={[3, 6, 4]} intensity={0.55} />
      <pointLight position={[0, 2, 3]} color="#f97316" intensity={2.4} distance={10} />
      <pointLight position={[-3, -1, 2]} color="#dc2626" intensity={1.8} distance={10} />
      <pointLight position={[3, -1, 2]} color="#fb923c" intensity={1.5} distance={10} />
      <Suspense fallback={null}>
        <EquipmentMesh type={type} />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
