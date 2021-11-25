import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Graph } from "./Graph";


export const Scene = (props) => {
    return (
        <Canvas 
            shadows 
            dpr={Math.max(window.devicePixelRatio, 2)} 
            camera={{ position: [0, 2.5, 3.5], fov: 50 }}
        >
            <ambientLight intensity={1.0} />
            <directionalLight
                castShadow
                position={[-5, 10, -5]}
                intensity={0.5}
            />
            <Suspense fallback={null}>
                <Graph datGUI={props.datGUI} />
                <Environment preset="city" />
            </Suspense>
            <OrbitControls 
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false} 
                enablePan={false} 
            />
        </Canvas>
    );
};