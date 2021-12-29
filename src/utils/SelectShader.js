import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

import vertexShader from "../assets/shaders/select.vert";
import fragmentShader from "../assets/shaders/select.frag";

const selectShader = shaderMaterial(
    // Uniform
    {
        uColor: new THREE.Color(0.0, 0.0, 0.0)
    }, 
    // Vertex Shader
    vertexShader,
    // Fragment Shader
    fragmentShader
);

export { selectShader };