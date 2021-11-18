import React from 'react';
import { Canvas } from '@react-three/fiber';

import { Scene } from './Scene';


export const Body = () => {
    return (
        <Canvas shadows dpr={Math.max(window.devicePixelRatio, 2)} camera={{ position: [0, 2.5, 3.5], fov: 50 }}>
            <Scene />
        </Canvas>
    );
};