import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import { Column } from "./Column";
import { API } from "../utils/API";
import scene from "../assets/scene.glb";


useGLTF.preload(scene);

export const Graph = () => {
    const { nodes, materials } = useGLTF(scene);
    const [response, setResponse] = useState({});

    useEffect(() => {
        const response = API();
        setResponse(response);
    }, []);

    const dataArray = Object.entries(response);

    const sizeX = Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x);
    const sizeY = Math.abs(nodes.Cube.geometry.boundingBox.min.y - nodes.Cube.geometry.boundingBox.max.y);
    const distX = sizeX * 0.5;
    const distY = sizeY * 0.5;
    const startX = 0 - (dataArray.length - 1) * (sizeX + distX) * 0.5;
    const startY = nodes.Hex.geometry.boundingBox.max.y;

    const columns = new Array();
    for (const [lang, reps, posX = posX ?? startX] of dataArray){
        columns.push(
            <Column 
                key={lang}
                lang={lang}
                reps={reps}
                geometry={nodes.Cube.geometry}
                materials={materials}
                position={new Vector3(posX, startY, 0)}
                sizeY={sizeY}
                distY={distY}
            />
        );
        posX += sizeX + distX;
    }

    return (
        <group name="Graph">
            <mesh
                name="Hex" 
                receiveShadow
                geometry={nodes.Hex.geometry}
                material={materials.Hex}
                position={[0, 0, 0]}
            />
            {columns}
        </group>
    );
};