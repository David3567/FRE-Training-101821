import React from "react";
import "./stylesheets/index.scss";
import { Routes as Switch, Route, Navigate as Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Grocery from "./components/Grocery/Grocery";
import Homedepot from "./components/HomeDepot/HomeDepot";
import Supreme from "./components/Supreme/Supreme";

const App = () => {
    return (
        <Switch>
            <Route exact path="/homepage" element={<HomePage />} />
            <Route exact path="/grocery" element={<Grocery />} />
            <Route exact path="/homedepot" element={<Homedepot />} />
            <Route exact path="/supreme" element={<Supreme />} />
            <Route path="*" element={<Redirect to="/homepage" />} />
        </Switch>
    )
}

export default App;