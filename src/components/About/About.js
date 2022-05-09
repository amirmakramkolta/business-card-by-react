import BusinessContainer from "../BusinessContainer/BusinessContainer";
import "./About.css";

export default function About(){
    return (
        <div className="about">
            <BusinessContainer>
                <h4>About</h4>
                <div>
                Hi, my name is Amir Makram, a software developer, born in Alexandria, Egypt in July 1997. I graduated from the faculty of commerce, Alexandria University, Computers and Information systems as my major in May 2019. After finishing my military services, I joined Information Technology Institution (ITI) and graduate at the 3rd top of my class. My major in the ITI is full-stack development using .NET & .NET core frameworks.
                </div>
                <h4>Interests</h4>
                <div>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </div>
            </BusinessContainer>
        </div>
    );
}