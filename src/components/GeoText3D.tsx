/* eslint-disable */
import { Text3D } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

export const GeoText3D: React.FC = () => {
  const generateGradientTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0.3, "#FF7A00");
    gradient.addColorStop(1, "#CB000C");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return canvas.toDataURL();
  };

  const texture = useLoader(
    TextureLoader as any,
    generateGradientTexture() as any
  );

  const textRef = useRef<any>(null);

  // 継続的なアニメーションの場合、useFrameを使用することができます
  useEffect(() => {
    if (textRef.current) {
      textRef.current.rotation.x += 0; // X軸で回転
      textRef.current.rotation.y += 0.7; // Y軸で回転
    }
  });

  return (
    <Text3D
      ref={textRef}
      font="/Shippori Mincho_Bold.json"
      height={0.3}
      position={[-3, 0, 0]}
      scale={2.5}
    >
      世界とコミュニケートする
      <meshStandardMaterial wireframe={false} map={texture} />
    </Text3D>
  );
};
