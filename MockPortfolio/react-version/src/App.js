import React from "react";
import { Routes as Switch, Route, Navigate as Redirect } from "react-router-dom";
import "./stylesheets/scss/index.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Homepage from "./components/homepage/Homepage";

const App = (props) => {

    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/homepage" element={<Homepage />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<Redirect to="/homepage" />} />
            </Switch>
            <Footer />
        </>

    )
}

export default App;