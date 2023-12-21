import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text"><a href="/">운영 정책</a> | <a href="/">개인정보 보호 정책</a> | <a href="/">고객센터</a></div>
            <p className="copyright">Copyright© 2023 OverClock All rights reserved.</p>
        </footer>
    );
}

export default Footer;

