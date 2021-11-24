import React, { useEffect, useState } from "react";
import { Box } from "./Box";

export const Column = (props) => {
    const [boxes, setBoxes] = useState([]);
    const sizeBoxY = Math.abs(props.nodes.Cube.geometry.boundingBox.min.y - props.nodes.Cube.geometry.boundingBox.max.y);
    const startBoxY = props.nodes.Hex.geometry.boundingBox.max.y + sizeBoxY * 0.5;

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
                    position={[props.posX, posY - newSizeY * 0.5, 0]}
                    scale={[1, scaleY, 1]}
                />
            );
        }
        setBoxes(result);
    }, []);

    return (
        <group 
            onClick={(event) => {
                console.log(event.eventObject);
                event.eventObject.children.forEach((value, index) => {
                    // FIXME: mb state
                });
            }}
        >
            {boxes}
        </group>
    );
};