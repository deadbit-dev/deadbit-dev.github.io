import React, { useEffect, useState } from 'react';


export const Spawner = (props) => {
    const [elements, setElements] = useState(null);

    const core = (data) => {
        let result = new Array();
        const distance = props.originalScale;
        const offset = props.originalScale*2;
        const dataArray = Object.entries(data);
        const count = dataArray.length - 1;
        const start = 0 - (count / 2) * (offset + distance);
        dataArray.forEach((lang, langIndex) => {
            const weightsArray = Object.entries(lang[1]);
            const posX = start + langIndex * (offset + distance);
            weightsArray.forEach((repo, repoIndex) => {
                const weight = repo[1];
                const yScale = weight / 10;
                const posY = yScale * props.originalScale + repoIndex * offset + distance;
                const position = [posX, posY, 0];
                const scale = [1, yScale, 1];
                const meshKey = langIndex.toString() + repoIndex.toString();
                result.push(
                    <mesh
                        {...props}
                        position={position}
                        scale={scale}
                        key={meshKey}
                    />
                );
            });
        });
        return result;
   };

   const api = () => {
       return {
            'cpp': {
                'repo1': 10
            },
            'python': {
                'repo1': 5,
                'repo2': 15
            },
            'js': {
                'repo2': 35
            }
        };
   };

    useEffect(() => {
        const data = api();
        const elements = core(data);
        setElements(elements);
    });

    return (
        <group>
            {elements}
        </group>
    );
};