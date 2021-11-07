import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";


export const ParallaxComponent = (props) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            clipRelativeInput: true,
            pointerEvents: true
        });
        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    });

    return (
        <div ref={sceneEl}>
          <div className="layer"
            data-depth="0.7"
          >
            {props.children}
          </div>
        </div>
    );
};
