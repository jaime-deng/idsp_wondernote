import React from 'react';
import './header.css';

const Header = ({text, fontSize, color}) => <div>
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

Header.defaultProps = {
    fontSize: "42px",
    color: "#0b0c0c",
    text:"Header"
}

export default Header;