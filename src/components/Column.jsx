import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";


export const Column = (props) => {
    const column = useRef();
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
                <mesh 
                    key={rep}
                    name="Box"
                    castShadow
                    geometry={props.geometry}
                    materials={props.materials.Cube}
                    position={[0, posY - newSizeY * 0.5, 0]}
                    scale={[1, scaleY, 1]}
                    onPointerOver={(event) => {
                        event.stopPropagation();
                        event.eventObject.material = props.materials.Hex;
                    }}
                    onPointerOut={(event) => {
                        event.stopPropagation();
                        event.eventObject.material = props.materials.Cube;
                    }}
                />
            );
        }
        setBoxes(result);
        setWeight(totalWeight);
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        column.current.position.y += (Math.sin(time * 1.5) / 1000);
    });   

    return (
        <group
            ref={column}
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
                {...props.datGUI}
            >
                {columnWeight}%
            </Text>
        </group>
    );
};