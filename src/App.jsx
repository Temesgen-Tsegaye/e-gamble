import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Canvas, extend, useLoader, useThree, } from "@react-three/fiber";
import { OrbitControls ,OrthographicCamera} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { texture } from "three/examples/jsm/nodes/Nodes.js";
import Aa from "./chapters/particls";
import { PerspectiveCamera } from "@react-three/drei";
import Keno from "./routes/keno";

// gsap.registerPlugin(useGSAP);
function App() {
  
        
  return (
    <div className="w-[100vw] h-[100vh] bg-black" >
          <Keno/>
    </div>
  );
}

export default App;
