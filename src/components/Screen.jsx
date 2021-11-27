import React from 'react';
import DatGui, { DatColor, DatFolder, DatNumber, DatSelect } from 'react-dat-gui';
import { proxy, useSnapshot } from 'valtio';
import "../../node_modules/react-dat-gui/dist/index.css";
import { Scene } from './Scene';


export const datGUI = proxy({
    fontSize: 0.06,
    color: "#ffffff"
});

export const Screen = () => {
    const snap = useSnapshot(datGUI);
    return (
        <div id="screen">
            <Scene />
            <DatGui data={snap} onUpdate={(newData) => {
                for(const [key, value] of Object.entries(newData))
                    datGUI[key] = value;
            }}>
                <DatFolder title="text">
                    <DatNumber path="fontSize" min={0.0} max={1.0} step={0.01} />      
                    <DatColor path="color" />
                </ DatFolder>
            </DatGui>
        </div>
    );
};