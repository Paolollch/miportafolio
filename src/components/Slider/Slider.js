import React, { useState, useEffect } from "react";
import "./Slider.css";
import Animation from './Animation/Animation';
import Logo from './Icon/Logo';
import ButtonSlider from './ButtonSlider/ButtonSlider';

function Slider(){

    return(
        <>
            <div className="container">
                <div className="column">
                    <div className="circle">
                        <Logo width='100%' height='100%' viewBox='0 0 750 600'/>
                    </div>
                    
                    {/* <div className="circle">
                      <img src={imagen2} alt="image1" className="Img-Slider"/>
                    </div> */}
                </div>
                <div className="column">
                    <div className="top">
                        <Animation className="Animation"/>
                    </div>
                    <div className="bottom">
                        <ButtonSlider texto={"About me"}></ButtonSlider>
                    </div>                         
                </div>
            </div>
        </>
    );
}

export default Slider