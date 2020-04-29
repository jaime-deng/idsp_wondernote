import React from 'react';
import './colors.css';

const colors = ({text, color, tcolor, size, onClick}) => <div
style={{backgroundColor:color, color:tcolor, text:text, fontSize:size, boxShadow: "0 0 6px"+color}}
className="TBS-Box"
onClick={onClick}
>
    <div className="TBS-Inner"></div>
    <div className="TBS-text">
        <p>Apply color to text</p>
        <img src={require('./colors.png')}></img>
    </div>
</div>

colors.defaultProps = {
    color: "#f4f4f4",
    tcolor: "#979797",
    text: "font-size",
    size: "18px",
}

export default colors;