import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Box args={[2, 2, 2]}>
          <meshStandardMaterial color="red" />
        </Box>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
