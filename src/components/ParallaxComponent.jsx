import React, { useEffect, useRef } from "react";
import Parallax from "parallax-js";


export const ParallaxLayer = (props) => {
    return (
        <div data-depth={props.depth}>
          {props.children}
        </div>
    );
};

export const ParallaxScene = (props) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(
            sceneEl.current,
            props.config
        );
        parallaxInstance.scalar(1.0, 1.0);
        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    });

    return (
        <div ref={sceneEl}>
          {props.children}
        </div>
    );
};
