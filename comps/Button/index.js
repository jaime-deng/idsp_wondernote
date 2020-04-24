import React from 'react';
import './button.css';


const starImg = require('./star.png');
const trashImg = require('./trash.png');
const searchImg = require('./search.png');
const plusImg = require('./plus.png');
const avatarImg = require('./user.png');


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

// ---

export const Delete = ({color, width, height, img, onClick}) => <div
style={{backgroundColor:color, width:width, height:height, boxShadow: "0 0 6px"+color}}
className="Btn-Box"
onClick={onClick}
>
    <div><img className="Btn-Icon" src={img} /></div>
</div>

Delete.defaultProps = {
    color: "#EF5050",
    img:trashImg,
    width: "85px",
    height: "85px"
}

// ---

export const Favorite = ({color, width, height, img, onClick}) => <div
style={{backgroundColor:color, width:width, height:height, boxShadow: "0 0 6px"+color}}
className="Btn-Box"
onClick={onClick}
>
    <div><img className="Btn-Icon" src={img} /></div>
</div>

Favorite.defaultProps = {
    color: "#F4CE35",
    img:starImg,
    width: "85px",
    height: "85px"
}

// ---

export const Search = ({color, width, height, img, onClick}) => <div
style={{backgroundColor:color, width:width, height:height, boxShadow: "0 0 6px"+color}}
className="Btn-Box"
onClick={onClick}
>
    <div><img className="Btn-Icon" src={img} /></div>
</div>

Search.defaultProps = {
    color: "#73a6fc",
    img:searchImg,
    width: "85px",
    height: "85px"
}

// ---

export const AddNote = ({color, width, height, img, onClick}) => <div
style={{backgroundColor:color, width:width, height:height, boxShadow: "0 0 6px"+color}}
className="Btn-Box"
onClick={onClick}
>
    <div><img className="Btn-Icon" src={img} /></div>
</div>

AddNote.defaultProps = {
    color: "#73a6fc",
    img:plusImg,
    width: "85px",
    height: "85px"
}

// ---

export const Expand = ({color, width, height, img, onClick}) => <div
style={{backgroundColor:color, width:width, height:height, boxShadow: "0 0 6px"+color}}
className="Btn-Box"
onClick={onClick}
>
    <div><img className="Btn-Icon" src={img} /></div>
</div>

Expand.defaultProps = {
    color: "#DBDCDD",
    img:plusImg,
    width: "70px",
    height: "70px"
}

// ---

export const Avatar = ({color, width, height, img, onClick}) => <div
style={{backgroundColor:color, width:width, height:height, boxShadow: "0 0 6px"+color}}
className="Btn-Box"
onClick={onClick}
>
    <div><img className="Btn-Icon" src={img} /></div>
</div>

Avatar.defaultProps = {
    color: "#FFFFFF",
    img:avatarImg,
    width: "150px",
    height: "150px"
}