"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function SkylineMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const buildings = useMemo(
    () =>
      new Array(30).fill(0).map((_, i) => ({
        x: -15 + i,
        h: 0.8 + ((i * 7) % 8) * 0.25,
        z: -3 - (i % 4) * 0.35
      })),
    []
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {buildings.map((b, i) => (
        <mesh key={i} position={[b.x, -2 + b.h / 2, b.z]}>
          <boxGeometry args={[0.75, b.h, 0.75]} />
          <meshStandardMaterial color={i % 3 ? "#0d1a2f" : "#152f5e"} emissive="#0d2f8e" emissiveIntensity={0.12} />
        </mesh>
      ))}
    </group>
  );
}

function AtmospherePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new (THREE as any).Color("#07103a") },
      uColorB: { value: new (THREE as any).Color("#00e5ff") }
    }),
    []
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh ref={meshRef} position={[0, -0.4, -6]}>
      <planeGeometry args={[20, 12, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 pos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec3 uColorA;
          uniform vec3 uColorB;
          varying vec2 vUv;
          float scanline(float y) {
            return smoothstep(0.48, 0.52, fract(y * 220.0));
          }
          vec3 chroma(vec3 col, float offset) {
            return vec3(
              col.r * (1.0 + offset * 1.1),
              col.g * (1.0 - offset * 0.2),
              col.b * (1.0 - offset * 0.9)
            );
          }
          void main() {
            float wave = sin((vUv.y + uTime * 0.12) * 6.2831) * 0.08;
            float glow = smoothstep(-0.2, 1.0, vUv.y + wave * 0.9);
            vec3 base = mix(uColorA, uColorB, glow);
            float sl = scanline(vUv.y + uTime * 0.03) * 0.18;
            float offset = sin(uTime * 0.9 + vUv.x * 14.0) * 0.04;
            vec3 c = chroma(base, offset);
            c += vec3(sl * 1.2);
            gl_FragColor = vec4(c, 0.18 + glow * 0.18);
          }
        `}
        transparent
        depthWrite={false}
        blending={(THREE as any).AdditiveBlending}
      />
    </mesh>
  );
}

export function SkylineScene() {
  return (
    <div className="absolute inset-0 opacity-45">
      <Canvas camera={{ position: [0, 0, 8], fov: 58 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 4, 5]} intensity={1.2} />
        <AtmospherePlane />
        <Float speed={0.8} rotationIntensity={0.15}>
          <SkylineMesh />
        </Float>
      </Canvas>
    </div>
  );
}
