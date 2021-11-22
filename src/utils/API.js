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
    let scaleX = 1;
    let scaleY = 1;
    let scaleZ = 1;
    let posX = 0;
    let posY = 0;
    let posZ = 0;
    const sizeX = Math.abs(nodes.Cube.geometry.boundingBox.min.x - nodes.Cube.geometry.boundingBox.max.x);
    const sizeY = nodes.Cube.geometry.boundingBox.max.y;
    const distanceX = sizeX / 2;
    const distanceY = 0;
    const dataArray = Object.entries(data);
    dataArray.forEach((lang, langIndex) => {
        const weightsArray = Object.entries(lang[1]);
        posX = nodes.Hex.geometry.boundingBox.min.x + langIndex * (scaleX * sizeX + distanceX) + distanceX * 2;
        posY = nodes.Hex.geometry.boundingBox.max.y;
        weightsArray.forEach((repo, repoIndex) => {
            const weight = repo[1];
            scaleY = weight / 10;
            posY += scaleY * sizeY + distanceY * repoIndex;
            result.push({
                'key': langIndex.toString() + repoIndex.toString(),
                'position': [posX, posY, posZ],
                'scale': [scaleX, scaleY, scaleZ]
            });
            posY += scaleY * sizeY;
        });
    });
    return result;
};