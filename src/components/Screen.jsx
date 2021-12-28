import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';
import FPSStats from "react-fps-stats";
import ThemeSwitch from './ThemeSwitch';
import Preloader from './Preloader';

const Scene = lazy(() => import("./Scene"));

export default function Screen() {
    const ref = useRef();
    
    if(window.screen.orientation) {
        const [angle, setAngle] = useState(window.screen.orientation.angle);
        window.screen.orientation.onchange = (event) => {
            setAngle(event.currentTarget.angle);
        };

        useEffect(() => {
            switch(angle){
                case 0:
                    ref.current.style.display = "block";
                    document.body.classList.remove("turnDeviceNotification");
                    break;
                case 180:
                    ref.current.style.display = "block";
                    document.body.classList.remove("turnDeviceNotification");
                    break;
                case 90:
                    ref.current.style.display = "none";
                    document.body.classList.add("turnDeviceNotification");
                    break;
                case -90:
                    ref.current.style.display = "none";
                    document.body.classList.add("turnDeviceNotification");
                    break;
            }
        });
    }

    return (
        <div 
            ref={ref}
            id="screen"
        >
            {/* <FPSStats /> */}
            <ThemeSwitch />
            <Suspense fallback={<Preloader/>}>
                <Scene />
            </Suspense>
        </div>
    );
}