import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls} from '@react-three/drei';
import { Graph } from './Graph';
import { API } from "../utils/API";


export const Scene = () => {
    const [data, setData] = useState();
    
    // after mount component - start
    useEffect(() => {
        const response = API();
        setData(response);
    }, []);

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
                <Graph data={data} />
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