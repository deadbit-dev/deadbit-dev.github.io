import React from 'react';
import { Particles } from './Particles';


export const Background = () => {
    document.body.classList.add('bg');
    return (
        <div id="bg">
            <Particles />
            <div className="d-flex" style={{"height": "100vh"}}>
                <div 
                    className="align-self-end bg-image" 
                    style={{"width": "100vw", "height": "50vh", "z-index": "1"}}
                />
            </div>
        </div>
    );
};