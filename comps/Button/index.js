import React from 'react';
import './button.css';


const starImg = require('./star.png');
const trashImg = require('./trash.png');
const searchImg = require('./search.png');
const plusImg = require('./plus.png');
const avatarImg = require('./star.png');


const Button = ({color, width, height, img, onClick}) => <div
style={{backgroundColor:color, width:width, height:height, boxShadow: "0 0 6px"+color}}
className="Btn-Box"
onClick={onClick}
>
    <div><img className="Btn-Icon" src={img} /></div>
</div>

Button.defaultProps = {
    color: "#73a6fc",
    img:starImg,
    width: "85px",
    height: "85px"
}

export default Button;