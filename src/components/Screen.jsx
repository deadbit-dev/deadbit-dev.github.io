import React from "react";
import Container from 'react-bootstrap/Container';
import { ParallaxLayer, ParallaxScene } from "./ParallaxComponent";
import { Box } from "./Box";

import "./style.css";

export const Screen = (props) => {
    const parallaxConf = {
        relativeInput: true,
        pointerEvents: true
    };

    return <Container id="screen">
        <ParallaxScene config={parallaxConf}>
            <ParallaxLayer depth="0.7">
                <Box />
            </ParallaxLayer>
        </ParallaxScene>
    </Container>
};
