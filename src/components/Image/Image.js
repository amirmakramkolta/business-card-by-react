import "./Image.css";
import pic from "./pic.jpg";

export default function Image(){
    return (
        <div>
            <img className="main-photo" src={pic} alt="Amir Makram" />
        </div>
    );
}