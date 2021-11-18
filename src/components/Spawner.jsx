import React, { useEffect, useState } from 'react';


export const Spawner = (props) => {
    const [elements, setElements] = useState(null);

    const scaleByWeight = (weight) => {
        // TODO: return scale [ , , ]
    };

    const posYByScale = (scale) => {
        // TODO: return position by Y
    };

    const cfXByCount = (count) => {
        // TODO: return cf by X
    };

    const cfYByCount = (count) => {
        // TODO: return cf by Y
    };

    const genMesh = (position, scale) => {
        return (
            <mesh
                castShadow
                receiveShadow
                {...props}
                position={position}
                scale={scale}
            />
        );
    };

    const generator = (data) => {
        let result = null;
        const KEY = 0;
        const VALUE = 1;
        const dataArray = Object.entries(data);
        const cfX = cfXByCount(dataArray.length);

        dataArray.forEach((lang, langIndex) => {
            const weightsArray = Object.entries(lang[VALUE]);
            const cfY = cfYByCount(weightsArray.length);
            weightsArray.forEach((repo, repoIndex) => {
                const weight = repo[VALUE];
                const scale = scaleByWeight(weight);
                const posX = cfX * langIndex;
                const posY = cfY * repoIndex + posYByScale(scale);
                const position = [posX, posY, 0];
                result.push(genMesh(position, scale));
            });
        });

        setElements(result);
   };

    useEffect(() => {
        // TODO: call API return data
        generator({
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
        });
    });

    return (
        <group>
            {elements}
        </group>
    );
};