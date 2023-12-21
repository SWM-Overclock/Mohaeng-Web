import React from "react";
import "../styles/body.css";
import mohaengLogo from "../assets/images/logo-only.png";
import mohaengText from "../assets/images/text-only.png";
import mainBody2Img from "../assets/images/page-1.png";
import mainBody3Img from "../assets/images/page-2.jpg";
import mainBody4Img from "../assets/images/page-3.jpg";

function Body() {

    return (
        <div className="body">
            <div className="main-body1-board">
                <div className="main-body1">
                    <div className="main-body1-left">
                        <div className="main-body-title">
                            <div>모행 에서 찾는</div>
                            <div>내 주변 모든 행사</div>
                        </div>
                        <div className="main-body-contents">
                            <div>내 주변 모든 종류의 행사</div>
                            <div>모행에서 공유하고 확인하세요.</div>
                        </div>
                        <img className="main-down-button" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" />
                    </div>
                    <div className="main-body1-right">
                        <img className="main-body1-img" src={mohaengLogo} alt="mohaengLogo" />
                        <img className="main-body1-img2" src={mohaengText} alt="mohaengText" />
                    </div>
                </div>
            </div>
            <div className="main-body2-board">
                <div className="main-body2-left-line"></div>
                <img className="main-body2" src={mainBody2Img} alt="body2"/>
                <div className="main-body2-right-line"></div>
            </div>
            <div className="main-body3-board">
                <img className="main-body3" src={mainBody3Img} alt="body3"/>
            </div>
            <div className="main-body4-board">
                <div className="main-body4-left"/>
                <img className="main-body4" src={mainBody4Img} alt="body4"/>
                <div className="main-body4-right"/>
            </div>
        </div>
    );
}

export default Body;