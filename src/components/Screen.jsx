import React from 'react';
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import { ParallaxScene, ParallaxLayer } from './ParallaxComponent';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

export const Screen = () => {
    const parallaxConf = {
        // TODO: parametrs for scene
        pointerEvents: true
    };

    return (
        <div id="screen">
                    <ParallaxScene config={parallaxConf}>
                <ParallaxLayer depth="0.5" />
                <ParallaxLayer depth="1.0">
                    <div className="d-flex justify-content-center" style={{"height": "100vh"}}>
                        <div 
                            className="align-self-end bg-image" 
                            style={{"width": "100vw", "height": "50vh"}} 
                            onClick={()=> alert("click")}
                        />
                    </div>
                </ParallaxLayer>
            </ParallaxScene>
        </div>
    );
};