import React, { useState } from "react";
import { Text, useCursor } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { preset } from "../utils/preset";
import fonts from "../utils/fonts";


export default function Box(props) {
    //console.log("Box");
    const snapPreset = useSnapshot(preset);
    const [isHover, hover] = useState(false);
    
    useCursor(isHover, "pointer", "grab");

    return (
        <group
            name="Box"
            position={props.position}
            onClick={props.onClick}
            onPointerOver={(event) => {
                event.stopPropagation();
                hover(true);
            }}
            onPointerOut={(event) => {
                event.stopPropagation();
                hover(false);
            }}
 
       >
            <mesh
                name="BoxMesh"
                castShadow
                geometry={props.geometry}
                material={snapPreset.darkTheme ? props.materials.dark : props.materials.white}
                scale={props.scale}
            />
            <Text
                name="BoxWeightText"
                anchorX="center"
                anchorY="middle"
                fontSize={0.07}
                font={fonts["VT323"]}
                color={snapPreset.darkTheme ? "#fff" : "#000"}
                position={[0, 0, props.size.z * 0.5 + 0.01]}
            >
                {props.weight}%
            </Text>
        </group>
    );
}