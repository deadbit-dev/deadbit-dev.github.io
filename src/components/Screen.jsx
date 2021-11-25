import React, { useState } from 'react';
import DatGui, { DatColor, DatFolder, DatNumber, DatSelect } from 'react-dat-gui';
import { Euler, Vector3 } from 'three';
import "../../node_modules/react-dat-gui/dist/index.css";
import { Scene } from './Scene';


export const Screen = () => {
    const [opts, setOpts] = useState({
        anchorX: 'center',
        anchorY: 'middle',
        fontSize: 0.07,
        position: new Vector3(0, 0.01, 0),
        rotation: new Euler(-1.57, 0, 0),
        color: "#ffffff"
    });

    return (
        <div id="screen">
            <Scene datGUI={opts} />
            <DatGui data={opts} onUpdate={setOpts}>
                <DatFolder title="text">
                    <DatSelect path="anchorX" options={['left', 'center', 'right']}/>
                    <DatSelect path="anchorY" options={['top', 'middle', 'bottom']} />
                    <DatNumber path="fontSize" min={0.0} max={1.0} step={0.01} />      
                    <DatNumber path="position.x" label="posX" min={-1.0} max={1.0} step={0.01} />
                    <DatNumber path="position.y" label="posY" min={-1.0} max={1.0} step={0.01} />
                    <DatNumber path="position.z" label="posZ" min={-1.0} max={1.0} step={0.01} />
                    <DatNumber path="rotation.x" label="rotX" min={-6.28} max={6.28} step={0.01} />
                    <DatNumber path="rotation.y" label="rotY" min={-6.28} max={6.28} step={0.01} />
                    <DatNumber path="rotation.z" label="rotZ" min={-6.28} max={6.28} step={0.01} />
                    <DatColor path="color" />
                </ DatFolder>
            </DatGui>
        </div>
    );
};