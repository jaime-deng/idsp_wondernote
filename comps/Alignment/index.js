import React from 'react';
import './alignment.css';
import {MdFormatAlignLeft} from 'react-icons/md';
import {MdFormatAlignRight} from 'react-icons/md';
import {MdFormatAlignCenter} from 'react-icons/md';

const Alignment = ({text, color, tcolor, size, onClick}) => <div
style={{backgroundColor:color, color:tcolor, text:text, fontSize:size, boxShadow: "0 0 6px"+color}}
className="align-Box"
onClick={onClick}
>
    <div className="align-Inner">
        <div className="align-Fnct">
            <MdFormatAlignLeft />
        </div> {/* insert icon */}
        <div className="align-Divider"></div>
        <div className="align-Fnct">
            <MdFormatAlignCenter />
        </div> {/* insert icon */}
        <div className="align-Divider"></div>
        <div className="align-Fnct">
            <MdFormatAlignRight />
        </div> {/* insert icon */}
    </div>
</div>

Alignment.defaultProps = {
    color: "#f4f4f4",
    text: "font-size"
}

export default Alignment;