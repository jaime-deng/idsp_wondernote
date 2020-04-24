import React from 'react';
import LeftMenu from "../pages/LeftMenu"
import RightPage from "../pages/RightPage"
import App from "../pages/App"



export default {
    title: "Pages",
    Component: LeftMenu, RightPage, App
};

export const MyLeftMenu = () => <LeftMenu />
export const MyRightPage = () => <RightPage />
export const MyApp = () => <App />