import React from "react";
import "./ButtonSlider.css";
import { Link } from 'react-router-dom';



export default function ButtonSlider({texto}){

    return(
    <>
        <Link to="/About_me">
            <button className="bn632-hover bn20">
            {texto}
        </button>
        </Link>
    </>
    );
};