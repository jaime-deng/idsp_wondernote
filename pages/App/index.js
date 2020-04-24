import React, { useState, useEffect } from 'react';
import './app.css';
import LeftMenu from "../../pages/LeftMenu"
import RightPage from "../../pages/RightPage"


const App = () => {
    return <div className="App">
        <LeftMenu />
        <RightPage />
    </div>
}

export default App;