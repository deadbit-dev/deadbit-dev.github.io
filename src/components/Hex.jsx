import React from "react";

export const Hex = (props) => {
    return (
        <mesh
            receiveShadow
            geometry={props.nodes.Hex.geometry}
            material={props.materials.Hex}
            position={props.position}
        />
    );
};

