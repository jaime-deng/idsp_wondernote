import React from 'react';
import './tb-s.css';

const ToolbarSingle = ({text, color, onClick}) => <div
style={{backgroundColor:color, boxShadow: "0 0 6px"+color}}
className="TBS-Box"
onClick={onClick}
>
    <div className="TBS-Inner">{text}</div>
</div>

ToolbarSingle.defaultProps = {
    color: "#f4f4f4",
    text: "font-size"
}

export default ToolbarSingle;