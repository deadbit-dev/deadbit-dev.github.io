import React from "react";
import Container from 'react-bootstrap/Container';
import { ParallaxComponent } from "./ParallaxComponent";
import { Box } from "./Box";

import "./style.css";

export const Screen = (props) => (
    // TODO: bootstrap Container
    <Container id="screen">
        <ParallaxComponent>
            <Box />
        </ParallaxComponent>
    </Container>
);
