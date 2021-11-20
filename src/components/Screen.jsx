import React, { Suspense } from 'react';
import { Scene } from './Scene';


export const Screen = () => {
    return (
        <div id="screen">
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </div>
    );
};