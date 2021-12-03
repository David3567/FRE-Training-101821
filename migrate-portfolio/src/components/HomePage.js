import Contact from "./contact component/Contact";
import Footer from "./header footer components/Footer";
import Navigation from "./header footer components/Navigation";
import About from "./home component/About";
import Main from "./home component/Main";
import Summary from "./home component/Summary"
import Projects from "./portfolio components/Projects";
const HomePage = () => {

    return (
        <>
            <Navigation />
            <Main />
            <About />
            <Summary />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;