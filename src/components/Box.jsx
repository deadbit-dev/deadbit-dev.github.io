import React, { useState } from "react";
import { Text } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { datGUI } from "../utils/Settings";


export const Box = (props) => {
    const snap = useSnapshot(datGUI);
    const [isHover, hover] = useState(false);

    const WeightText = (
        <Text
            name="BoxWeightText"
            anchorX="center"
            anchorY="middle"
            fontSize={0.06}
            fillOpacity={0}
            strokeWidth={'1%'}
            strokeColor={snap.color}
            position={[0, 0, props.size.z * 0.5 + 0.01]}
        >
            {props.weight}%
        </Text>
    );      
    
    return (
        <group
            name="Box"
            position={props.position}
            onClick={props.onClick}
            onPointerOver={(event) => {
                event.stopPropagation();
                hover(true);
                event.eventObject.children.forEach((value) => {
                    if(value.name == "BoxMesh")
                        value.material = props.materials.Hex;
                });
            }}
            onPointerOut={(event) => {
                event.stopPropagation();
                hover(false);
                event.eventObject.children.forEach((value) => {
                    if(value.name == "BoxMesh")
                        value.material = props.materials.Cube;
                });
            }}
 
       >
            <mesh
                name="BoxMesh"
                castShadow
                geometry={props.geometry}
                material={props.materials.Cube}
                scale={props.scale}
            />
            {isHover ? WeightText : null}
        </group>
    );
};