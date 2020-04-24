import React from 'react';
import MyCategory from "../comps/Category"
import MyUnderCategory from "../comps/UnderCategory"



export default {
    title: "Category",
    Component: MyCategory, MyUnderCategory
};

export const MyCustomCategory = () => <MyCategory />

export const MyUnderCustomCategory = () => <MyUnderCategory />