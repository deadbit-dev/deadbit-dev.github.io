import React, { useState, useEffect } from 'react';
import Switch from "react-switch";
import { preset } from '../utils/preset';


export default function ThemeSwitch () {
    const [checked, setState] = useState(false);

    useEffect(() => {
        preset.darkTheme = checked;
        document.body.style.backgroundColor = checked ? "#202124" : "white";
    });
    
    return (
        <div className='theme-switch'>
            <Switch
                onChange={setState}
                checked={checked}
                offColor="#202124"
                onColor="#fff"
                offHandleColor="#fff"
                onHandleColor="#202124"
                activeBoxShadow=""
                uncheckedIcon={false}
                checkedIcon={false}
            />
        </div>
    );
}