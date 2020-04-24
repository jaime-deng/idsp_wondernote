import React from 'react';
import Button from "../comps/Button"

export default {
    title: "All Buttons",
};

export const Delete = () => 
<Button 
color = "#EF5050"
img = "trashImg"
/>

export const Favorite = () => 
<Button 
color = "#F4CE35"
/>

export const Search = () => 
<Button 
color = "#73A6FC"
img = "searchImg"
/>

export const AddNote = () => 
<Button 
color = "#73A6FC"
img = "plusImg"
/>

export const Expand = () => 
<Button 
color = "#DBDCDD"
img = "plusImg"
width = "50px"
height = "50px"
/>

export const Avatar = () => 
<Button 
color = "#FFFFFF"
img = "avatarImg"
width = "150px"
height = "150px"
/>