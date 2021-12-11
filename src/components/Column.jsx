import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { Box } from "./Box";
import { datGUI } from "../utils/Settings";


export const Column = (props) => {
    const ref = useRef();
    const snap = useSnapshot(datGUI)
    const [isClick, click] = useState(false);
    const [isHover, hover] = useState(false);

    const dataArray = Object.entries(props.reps);
    const isOne = !(dataArray.length - 1);
    const boxes = new Array();

    let columnWeight = 0;
    let posY = props.size.y * 0.5;
    for (const [rep, weight] of dataArray){
        const scaleY = weight / 10;
        columnWeight += weight;
        const sizeY = props.size.y * scaleY;
        posY += sizeY;
        boxes.push(
            <Box 
                key={rep}
                geometry={props.geometry}
                materials={props.materials}
                position={[0, posY - sizeY * 0.5, 0]}
                scale={[1, scaleY, 1]}
                size={props.size}
                isActive={isClick}
                weight={weight}
            /> 
        );
    }

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        ref.current.position.y += Math.sin(time) * 0.001;
    });

    const ColumnWeightText = (
        <Text
            name="BoxWeightText"
            anchorX="center"
            anchorY="middle"
            fontSize={0.06}
            fillOpacity={0}
            strokeWidth={'1%'}
            strokeColor={snap.color}
            // FIXME: easyer to calc position
            position={[0, props.size.y * 0.5 + posY * 0.5, props.size.z * 0.5 + 0.01]}
        >
            {columnWeight}%
        </Text>
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
            <group
                ref={ref}
                onClick={(event) => {
                    event.stopPropagation();
                    if(isOne)
                        return null;
                    click(!isClick);
                    event.eventObject.children.forEach((value, index) => {
                        value.position.y += (isClick ? -props.distY : props.distY) * index;
                        value.children.forEach((value) => {
                            if(value.name == "BoxMesh")
                                value.material = props.materials.Cube;
                        });
                    });  
                }}
                onPointerOver={(event) => {
                    event.stopPropagation();
                    hover(true);
                    if(isClick)
                        return null;
                    event.eventObject.children.forEach((value) => { 
                        if(value.name == "Box")
                            value.children.forEach((value) => {
                                if(value.name == "BoxMesh")
                                    value.material = props.materials.Hex;
                            });
                    });
                }}
                onPointerOut={(event) => {
                    event.stopPropagation();
                    hover(false);
                    if(isClick)
                        return null;
                    event.eventObject.children.forEach((value) => { 
                        value.children.forEach((value) => {
                            if(value.name == "BoxMesh")
                                value.material = props.materials.Cube;
                        });
                    });
                }}
            >
                {boxes}
                {!isClick && isHover ? ColumnWeightText : null}
            </group>
        </group>
    );
};