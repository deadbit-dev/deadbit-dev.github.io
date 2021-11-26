import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3 } from "three";
import { Column } from "./Column";
import { API } from "../utils/API";
import scene from "../assets/scene.glb";


useGLTF.preload(scene);

export const Graph = () => {
    const { nodes, materials } = useGLTF(scene);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const response = API();

        const result = new Array();
        const sizeX = Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x);
        const distX = sizeX * 0.5;
        const dataArray = Object.entries(response);
        const startX = 0 - (dataArray.length - 1) * (sizeX + distX) * 0.5;
        const startY = nodes.Hex.geometry.boundingBox.max.y;

        for (const [lang, reps, posX = posX ?? startX] of dataArray){
            result.push(
                <Column 
                    key={lang}
                    reps={reps}
                    geometry={nodes.Cube.geometry}
                    materials={materials}
                    position={new Vector3(posX, startY, 0)}
                />
            );
            posX += sizeX + distX;
        }
        setColumns(result);
    }, []);

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