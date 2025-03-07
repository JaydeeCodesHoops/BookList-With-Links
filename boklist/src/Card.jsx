import PropTypes from 'prop-types'
import React, { useState } from "react";
import './index.css'


function Card(props){
    const number = useState(0);
    return(
        <>
        <div className="card">
            <div>
            <img className="cardImage" src={props.img} alt="a boook of brad taylor"></img>
            <h2> {props.title} </h2>
            <p> {props.about} </p>
            <p> {number + 1} </p>
            </div>
        </div>
      
         </>
    );
}

export default Card
