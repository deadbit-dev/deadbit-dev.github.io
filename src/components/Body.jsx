import React from 'react';
import { Canvas } from '@react-three/fiber';
import { softShadows } from '@react-three/drei';

import { Scene } from './Scene';

//softShadows();

export const Body = () => {
    return (
        <Canvas shadows dpr={Math.max(window.devicePixelRatio, 2)} camera={{position: [0, 2.5, 3.5], fov: 50}}>
            <Scene />
        </Canvas>
    );
};