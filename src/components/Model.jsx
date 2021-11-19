import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';

import { Spawner } from './Spawner';
import graph from '../assets/graph.glb';


export const Model = (props) => {
  const { nodes, materials } = useGLTF(graph);

  return (
    <group {...props} dispose={null}>
      <mesh 
        receiveShadow
        geometry={nodes.Hex.geometry} 
        material={materials.hex}
      />
      <Spawner
        castShadow
        receiveShadow 
        geometry={nodes.Cube.geometry}
        material={materials.cube}
        originalScale={0.08}
      />      
    </group>
  );
};

useGLTF.preload(graph);
