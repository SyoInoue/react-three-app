import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GeoBox } from "./components/GeoBox";
import GeoText from "./components/GeoText";
import { GeoText3D } from "./components/GeoText3D";

function App() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        {/* <GeoBox /> */}
        {/* <GeoText /> */}
        <GeoText3D />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
