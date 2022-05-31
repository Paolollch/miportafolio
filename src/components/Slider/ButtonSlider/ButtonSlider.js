import React from "react";
import "./ButtonSlider.css";


export default function ButtonSlider({texto}){

    return(
    <>
        <a href="/About_me">
            <button className="bn632-hover bn20">
            {texto}
        </button></a>
    </>
    );
};