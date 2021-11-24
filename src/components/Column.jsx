import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "./Box";

export const Column = (props) => {
    const column = useRef();
    const [boxes, setBoxes] = useState([]);
    const [active, setActive] = useState(false);
    const sizeBoxY = Math.abs(props.nodes.Cube.geometry.boundingBox.min.y - props.nodes.Cube.geometry.boundingBox.max.y);
    const startBoxY = sizeBoxY * 0.5;
    const distY = sizeBoxY * 0.5;
    
    // after mount component - start
    useEffect(() => {
        const result = new Array();
        for (const [rep, weight, posY = posY ?? startBoxY] of Object.entries(props.reps)){
            const scaleY = weight / 10;
            const newSizeY = sizeBoxY * scaleY;
            posY += newSizeY;
            result.push(
                <Box 
                    key={rep}
                    nodes={props.nodes}
                    materials={props.materials}
                    position={[0, posY - newSizeY * 0.5, 0]}
                    scale={[1, scaleY, 1]}
                />
            );
        }
        setBoxes(result);
    }, []);

    // update
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        column.current.position.y += (Math.sin(time * 1.5) / 1000);
    });   

    return (
        <group 
            ref={column}
            position={props.position} 
            onClick={(event) => {
                event.stopPropagation();
                setActive(!active);
                event.eventObject.children.forEach((value, index) => {
                    value.position.y += (active ? 0-distY : distY) * index; 
                });  
            }}
        >
            {boxes}
        </group>
    );
};