export const API = () => {
    return {
        'cpp': {
            'repo1': 10,
            'repo3': 55
        },
        'python': {
            'repo1': 5,
            'repo2': 15
        },
        'js': {
            'repo2': 35
        },
        'ts': {
            'repo2': 5
        }
    };
};

export const APIParser = (data, size) => {
    let result = new Array();
    const distanceX = size;
    const distanceY = size;
    const offset = size*2;
    const dataArray = Object.entries(data);
    const count = dataArray.length - 1;
    const start = 0 - (count / 2) * (offset + distanceX);
    dataArray.forEach((lang, langIndex) => {
        const weightsArray = Object.entries(lang[1]);
        const posX = start + langIndex * (offset + distanceX);
        weightsArray.forEach((repo, repoIndex) => {
            const weight = repo[1];
            const yScale = weight / 10;
            const posY = yScale * size + repoIndex * (offset + distanceY) + distanceY;
            const position = [posX, posY, 0];
            const scale = [1, yScale, 1];
            const key = langIndex.toString() + repoIndex.toString();
            result.push({
                'key': key,
                'position': position,
                'scale': scale
            });
        });
    });

    return result;
};