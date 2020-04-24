import React from 'react';
import './add.css';

const Add = ({text, color, tcolor, size, onClick}) => <div
style={{backgroundColor:color, color:tcolor, text:text, fontSize:size, boxShadow: "0 0 6px"+color}}
className="add-Box"
onClick={onClick}
>
    <div className="add-Inner">
        <div className="add-Fnct">
            <img src={require('./picture.png')}></img>
        </div> {/* insert icon */}
        <div className="add-Divider"></div>
        <div className="add-Fnct">
            <img src={require('./pdf.png')}></img>
        </div> {/* insert icon */}
        <div className="add-Divider"></div>
        <div className="add-Fnct">
            <img src={require('./list.png')}></img>
        </div> {/* insert icon */}
    </div>
</div>

Add.defaultProps = {
    color: "#f4f4f4",
    text: "font-size"
}

export default Add;