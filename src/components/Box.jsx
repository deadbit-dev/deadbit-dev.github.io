import React from "react";
import { Text } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { datGUI } from "../utils/Settings";
import invert from "invert-color";


export const Box = (props) => {
    const snap = useSnapshot(datGUI);

    const weight = (
        <Text
            name="BoxWeightText"
            position={[0, props.sizeY * 0.5 + 0.01, 0]}
            rotation={[-1.57, 0, 0]}
            anchorX="center"
            anchorY="middle"
            fontSize={0.06}
            color={invert(snap.color)}
        >
            {props.weight}%
        </Text>
    );  

    return (
        <group
            name="Box"
            position={props.position}
            onPointerOver={(event) => {
                if(!props.isActive)
                    return null;
                event.stopPropagation();
                event.eventObject.children.forEach((value) => { 
                    switch(value.name){
                    case "BoxMesh": 
                        value.material = props.materials.Hex;
                        break;
                    case "BoxWeightText":
                        value.color = snap.color;
                        break;
                    }
                });
            }}
            onPointerOut={(event) => {
                if(!props.isActive)
                    return null;
                event.stopPropagation();
                event.eventObject.children.forEach((value) => { 
                    switch(value.name){
                    case "BoxMesh": 
                        value.material = props.materials.Cube;
                        break;
                    case "BoxWeightText":
                        value.color = invert(snap.color);
                        break;
                    }
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
            {props.isActive ? weight : null}
        </group>
    );
};