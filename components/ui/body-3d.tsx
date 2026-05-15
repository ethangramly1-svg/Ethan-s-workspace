"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import type { BodyPartId } from "@/lib/workouts";

interface BodyPartProps {
  id: BodyPartId;
  selected: BodyPartId | null;
  onSelect: (id: BodyPartId) => void;
  onHover: (id: BodyPartId | null) => void;
  children: (state: { emissiveIntensity: number; color: string }) => React.ReactNode;
}

function BodyPart({
  id,
  selected,
  onSelect,
  onHover,
  children,
}: BodyPartProps) {
  const [hovered, setHovered] = useState(false);
  const isSelected = selected === id;

  const baseIntensity = 0.35;
  const hoverIntensity = 1.4;
  const selectIntensity = 2.6;

  const emissiveIntensity = isSelected
    ? selectIntensity
    : hovered
    ? hoverIntensity
    : baseIntensity;

  const color = isSelected ? "#ffb84a" : hovered ? "#fb923c" : "#7c2d12";

  return (
    <group
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        onHover(id);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
        onHover(null);
        document.body.style.cursor = "default";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(id);
      }}
    >
      {children({ emissiveIntensity, color })}
    </group>
  );
}

interface BodyProps {
  selected: BodyPartId | null;
  onSelect: (id: BodyPartId) => void;
  onHover: (id: BodyPartId | null) => void;
}

function Body({ selected, onSelect, onHover }: BodyProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current && !selected) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const partMaterial = (
    color: string,
    emissiveIntensity: number,
    base = "#1a0a04"
  ) => (
    <meshStandardMaterial
      color={base}
      emissive={color}
      emissiveIntensity={emissiveIntensity}
      roughness={0.4}
      metalness={0.3}
    />
  );

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      <BodyPart id="face" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <mesh position={[0, 3.5, 0]} castShadow>
            <sphereGeometry args={[0.55, 32, 32]} />
            {partMaterial(color, emissiveIntensity)}
          </mesh>
        )}
      </BodyPart>

      <BodyPart id="neck" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <mesh position={[0, 2.85, 0]} castShadow>
            <cylinderGeometry args={[0.2, 0.22, 0.35, 16]} />
            {partMaterial(color, emissiveIntensity)}
          </mesh>
        )}
      </BodyPart>

      <BodyPart id="chest" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <mesh position={[0, 2.05, 0]} castShadow>
            <boxGeometry args={[1.6, 1.05, 0.75]} />
            {partMaterial(color, emissiveIntensity)}
          </mesh>
        )}
      </BodyPart>

      <BodyPart id="shoulders" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <group>
            <mesh position={[-0.95, 2.45, 0]} castShadow>
              <sphereGeometry args={[0.38, 24, 24]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[0.95, 2.45, 0]} castShadow>
              <sphereGeometry args={[0.38, 24, 24]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
          </group>
        )}
      </BodyPart>

      <BodyPart id="arms" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <group>
            <mesh position={[-1.15, 1.7, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.22, 1.1, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[1.15, 1.7, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.22, 1.1, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[-1.18, 0.6, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.18, 1.0, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[1.18, 0.6, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.18, 1.0, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[-1.18, 0.0, 0]} castShadow>
              <sphereGeometry args={[0.2, 16, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[1.18, 0.0, 0]} castShadow>
              <sphereGeometry args={[0.2, 16, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
          </group>
        )}
      </BodyPart>

      <BodyPart id="abs" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <mesh position={[0, 1.1, 0]} castShadow>
            <boxGeometry args={[1.25, 0.95, 0.65]} />
            {partMaterial(color, emissiveIntensity)}
          </mesh>
        )}
      </BodyPart>

      <BodyPart id="obliques" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <group>
            <mesh position={[-0.75, 1.1, 0]} castShadow>
              <boxGeometry args={[0.22, 0.95, 0.68]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[0.75, 1.1, 0]} castShadow>
              <boxGeometry args={[0.22, 0.95, 0.68]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
          </group>
        )}
      </BodyPart>

      <BodyPart id="glutes" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <mesh position={[0, 0.35, 0]} castShadow>
            <boxGeometry args={[1.4, 0.6, 0.75]} />
            {partMaterial(color, emissiveIntensity)}
          </mesh>
        )}
      </BodyPart>

      <BodyPart id="thighs" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <group>
            <mesh position={[-0.4, -0.65, 0]} castShadow>
              <cylinderGeometry args={[0.32, 0.28, 1.4, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[0.4, -0.65, 0]} castShadow>
              <cylinderGeometry args={[0.32, 0.28, 1.4, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
          </group>
        )}
      </BodyPart>

      <BodyPart id="calves" selected={selected} onSelect={onSelect} onHover={onHover}>
        {({ emissiveIntensity, color }) => (
          <group>
            <mesh position={[-0.4, -2.05, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.18, 1.25, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[0.4, -2.05, 0]} castShadow>
              <cylinderGeometry args={[0.24, 0.18, 1.25, 16]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[-0.4, -2.8, 0.12]} castShadow>
              <boxGeometry args={[0.3, 0.18, 0.6]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
            <mesh position={[0.4, -2.8, 0.12]} castShadow>
              <boxGeometry args={[0.3, 0.18, 0.6]} />
              {partMaterial(color, emissiveIntensity)}
            </mesh>
          </group>
        )}
      </BodyPart>

      <mesh position={[0, -3.1, 0]} receiveShadow>
        <cylinderGeometry args={[2.5, 2.5, 0.05, 64]} />
        <meshStandardMaterial
          color="#1c0a04"
          emissive="#ea580c"
          emissiveIntensity={0.25}
          roughness={0.9}
        />
      </mesh>
    </group>
  );
}

interface Body3DProps {
  selected: BodyPartId | null;
  onSelect: (id: BodyPartId) => void;
  onHover: (id: BodyPartId | null) => void;
}

export function Body3D({ selected, onSelect, onHover }: Body3DProps) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.5, 9], fov: 42 }}
      className="!h-full !w-full"
    >
      <color attach="background" args={["#0a0503"]} />
      <fog attach="fog" args={["#0a0503", 10, 22]} />

      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 10, 5]} intensity={0.6} castShadow />
      <pointLight position={[0, 4, 4]} color="#f97316" intensity={3} distance={14} />
      <pointLight position={[-4, -2, 3]} color="#dc2626" intensity={2.2} distance={12} />
      <pointLight position={[4, -1, 3]} color="#fb923c" intensity={2} distance={12} />

      <Suspense fallback={null}>
        <Body selected={selected} onSelect={onSelect} onHover={onHover} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={6}
        maxDistance={14}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
}
