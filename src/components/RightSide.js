import React, {useState} from "react";
import ProductData from './ProductData';

const RightSide = (props) => {

    return (
        <div id="right">
            <p id='title'><b>{props.title}</b></p>
            <p id='description'><i>{props.description}</i></p>
            <p id='selectColor'><b>Select color</b></p>
            <div id="imageSet">
                <button id="watchStyleButton" onClick={() => props.setWatchColor("0")}><img src={ProductData.colorOptions[0].imageUrl} id="selectWatch"></img></button>
                <button id="watchStyleButton" onClick={() => props.setWatchColor("1")}><img src={ProductData.colorOptions[1].imageUrl} id="selectWatch"></img></button>
                <button id="watchStyleButton" onClick={() => props.setWatchColor("2")}><img src={ProductData.colorOptions[2].imageUrl} id="selectWatch"></img></button>
                <button id="watchStyleButton" onClick={() => props.setWatchColor("3")}><img src={ProductData.colorOptions[3].imageUrl} id="selectWatch"></img></button>
            </div>
            <p id='selectColor'><b>Features</b></p>
            <div id='featureButton'>
                <button id="buttons1" onClick={() => props.setWatchDisplay("time")}>{ProductData.featureList[0]}</button>
                <button id='buttons2' onClick={() => props.setWatchDisplay("heart")}>{ProductData.featureList[1]}</button>
            </div>
            <div id="buy">
            <button id="buyButton">Buy</button>
            </div>
        </div>
    )
}

export default RightSide;