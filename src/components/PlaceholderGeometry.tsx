/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useRef, memo } from "react";
import { ThreeElements } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

type MeshProps = ThreeElements["mesh"];

interface PlaceholderGeometryProps extends MeshProps {
  modeProps?: Record<string, unknown>;
}

// Placeholder Lens component using CylinderGeometry
export function PlaceholderLens({ modeProps = {}, ...props }: PlaceholderGeometryProps) {
  const {
    scale = 0.15,
    ior = 1.15,
    thickness = 5,
    anisotropy = 0.01,
    chromaticAberration = 0.1,
    ...extraMat
  } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <mesh scale={scale} rotation-x={Math.PI / 2} {...props}>
      <cylinderGeometry args={[2, 2, 0.5, 32]} />
      <MeshTransmissionMaterial
        ior={ior}
        thickness={thickness}
        anisotropy={anisotropy}
        chromaticAberration={chromaticAberration}
        {...(typeof extraMat === "object" && extraMat !== null ? extraMat : {})}
      />
    </mesh>
  );
}

// Placeholder Cube component using BoxGeometry
export function PlaceholderCube({ modeProps = {}, ...props }: PlaceholderGeometryProps) {
  const {
    scale = 0.15,
    ior = 1.15,
    thickness = 5,
    anisotropy = 0.01,
    chromaticAberration = 0.1,
    ...extraMat
  } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <mesh scale={scale} {...props}>
      <boxGeometry args={[3, 3, 3]} />
      <MeshTransmissionMaterial
        ior={ior}
        thickness={thickness}
        anisotropy={anisotropy}
        chromaticAberration={chromaticAberration}
        {...(typeof extraMat === "object" && extraMat !== null ? extraMat : {})}
      />
    </mesh>
  );
}

// Placeholder Bar component using BoxGeometry
export function PlaceholderBar({ modeProps = {}, ...props }: PlaceholderGeometryProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: "#ffffff",
    attenuationColor: "#ffffff",
    attenuationDistance: 0.25,
    scale: 0.15,
  };

  const finalProps = { ...defaultMat, ...modeProps };
  const { scale, ...materialProps } = finalProps;

  return (
    <mesh scale={scale} {...props}>
      <boxGeometry args={[8, 1, 1]} />
      <MeshTransmissionMaterial {...materialProps} />
    </mesh>
  );
}
