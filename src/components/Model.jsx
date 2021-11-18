import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';

import graph from '../assets/graph.glb';


export const Model = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(graph);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh 
        receiveShadow
        geometry={nodes.Hex.geometry} 
        material={materials.hex}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.cube}
        position={[-0.5, 0.33, 0]}
        scale={[1, 2, 1]}
      />      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.cube}
        position={[-0.25, 0.55, 0]}
        scale={[1, 5, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.cube}
        position={[0, 0.4, 0]}
        scale={[1, 3, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.cube}
        position={[0.25, 0.33, 0]}
        scale={[1, 2, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.cube}
        position={[0.5, 0.55, 0]}
        scale={[1, 5, 1]}
      />
    </group>
  );
};

useGLTF.preload(graph);
