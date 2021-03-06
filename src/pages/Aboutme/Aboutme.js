import React from "react";
import {ButtonSlider} from "../../components/Slider/ButtonSlider/ButtonSlider";
import './Aboutme.css'
import ProfileIcon from "./Profile";

export function Aboutme(){


    return(
        <>
            <div className="containerAbout">
                <div className="columnAboutL">
                    <ProfileIcon width='70%' height='100%' viewBox='0 0 900 790'/>
                </div>
                <div className="columnAboutR">
                    <h1 className="Title">About me:</h1>
                    <div className="CardAbout">
                        <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                    <div className="buttonMySkills">
                        <ButtonSlider>My skills</ButtonSlider>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Aboutme;