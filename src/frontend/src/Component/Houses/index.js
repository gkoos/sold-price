import React from "react";

export default function Houses(props) {
    return (
        <React.Fragment>
        {props.data.map(house=>{
            return <rect x={house.x * 5} y={house.y * 5} width="5" height="5" className={"price-class-" + house.priceGroup} key = {house.x + house.y * 101}/>
        })}
        </React.Fragment>
    );
}
