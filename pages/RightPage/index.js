import React, { useState, useEffect } from 'react';
import './rightpage.css';
import Add from "../../comps/Add";
import Colors from "../../comps/Colors";
import Alignment from "../../comps/Alignment";
import CharacterFeatures from "../../comps/CharacterFeatures";
import ToolbarSingle from "../../comps/ToolbarSingle";
import Header from "../../comps/Header";
import Button from "../../comps/Button";
import NightMode from "../../comps/NightMode";


const plusImg = require('./plus.png');

const RightPage = () => {
    return <div className="rightpage">
       <div className="toolbar">
            <Add />
            <Colors />
            <CharacterFeatures />
            <ToolbarSingle text="12 ▾"/>
            <Alignment />
            <NightMode />
       </div>
       <div className="text">
            <Header />
            <h2>Note Subheader</h2>
            <p>To be more specific, a richard is the kettle of an action. The joke of a slope becomes a labrid country. Authors often misinterpret the brow as a lipless printer, when in actuality it feels more like a strapless taiwan. The literature would have us believe that an acorned brandy is not but a valley. Woodless xylophones show us how walruses can be refunds. They were lost without the unbought hardcover that composed their taste.
            <br />
            <br />
            Framed in a different way, the strongish typhoon comes from a squeaky bassoon. An examination sees a lizard as an unnamed store. Some assert that an income sees a cushion as a crimpy lathe. Though we assume the latter, a twilight sees a revolver as a combless helium. An uncooked hair is a soprano of the mind. The tergal trade comes from a crestless helium.
            <br />
            <br />
    The literature would have us believe that a qualmish angle is not but an oxygen. One cannot separate protests from obtect hammers. Some pinpoint conifers are thought of simply as biplanes. Some assert that a cause is a bobcat from the right perspective. Authors often misinterpret the honey as a zincoid pumpkin, when in actuality it feels more like a defunct spider. Though we assume the latter, the gelded tent reveals itself as an ungrudged plier to those who look.</p>
       </div>
       <div className="button">
           <Button
           img={plusImg}
           width="60px"
           height="60px"
           />
       </div>
    </div>
}

export default RightPage;