import React, { useState } from "react";
import { Text } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { preset } from "../utils/preset";
import fonts from "../utils/fonts";
import Box from "./Box";


export default function Column(props) {
    //console.log("Column");
    const snapPreset = useSnapshot(preset);
    const [isClick, click] = useState(false);

    const reps = Object.entries(props.reps);
    const startY = 0;
    const boxes = new Array();
    
    let columnWeight = 0;
    let columnScaleY = 0;
    let columnSizeY = 0;
    let columnPosY = startY; 

    let idx = 0;
    for (const [rep, weight] of reps){
        const scaleY = weight / 10;
        const sizeY = props.size.y * scaleY;
        
        columnWeight += weight;
        columnScaleY += scaleY;
        columnSizeY += sizeY; 
        columnPosY += sizeY;

        boxes.push(
            <Box 
                key={rep}
                geometry={props.geometry}
                materials={props.materials}
                position={[0, (columnPosY - sizeY * 0.5) + props.distY * idx++, 0]}
                scale={[1, scaleY, 1]}
                size={props.size}
                weight={weight}
            />
        );
    }

    const Column = (
        <Box 
            geometry={props.geometry}
            materials={props.materials}
            position={[0, columnPosY - columnSizeY * 0.5, 0]}
            scale={[1, columnScaleY, 1]}
            size={props.size}
            weight={columnWeight}
            onClick={(event) => {
                event.stopPropagation();
                click(!isClick);
            }}
       /> 
    );

    return (
        <group
                name="Column"
                position={props.position} 
        >
            <Text
                name="LangText"
                textAlign="center"
                anchorX="center"
                anchorY="middle"
                fontSize={0.07}
                font={fonts["VT323"]}
                color={snapPreset.darkTheme ? "#fff" : "#000"}
                position={[0, 0.01, props.size.x]}
                rotation={[-1.57, 0, 0]}
            >
                {props.lang}
            </Text>
            {isClick || boxes.length == 1 ? boxes : Column}
        </group>
    );
}