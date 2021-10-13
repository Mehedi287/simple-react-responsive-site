import React from 'react';
import "./service.css"
const Service = (props) => {
    const { name, img, price, id, derciption } = props.service
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2> {name}</h2>
            <h4>price : {price}</h4>
            <p>{derciption}</p>
        </div >
    );
};

export default Service;