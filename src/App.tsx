import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

function App() {
  const { scale, positionX, positionY, positionZ, wireFrame, color } =
    useControls("Box", {
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
      color: "#f00",
      wireFrame: false,
    });
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Box
          args={[2, 2, 2]}
          scale={scale}
          position={[positionX, positionY, positionZ]}
        >
          <meshStandardMaterial color={color} wireframe={wireFrame} />
        </Box>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
