import React, { useEffect, useState } from "react";
import { useGLTF } from '@react-three/drei';
import { Vector3 } from "three";
import { Hex } from "./Hex";
import { Column } from "./Column";
import scene from '../assets/scene.glb';


useGLTF.preload(scene);

export const Graph = (props) => {
    const { nodes, materials } = useGLTF(scene);
    const [columns, setColumns] = useState([]);
    const sizeX = Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x);
    const distX = sizeX * 0.5;
    const dataArray = Object.entries(props.data);
    const startX = 0 - (dataArray.length - 1) * (sizeX + distX) * 0.5;
    const startY = nodes.Hex.geometry.boundingBox.max.y;
    
    // after mount component - start
    useEffect(() => {
        const result = new Array();
        for (const [lang, reps, posX = posX ?? startX, id = id ?? 0] of dataArray){
            result.push(
                <Column 
                    key={lang}
                    nodes={nodes}
                    materials={materials}
                    position={new Vector3(posX, startY, 0)}
                    reps={reps}
                    id={id++}
                />
            );
            posX += sizeX + distX;
        }
        setColumns(result);
    }, []);

    return (
        <group>
            <Hex 
                nodes={nodes}
                materials={materials}
                position={[0, 0, 0]}
            />
            {columns}
        </group>
    );
};