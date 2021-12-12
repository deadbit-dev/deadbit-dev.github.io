import React, { useState } from "react";
import { Text } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { Box } from "./Box";
import { datGUI } from "../utils/Settings";


export const Column = (props) => {
    const snap = useSnapshot(datGUI)
    const [isClick, click] = useState(false);

    const reps = Object.entries(props.reps);
    const startY = props.size.y * 0.5;
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
                isActive={isClick}
                weight={weight}
                onClick={(event) => {
                    event.stopPropagation();
                    console.log(rep);
                }}
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
                fillOpacity={0}
                strokeWidth={'1%'}
                strokeColor={snap.color}
                position={[0, 0.01, 0]}
                rotation={[-1.57, 0, 0]}
            >
                {props.lang}
            </Text>
            {isClick ? boxes : Column}
        </group>
    );
};