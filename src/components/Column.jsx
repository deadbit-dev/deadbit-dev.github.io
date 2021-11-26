import React, { useEffect, useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { useSnapshot } from "valtio";
import invert from "invert-color";
import { datGUI } from "./Screen";
import { Box } from "./Box";


export const Column = (props) => {
    const ref = useRef();
    const snap = useSnapshot(datGUI)
    const [boxes, setBoxes] = useState([]);
    const [active, setActive] = useState(false);
    const [columnWeight, setWeight] = useState(0);
    
    const sizeBoxY = Math.abs(props.geometry.boundingBox.min.y - props.geometry.boundingBox.max.y);
    const startBoxY = sizeBoxY * 0.5;
    const distY = sizeBoxY * 0.5;

    useEffect(() => {
        let result = new Array();
        let totalWeight = 0;
        for (const [rep, weight, posY = posY ?? startBoxY] of Object.entries(props.reps)){
            const scaleY = weight / 10;
            totalWeight += weight;
            const newSizeY = sizeBoxY * scaleY;
            posY += newSizeY;
            result.push(
                <Box 
                    key={rep}
                    geometry={props.geometry}
                    materials={props.materials}
                    position={[0, posY - newSizeY * 0.5, 0]}
                    scale={[1, scaleY, 1]}
                    weight={weight}
                /> 
            );
        }
        setBoxes(result);
        setWeight(totalWeight);
    }, []);

    return (
        <group
            ref={ref}
            name="Column"
            position={props.position} 
            onClick={(event) => {
                event.stopPropagation();
                setActive(!active);
                event.eventObject.children.forEach((value, index) => {
                    if(value.name == "Box")
                        value.position.y += (active ? -distY : distY) * index;
                });  
            }}
        >
            {boxes}
            <Text
                name="colText"
                position={[0, 0.01, 0]}
                rotation={[-1.57, 0, 0]}
                anchorX="center"
                anchorY="middle"
                fontSize={snap.fontSize}
                color={invert(snap.color)}
            >
                {columnWeight}%
            </Text>
        </group>
    );
};