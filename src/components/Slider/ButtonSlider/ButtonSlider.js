import React from "react";
import "./ButtonSlider.css";


export default function ButtonSlider({texto}){

    return(
    <>
        <a href="/contactame">
            <button className="bn632-hover bn20">
            {texto}
        </button></a>
    </>
    );
};