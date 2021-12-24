import React, { useEffect, useState } from "react";
import { Vector2, Vector3, Color, MeshStandardMaterial } from "three";
import { useGLTF } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { preset } from "../utils/preset";
import API from "../utils/API";
import Column from "./Column";
import scene from "../assets/models/scene.glb";


useGLTF.preload(scene);

const materials = {
    dark: new MeshStandardMaterial({ color: new Color('black') }),
    white: new MeshStandardMaterial({ color: new Color('white') }),
}

export default function Graph() {
    console.log("Graph");
    const snapPreset = useSnapshot(preset);
    const { nodes } = useGLTF(scene);
    const [response, setResponse] = useState({});

    useEffect(() => {
        const response = API();
        setResponse(response);
    }, []);

    const dataArray = Object.entries(response);
    const size = new Vector3(
        Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x),
        Math.abs(nodes.Cube.geometry.boundingBox.min.y - nodes.Cube.geometry.boundingBox.max.y),
        Math.abs(nodes.Cube.geometry.boundingBox.min.z - nodes.Cube.geometry.boundingBox.max.z)
    );
    const dist = new Vector2(
        size.x * 0.5,
        size.y * 0.5
    );
    const start = new Vector2(
        0 - (dataArray.length - 1) * (size.x + dist.x) * 0.5,
        nodes.Hex.geometry.boundingBox.max.y
    );

    const columns = new Array();
    for (const [lang, reps, posX = posX ?? start.x] of dataArray){
        columns.push(
            <Column 
                key={lang}
                lang={lang}
                reps={reps}
                geometry={nodes.Cube.geometry}
                materials={materials}
                position={new Vector3(posX, start.y, 0)}
                size={size}
                distY={dist.y}
            />
        );
        posX += size.x + dist.x;
    }

    return (
        <group name="Graph">
            <mesh
                name="Hex" 
                receiveShadow
                geometry={nodes.Hex.geometry}
                material={snapPreset.darkTheme ? materials.dark : materials.white}
                position={[0, 0, 0]}
            />
            {columns}
        </group>
    );
}