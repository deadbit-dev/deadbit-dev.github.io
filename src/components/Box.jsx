import React from "react";

export const Box = (props) => {
    return (
        <mesh
            castShadow
            geometry={props.nodes.Cube.geometry}
            materials={props.materials.Cube}
            position={props.position}
            scale={props.scale}
            onClick={(event) => {
                console.log('https://github.com/deadbit-dev');
            }}
            onPointerOver={(event) => {
                event.stopPropagation();
                event.eventObject.material = props.materials.Hex;
            }}
            onPointerOut={(event) => {
                event.stopPropagation();
                event.eventObject.material = props.materials.Cube;
            }}
        />
    )
};