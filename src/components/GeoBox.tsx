import React from "react";
import { useControls, folder, button } from "leva";
import { Box } from "@react-three/drei";

export const GeoBox: React.FC = () => {
  const [{ scale, positionX, positionY, positionZ, wireFrame, color }, reset] =
    useControls("Box", () => ({
      geometry: folder({
        scale: {
          value: 0,
          min: 1,
          max: 3,
          step: 0.1,
        },
        positionX: {
          value: 0,
          min: -3,
          max: 3,
          step: 0.1,
        },
        positionY: {
          value: 0,
          min: -3,
          max: 3,
          step: 0.1,
        },
        positionZ: {
          value: 0,
          min: -3,
          max: 3,
          step: 0.1,
        },
      }),
      material: folder({
        color: "#f00",
        wireFrame: false,
      }),
      reset: button(() => {
        reset({
          scale: 1,
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          color: "#f00",
          wireFrame: false,
        });
      }),
    }));
  return (
    <Box
      args={[2, 2, 2]}
      scale={scale}
      position={[positionX, positionY, positionZ]}
    >
      <meshStandardMaterial color={color} wireframe={wireFrame} />
    </Box>
  );
};
