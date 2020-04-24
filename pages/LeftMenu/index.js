import React, { useState, useEffect } from 'react';
import './leftmenu.css';
import Button from "../../comps/Button"
import Header from "../../comps/Header"
import Category from "../../comps/Category"
import UnderCategory from "../../comps/UnderCategory"
import Searchbar from "../../comps/Searchbar"

const LeftMenu = () => {
    return <div className="Left-Menu">
        <div className="Profile">
            <Button
                color="#FFFFFF"
                img="avatarImg"
                width="150px"
                height="150px"
            />
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
                        <Button
                            color="#DBDCDD"
                            img="plusImg"
                            width="50px"
                            height="50px"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="Fav-Del">
            <Button
                color="#F4CE35"
            />
            <Button
                color="#EF5050"
                img="trashImg"
            />
        </div>
        <div className="Search-Bar">
            <Searchbar />
            <Button
                color="#73A6FC"
                img="searchImg"
            />
        </div>
    </div>
}

export default LeftMenu;