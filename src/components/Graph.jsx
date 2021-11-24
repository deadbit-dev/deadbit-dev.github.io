import React, { useEffect, useState } from "react";
import { useGLTF } from '@react-three/drei';
import { Hex } from "./Hex";
import { Column } from "./Column";
import scene from '../assets/scene.glb';


useGLTF.preload(scene);

export const Graph = (props) => {
    const { nodes, materials } = useGLTF(scene);
    const [columns, setColumns] = useState([]);
    const sizeXBox = Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x);
    const distXBox = sizeXBox * 0.5;
    const startXBox = 0;

    useEffect(() => {
        const result = new Array();
        for (const [lang, reps, posX = posX ?? startXBox] of Object.entries(props.data)){
            result.push(
                <Column 
                    key={lang}
                    nodes={nodes}
                    materials={materials}
                    posX={posX}
                    reps={reps}
                />
            );
            posX += sizeXBox + distXBox;
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