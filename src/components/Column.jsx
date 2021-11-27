import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useSnapshot } from "valtio";
import invert from "invert-color";
import { datGUI } from "./Screen";
import { Box } from "./Box";


export const Column = (props) => {
    const ref = useRef();
    const snap = useSnapshot(datGUI)
    const [active, setActive] = useState(false);

    const boxes = new Array();
    const sizeBoxY = Math.abs(props.geometry.boundingBox.min.y - props.geometry.boundingBox.max.y);
    const startBoxY = sizeBoxY * 0.5;
    const distY = sizeBoxY * 0.5;
    const dataArray = Object.entries(props.reps);

    let columnWeight = 0;
    let posY = startBoxY;
    for (const [rep, weight] of dataArray){
        const scaleY = weight / 10;
        columnWeight += weight;
        const newSizeY = sizeBoxY * scaleY;
        posY += newSizeY;
        boxes.push(
            <Box 
                key={rep}
                geometry={props.geometry}
                materials={props.materials}
                position={[0, posY - newSizeY * 0.5, 0]}
                scale={[1, scaleY, 1]}
                positionText={[0, newSizeY * 0.5 + 0.01, 0]}
                isActive={active && (dataArray.length - 1)}
                weight={weight}
            /> 
        );
    }

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const cnst = (Math.sin(time * 1.5) / 1000);
        //console.log(cnst);
        ref.current.position.y += cnst;
    });
    
    return (
        <group
                name="Column"
                position={props.position} 
        >
            <Text
                name="WeightColumnText"
                position={[0, 0.01, 0]}
                rotation={[-1.57, 0, 0]}
                anchorX="center"
                anchorY="middle"
                fontSize={snap.fontSize}
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
                    setActive(!active);
                    event.eventObject.children.forEach((value, index) => {
                        if(value.name == "Box" || value.name == "LangText") {
                            value.position.y += (active ? -distY : distY) * index;
                            value.children.forEach((value) => {
                                if(value.name == "BoxMesh")
                                    value.material = props.materials.Cube;
                            });
                        }
                    });  
                }}
                onPointerOver={(event) => {
                    if(active)
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
                    if(active)
                        return null;
                    event.stopPropagation();
                    event.eventObject.children.forEach((value) => { 
                        if(value.name == "Box" || value.name == "LangText")
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
                    fontSize={snap.fontSize}
                    color={invert(snap.color)}
                > 
                    {props.lang}
                </Text>
            </group>
        </group>
    );
};