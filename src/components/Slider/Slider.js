import React from "react";
import "./Slider.css";
import imagen1 from './desarrollo-web.png'
import imagen2 from './ImagenSlider1.png'
import Animation from './AnimationHola/Animation'
import Logo from './Icon/Logo' 

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
                        <Animation></Animation>
                    </div>
                    <div className="bottom">
                    </div>                         
                </div>
            </div>
        </>
    );
}

export default Slider