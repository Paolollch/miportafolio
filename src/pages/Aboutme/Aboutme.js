import React from "react";
import ButtonSlider from "../../components/Slider/ButtonSlider/ButtonSlider";
import './Aboutme.css'
import ProfileIcon from "./Profile";

export function Aboutme(){


    return(
        <>
            <div className="containerAbout">
                <div className="columnAboutL">
                    <ProfileIcon width='70%' height='70%' viewBox='0 0 900 900'/>
                </div>
                <div className="columnAboutR">
                    <h1 className="Title">About me:</h1>
                    <div className="CardAbout">
                        <p>Lorem ipsus isjdbsidjslidjsgdlisjd lijsdlsijdslidjshds
                            aldjsdsjhdiolsjhd
                            sijdhs;ldah;dojahdoa
                            ksjdsildjshil
                        </p>
                    </div>
                    <ButtonSlider texto={'My Skills'}/>
                </div>
            </div>
        </>
    );
};


export default Aboutme;