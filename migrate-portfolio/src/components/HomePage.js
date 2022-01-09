import Contact from "./contact components/contact";
import Main from "./home components/Main";
import Summary from "./home components/Summary";
import Navigation from "./nav footer components/Navigation";
import Projects from "./portfolio components/Projects";
import About from "./home components/About";
import Footer from "./nav footer components/Footer";

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
};

export default HomePage;
