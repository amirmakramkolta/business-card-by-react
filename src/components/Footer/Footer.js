import BusinessContainer from "../BusinessContainer/BusinessContainer";
import facebook from "./FacebookIcon.svg";
import twitter from "./TwitterIcon.svg";
import instagram from "./InstagramIcon.svg";
import linkedin from "./LinkedinIcon.svg";
import github from "./GitHubIcon.svg";
import "./Footer.css";

export default function Footer(){
    return (
        <footer>
            <BusinessContainer>
                <a className="social" href="https://facebook.com">
                    <img src={facebook} alt="facebook" />
                </a>
                <a className="social" href="https://twitter.com">
                    <img src={twitter} alt="twitter" />
                </a>
                <a className="social" href="https://instagram.com">
                    <img src={instagram} alt="instagram" />
                </a>
                <a className="social" href="https://linkedin.com">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a className="social" href="https://github.com">
                    <img src={github} alt="github"/>
                </a>
            </BusinessContainer>
        </footer>
    );
}