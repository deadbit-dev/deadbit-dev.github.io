import React from 'react';
import DatGui, { DatColor } from 'react-dat-gui';
import { useSnapshot } from 'valtio';
import { Scene } from './Scene';
import { datGUI } from '../utils/Settings';


export const Screen = () => {
    const snap = useSnapshot(datGUI);
    return (
        <div id="screen">
            <DatGui data={snap} onUpdate={(newData) => {
                for(const [key, value] of Object.entries(newData))
                    datGUI[key] = value;
            }}>
                <DatColor path="color" />
            </DatGui>
            <Scene />
        </div>
    );
};