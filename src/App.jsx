import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { ConsolePage } from "./pages/consolePage";

function App() {
  return (
    <>
      <Loader />
      <Leva hidden/>
      {/* <ConsolePage/> */}
      <div style={{ position: "absolute", zIndex: 2, width: "100%", height: "auto", bottom: "0px" }}>
        <ConsolePage />
      </div>
      {/* <UI  /> */}
      <div style={{ position: "relative", top: 0, left: 0, width: "100%", height: "100%" }}>
        <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
      {/* <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
        <Experience />
      </Canvas> */}
    </>
  );
}

export default App;
