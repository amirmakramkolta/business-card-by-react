import BusinessContainer from "../BusinessContainer/BusinessContainer";
import logo from "./Icon.svg";
import "./Header.css";

export default function Header(){
    return (
        <header>
            <div className="intro">
                <h1 className="header-items">Amir Makram</h1>
                <h2 className="header-items">Software developer</h2>
                <h3 className="header-items">amirmakram.me</h3>
            </div>
            <div>
                <BusinessContainer>
                    <a className="email-link" href="mailto:amir.makram.97@gmail.com" >
                        <img src={logo} alt="email" />
                        <span>Email me</span>
                    </a>
                </BusinessContainer>
            </div>
        </header>
    );
}