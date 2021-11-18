import React, { Suspense} from 'react';
import { Environment, OrbitControls} from '@react-three/drei';

import Model from './Model';

export const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.7} />
            <directionalLight
                castShadow
                position={[-5, 10, -5]}
                intensity={0.5}
            />
            <Suspense fallback={null}>
                <Model />
                <Environment preset="city" />
            </Suspense>
            <OrbitControls 
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false} 
                enablePan={false} 
            />
       </>
    );
};