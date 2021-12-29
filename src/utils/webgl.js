export const isWebGLAvailable = () => {
    try {
        const canvas = document.createElement("canvas");
        return !! (window.WebGLRenderingContext && (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")));
    } catch (error) {
        return false;
    }
};

export const isWebGL2Available = () => {
    try {
        const canvas = document.createElement("canvas");
        return !! (window.WebGL2RenderingContext && (canvas.getContext("webgl2")));
    } catch (error) {
        return false;
    }
};