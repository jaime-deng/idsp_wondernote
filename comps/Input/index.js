import React from 'react';
import './input.css';
import Header from "../Header";

const Input = ({text, inputcolor, onClick}) => <div
    stype={{backgroundColor: inputcolor, boxShadow: "0 0 6px" + inputcolor}}
    className="Input-box"
    onClick={onClick}
>
    <div className="Input-box-inner">
        {text}
    </div>
</div>

Input.defaultProps = {
    text: "Email",
    inputcolor: "FFFFFF",
}

export default Input;