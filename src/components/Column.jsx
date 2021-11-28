import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { Box } from "./Box";
import { datGUI } from "../utils/Settings";
import invert from "invert-color";


export const Column = (props) => {
    const ref = useRef();
    const snap = useSnapshot(datGUI)
    const [isActive, setActive] = useState(false);

    const dataArray = Object.entries(props.reps);
    const boxes = new Array();

    let columnWeight = 0;
    let posY = props.sizeY * 0.5;
    for (const [rep, weight] of dataArray){
        const scaleY = weight / 10;
        columnWeight += weight;
        const sizeY = props.sizeY * scaleY;
        posY += sizeY;
        boxes.push(
            <Box 
                key={rep}
                geometry={props.geometry}
                materials={props.materials}
                position={[0, posY - sizeY * 0.5, 0]}
                scale={[1, scaleY, 1]}
                sizeY={props.sizeY}
                isActive={isActive && (dataArray.length - 1)}
                weight={weight}
            /> 
        );
    }

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        ref.current.position.y += Math.sin(time) / 1000;
    });
    
    return (
        <group
                name="Column"
                position={props.position} 
        >
            <Text
                name="WeightColumnText"
                anchorX="center"
                anchorY="middle"
                position={[0, 0.01, 0]}
                rotation={[-1.57, 0, 0]}
                fontSize={0.07}
                color={snap.color}
            >
                {columnWeight}%
            </Text>
            <group
                ref={ref}
                onClick={(event) => {
                    event.stopPropagation();
                    if(event.eventObject.children.length <= 2)
                        return null;
                    setActive(!isActive);
                    event.eventObject.children.forEach((value, index) => {
                        value.position.y += (active ? -props.distY : props.distY) * index;
                        value.children.forEach((value) => {
                            if(value.name == "BoxMesh")
                                value.material = props.materials.Cube;
                        });
                    });  
                }}
                onPointerOver={(event) => {
                    if(isActive)
                        return null;
                    event.stopPropagation();
                    event.eventObject.children.forEach((value) => { 
                        if(value.name == "Box")
                            value.children.forEach((value) => {
                                if(value.name == "BoxMesh")
                                    value.material = props.materials.Hex;
                            });
                    });
                }}
                onPointerOut={(event) => {
                    if(isActive)
                        return null;
                    event.stopPropagation();
                    event.eventObject.children.forEach((value) => { 
                        value.children.forEach((value) => {
                            if(value.name == "BoxMesh")
                                value.material = props.materials.Cube;
                        });
                    });
                }}
            >
                {boxes}
                <Text
                    name="LangText"
                    position={[0, posY+0.05, 0]}
                    anchorX="center"
                    anchorY="middle"
                    fontSize={0.06}
                    color={invert(snap.color)}
                > 
                    {props.lang}
                </Text>
            </group>
        </group>
    );
};