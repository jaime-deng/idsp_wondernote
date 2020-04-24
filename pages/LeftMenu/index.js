import React, { useState, useEffect } from 'react';
import './leftmenu.css';
import Button from "../../comps/Button"



const LeftMenu = () => {
    return <div className="Left-Menu">
        <div className="Profile">
            <Button 
            color = "#FFFFFF"
            img = "avatarImg"
            width = "150px"
            height = "150px"
            />
        </div>
    </div>
}

export default LeftMenu;