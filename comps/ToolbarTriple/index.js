import React from 'react';
import './tb-t.css';

const ToolbarTriple = ({text, color, onClick}) => <div
style={{backgroundColor:color, boxShadow: "0 0 6px"+color}}
className="TBT-Box"
onClick={onClick}
>
    <div className="TBT-Inner">
        <div className="TBT-Fnct"></div> {/* insert icon */}
        <div className="TBT-Divider"></div>
        <div className="TBT-Fnct"></div> {/* insert icon */}
        <div className="TBT-Divider"></div>
        <div className="TBT-Fnct"></div> {/* insert icon */}
    </div>
</div>

ToolbarTriple.defaultProps = {
    color: "#f4f4f4",
    text: "font-size"
}

export default ToolbarTriple;