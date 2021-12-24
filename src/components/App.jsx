import React, { lazy, Suspense } from "react";
import { isWebGLAvailable, isWebGL2Available } from "../utils/webgl";
import Preloader from "./Preloader";


const Screen = lazy(() => import("./Screen"));

export default function App() {
    const isAvailable = isWebGLAvailable() || isWebGL2Available();
    
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
