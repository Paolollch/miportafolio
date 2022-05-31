import React from "react";
import "./ButtonSlider.css";
import { Link } from 'react-router-dom';



export const ButtonSlider= ({children}) => {

    return(
    <>
        <Link to="/About_me">
            <button className="bn632-hover bn20">
            {children}
            </button>
        </Link>
    </>
    );
};