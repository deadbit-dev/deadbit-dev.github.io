import React, { lazy, Suspense } from 'react';
import FPSStats from "react-fps-stats";
import ThemeSwitch from './ThemeSwitch';
import Preloader from './Preloader';

const Scene = lazy(() => import("./Scene"));

export default function Screen() {
    return (
        <div id="screen">
            <FPSStats />
            <ThemeSwitch />
            <Suspense fallback={<Preloader/>}>
                <Scene />
            </Suspense>
        </div>
    );
}