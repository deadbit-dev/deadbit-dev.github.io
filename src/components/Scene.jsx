import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF} from '@react-three/drei';
import { API, APIParser } from '../utils/API';
import scene from '../assets/scene.glb';


useGLTF.preload(scene);

export const Scene = () => {
    const { nodes, materials } = useGLTF(scene);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        const response = API();
        const items = APIParser(
            response,
            Math.abs(nodes.Cube.geometry.attributes.position.array[0])
        );
        setItems(items);
    }, []);

    return (
        <Canvas shadows dpr={Math.max(window.devicePixelRatio, 2)} camera={{ position: [0, 2.5, 3.5], fov: 50 }}>
            <ambientLight intensity={0.7} />
            <directionalLight
                castShadow
                position={[-5, 10, -5]}
                intensity={0.5}
            />
            <group>
                <mesh 
                    receiveShadow
                    geometry={nodes.Hex.geometry} 
                    material={materials.hex}
                />
                <group>
                    {items.map(item => (
                        <mesh 
                            key={item.key}
                            castShadow
                            geometry={nodes.Cube.geometry}
                            material={materials.cube}
                            position={item.position}
                            scale={item.scale}
                            onPointerOver={(event) => {
                                event.eventObject.material = materials.hex;
                            }}
                            onPointerOut={(event) => {
                                event.eventObject.material = materials.cube;
                            }}
                            onClick={(event) => {
                                console.log(event);
                            }}
                        />     
                    ))}
                </group>
            </group>
            <Environment preset="city" />
            <OrbitControls 
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false} 
                enablePan={false} 
            />
        </Canvas>
    );
};