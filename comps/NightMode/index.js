import React from 'react';
import './nightmode.css';

const NightMode = ({color, onClick}) => <div
    style={{color:color}}
>
    
        <div className="switch" onClick={onClick}>
            <input type="checkbox"></input>
            <span className="slider-round"></span>
        </div>

</div>


export default NightMode;