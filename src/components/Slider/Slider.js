import React, { useState, useEffect } from "react";
import "./Slider.css";
import Animation from './Animation/Animation';
import Logo from './Icon/Logo';
import {ButtonSlider} from './ButtonSlider/ButtonSlider';

function Slider(){

    const [logo, setlogo]= useState(true);

    const showlogo = () => {
        if (window.innerWidth <= 600) {
          setlogo(false);
        } else {
          setlogo(true);
        }
      };
    
      useEffect(() => {
        showlogo();
      }, []);
    
      window.addEventListener('resize', showlogo);

    return(
        <>
            <div className="container">
                <div className="column">
                    <div className="circle">
                        <Logo width='100%' height='100%' viewBox='0 0 750 600'/>
                        {/* {logo && <Logo width='100%' height='100%' viewBox='0 0 750 600'/>} */}
                    </div>
                    
                    {/* <div className="circle">
                      <img src={imagen2} alt="image1" className="Img-Slider"/>
                    </div> */}
                </div>
                <div className="column">
                    <div className="top">
                        {logo && <Animation className="Animation"/>}
                    </div>
                    <div className="bottom">
                        <ButtonSlider >About me</ButtonSlider>
                    </div>                         
                </div>
            </div>
        </>
    );
}

export default Slider