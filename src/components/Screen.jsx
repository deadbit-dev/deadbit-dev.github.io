import React from 'react';
import DatGui, { DatColor, DatFolder, DatNumber } from 'react-dat-gui';
import { proxy, useSnapshot } from 'valtio';
import "../../node_modules/react-dat-gui/dist/index.css";
import { Scene } from './Scene';


export const datGUI = proxy({
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
                <DatColor path="color" />
            </DatGui>
        </div>
    );
};