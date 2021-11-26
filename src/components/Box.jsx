import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import invert from "invert-color";
import { useSnapshot } from "valtio";
import { datGUI } from "./Screen";


export const Box = (props) => {
    const ref = useRef()
    const snap = useSnapshot(datGUI);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        ref.current.position.y += (Math.sin(time * 1.5) / 1000);
    });

    const showText = () => {
        if(!props.isActiveText)
            return null;
        return (
            <Text
                name="boxText"
                position={props.positionText}
                rotation={[-1.57, 0, 0]}
                anchorX="center"
                anchorY="middle"
                fontSize={snap.fontSize}
                color={snap.color}
            >
                {props.weight}%
            </Text>
        );  
    };

    return (
        <group
            ref={ref}
            name="Box"
            position={props.position}
            onPointerOver={(event) => {
                event.stopPropagation();
                event.eventObject.children.forEach((value) => { 
                    switch(value.name){
                    case "boxMesh": 
                        value.material = props.materials.Hex;
                        break;
                    case "boxText":
                        value.color = invert(value.color);
                        break;
                    }
                });
            }}
            onPointerOut={(event) => {
                event.stopPropagation();
                event.eventObject.children.forEach((value) => { 
                    switch(value.name){
                    case "boxMesh": 
                        value.material = props.materials.Cube;
                        break;
                    case "boxText":
                        value.color = invert(value.color);
                        break;
                    }
                });
            }}
        >
            <mesh
                name="boxMesh"
                castShadow
                geometry={props.geometry}
                material={props.materials.Cube}
                scale={props.scale}
            />
            {showText()}
        </group>
    );
};