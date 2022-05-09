import Container from "./Container/Container";
import Image from "./Image/Image";
import Header from "./Header/Header";
import About from "./About/About";
import Footer from "./Footer/Footer";
import "./App.css";

export default function App(){
    return(
    <Container>
        <Image />
        <Header />
        <About />
        <Footer />
    </Container>
    )
}