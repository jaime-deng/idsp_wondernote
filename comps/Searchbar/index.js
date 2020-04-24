import React from 'react';
import './searchbar.css';

const Searchbar = ({ text, color, onClick }) => <div
    style={{ backgroundColor: color, boxShadow: "0 0 6px" + color }}
    className="Searchbar-Box"
    onClick={onClick}
>
    <div className="Searchbar-Box-Inner">
        {text}
    </div>
</div>

Searchbar.defaultProps = {
    text: "Search notes...",
    color: "#FFFFFF",
}

export default Searchbar;