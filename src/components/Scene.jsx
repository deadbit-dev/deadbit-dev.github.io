import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Graph from "./Graph";


export default function Scene() {
    return (
        <Canvas
            shadows 
            dpr={Math.max(window.devicePixelRatio, 2)} 
            camera={{ position: [0, 2.5, 3.5], fov: 50 }}
        >
            <spotLight
                castShadow
                position={[-5, 10, -5]}
                angle={0.5}
            />
            <Graph />
            <Environment preset="city" />
            <OrbitControls 
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false} 
                enablePan={false} 
            />
        </Canvas>
    );
}