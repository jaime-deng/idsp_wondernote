import React, { useState, useEffect } from 'react';
import './leftmenu.css';
import Button, { Delete, Favorite, Search, Expand, Avatar } from "../../comps/Button"
import Header from "../../comps/Header"
import Category from "../../comps/Category"
import UnderCategory from "../../comps/UnderCategory"
import Searchbar from "../../comps/Searchbar"

const LeftMenu = () => {
    return <div className="Left-Menu">
        <div className="Profile">
            <Avatar/>
            <Header
                text="Profile Name"
            />
        </div>
        <div className="Categories">
            <Category />
            <div className="Category-Expanded">
                <div className="Category-Above"><Category /></div>
                <div className="Under-Category">
                    <UnderCategory />
                    <div className="Expand-Button">
                        <Expand/>
                    </div>
                </div>
            </div>
        </div>
        <div className="Fav-Del">
            <Favorite />
            <Delete />
        </div>
        <div className="Search-Bar">
            <Searchbar />
            <Search />
        </div>
    </div>
}

export default LeftMenu;