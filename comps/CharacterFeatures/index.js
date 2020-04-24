import React from 'react';
import './characterfeatures.css';
import {GoBold} from 'react-icons/go';
import {FiItalic} from 'react-icons/fi';
import {MdFormatUnderlined} from 'react-icons/md';

const CharacterFeatures = ({text, color, tcolor, size, onClick}) => <div
style={{backgroundColor:color, color:tcolor, text:text, fontSize:size, boxShadow: "0 0 6px"+color}}
className="cf-Box"
onClick={onClick}
>
    <div className="cf-Inner">
        <div className="cf-Fnct">
            <GoBold />
        </div> {/* insert icon */}
        <div className="cf-Divider"></div>
        <div className="cf-Fnct">
           <FiItalic />
        </div> {/* insert icon */}
        <div className="cf-Divider"></div>
        <div className="cf-Fnct">
            <MdFormatUnderlined />
        </div> {/* insert icon */}
    </div>
</div>

CharacterFeatures.defaultProps = {
    color: "#f4f4f4",
    text: "font-size"
}

export default CharacterFeatures;