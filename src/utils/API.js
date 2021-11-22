import { Vector3 } from "three";

export const API = () => {
    return {
        'cpp': {
            'repo3': 55
        },
        'python': {
            'repo1': 5,
            'repo2': 15
        },
        'js': {
            'repo2': 25,
            'repo1': 15
        },
        'css': {
            'repo3': 35
        }
    };
};

export const APIParser = (data, nodes) => {
    let result = new Array();
    let scale = new Vector3(1, 1, 1);
    let pos = new Vector3(0, 0, 0);
    const sizeX = Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x) * scale.x;
    const sizeY = Math.abs(nodes.Cube.geometry.boundingBox.min.y - nodes.Cube.geometry.boundingBox.max.y) * scale.y;
    const halfX = nodes.Cube.geometry.boundingBox.max.x * scale.x;
    const halfY = nodes.Cube.geometry.boundingBox.max.y * scale.y;
    const startX = nodes.Hex.geometry.boundingBox.min.x;
    const startY = nodes.Hex.geometry.boundingBox.max.y;
    const distanceX = sizeX / 2;
    const distanceY = 0;
    const dataArray = Object.entries(data);
    dataArray.forEach((lang, langIndex) => {
        const weightsArray = Object.entries(lang[1]);
        const offsetX = langIndex * (sizeX + distanceX);
        pos.setX(startX + distanceX + offsetX + halfX);
        pos.setY(startY);
        weightsArray.forEach((repo, repoIndex) => {
            const weight = repo[1];
            scale.setY(weight / 10); // FIXME: weight
            pos.setY(pos.y + scale.y * sizeY + distanceY * repoIndex);
            result.push({
                'key': langIndex.toString() + repoIndex.toString(),
                'position': [pos.x, pos.y - scale.y * halfY, pos.z],
                'scale': [scale.x, scale.y, scale.z]
            });
        });
    });
    return result;
};