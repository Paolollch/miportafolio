import React from "react";
import './Animation.css'

export default function Animation(){
    return(
        <>
        <div className="wrapper">
        <div className="static-txt">Hola soy</div>
        <ul className="dynamic-txts">
            <li><span>Paolo</span></li>
            <li><span>Developer</span></li>
            <li><span>Front-end</span></li>
            <li><span>Back-end</span></li>
        </ul>
        </div>
        </>
    );
}