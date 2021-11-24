import { Vector2 } from "three";

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
        }
    };
};

export const APIParser = (data, nodes, index) => {
    let result = new Array();
    let pos = new Vector2(0, 0);
    let scale = new Vector2(1, 1);
    const distance = new Vector2(0.05, 0.05);
    const start = new Vector2(
        nodes.Hex.geometry.boundingBox.min.x,
        nodes.Hex.geometry.boundingBox.max.y,
    );
    const half = new Vector2(
        nodes.Cube.geometry.boundingBox.max.x * scale.x,
        nodes.Cube.geometry.boundingBox.max.y * scale.y,
    );
    const size = new Vector2(
        Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x) * scale.x,
        Math.abs(nodes.Cube.geometry.boundingBox.min.y - nodes.Cube.geometry.boundingBox.max.y) * scale.y,
    );
    for(const [lang, reps, langIndex = langIndex ?? 0, repoIndex = 0] of Object.entries(data)){
        const offsetX = (size.x + distance.x) * langIndex;
        pos.setX(start.x + distance.x + offsetX + half.x);
        pos.setY(start.y);
        for(const [rep, weight] of Object.entries(reps)){
            scale.setY(weight / 10); // FIXME: weight
            pos.setY(pos.y + scale.y * size.y + (langIndex == index ? distance.y : 0) * repoIndex);
            result.push({
                'key': lang + rep,
                'position': [pos.x, pos.y - scale.y * half.y, 0],
                'scale': [scale.x, scale.y, 1]
            });
            ++repoIndex;
        }
        ++langIndex;
    }
    return result;
};