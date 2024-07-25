import React from "react";
import ProductData from '../components/ProductData';


const LeftSide = (props) => {

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let time = h + ":" + m;

    const watchDisplayHandler = (watchDisplayName) => {
        switch (watchDisplayName) {
            case "time":
                return <p id='time'>{time}</p>
                break;
            case "heart":
                // image tag should be there for heart rate
                return <iframe src="https://giphy.com/embed/1kJwmjkqY9JwJ0wBNB" id="heart"></iframe>
                break;
            default:
                return null;
        }
    }

    const watchColorhandler = (watchDisplayColor) => {
        console.log(watchDisplayColor);
        console.log("hi");
        if (watchDisplayColor) {
            return <img src={ProductData.colorOptions[watchDisplayColor].imageUrl} id="leftWatch1"></img>
        } else {
            return <img src={ProductData.colorOptions[0].imageUrl} id="leftWatch"></img>
        }
    }

    return (
        <div id="left">
            {watchColorhandler(props.watchColor)}
            {watchDisplayHandler(props.watchDisplay)}
        </div>
    )
}

export default LeftSide;