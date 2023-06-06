import React from "react";
import "./footer.css";
import GitHubLogo from "../../assets/github.svg";
import LinkedInLogo from "../../assets/linkedin.svg";
import WebsiteIcon from "../../assets/website.svg";

function Footer() {
    return (
        <footer>
            <div className="coded-by">
                Coded by Victoria Vu ✿
            </div>
            <div className="socials">
                <a className="social-icon" href="https://victoria-vu.com">
                    <img src={WebsiteIcon} alt="Website Icon"/>
                </a>
                <a className="social-icon" href="https://github.com/victoria-vu/React-Weather-App">
                    <img src={GitHubLogo} alt="GitHub Logo"/>
                </a>
                <a className="social-icon" href="https://www.linkedin.com/in/victoriamvvu/">
                    <img src={LinkedInLogo} alt="LinkedIn Logo"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;