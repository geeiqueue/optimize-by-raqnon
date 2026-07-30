"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkNodes({ count = 50 }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        )
      );
    }
    return pts;
  }, [count]);

  const lines = useMemo(() => {
    const segments: [THREE.Vector3, THREE.Vector3][] = [];
    positions.forEach((p, i) => {
      const nearest = positions
        .map((q, j) => ({ j, d: p.distanceTo(q) }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      nearest.forEach(({ j }) => {
        if (j > i) segments.push([p, positions[j]]);
      });
    });
    return segments;
  }, [positions]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
      ))}
      {lines.map(([a, b], i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([a.x, a.y, a.z, b.x, b.y, b.z]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0ea5e9" transparent opacity={0.25} />
        </line>
      ))}
    </group>
  );
}

export default function BusinessNetwork() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full bg-[#070b12] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <NetworkNodes count={50} />
        </Canvas>
      </div>

      {/* Cursor spotlight glow, layered above the 3D canvas */}
      <div
        className="absolute inset-0 transition-all duration-200 ease-out hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(14, 165, 233, 0.08), transparent 80%)`,
        }}
      />
    </div>
  );
}