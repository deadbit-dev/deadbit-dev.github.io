import React, { lazy, Suspense } from "react";
import Preloader from "./Preloader";
import { isWebGL2Available } from "@react-three/drei";

const Screen = lazy(() => import("./Screen"));

export default function App() {
    const isAvailable = isWebGL2Available();
    
    const notSupport = (
        <h2>Not support WebGL from this app :(</h2>
    );

    const context = (
        <Suspense fallback={<Preloader/>}>
            <Screen />
        </Suspense>
    );

    return (
        <div id="App">
            { isAvailable ? context : notSupport }
        </div>
    );
}
