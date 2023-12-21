import React from "react";
import "../styles/header.css";
import logo from "../assets/images/logo.jpg";

const Header = () => {

    return (
        <div className="header">
            <div className="left-header">
                <a href="/" className="header-a"><img className="header-logo-img" src={logo} alt="Company Logo" /></a>
                <div className="header-menu">할인행사</div>
                <div className="header-menu">주변축제</div>
                <div className="header-menu">동네소식</div>
            </div>
            <div className="right-header">
                <input className="header-input" type="text" placeholder="주변 행사를 찾아보세요" />
            </div>
            
        </div>
    );
};

export default Header;
