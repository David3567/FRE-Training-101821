import './App.css';
import Home from "./components/Home";
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {BrowserRouter, Route, Switch} from "react-router-dom";


import  "./boostrap/css/bootstrap.min.css";
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation />

      <div className="content">
      <Switch>
      <Route exact path="/index.html">
        <Home />
      </Route>
      <Route exact path="/portfolio.html">
        <Portfolio />
      </Route>
      <Route exact path="/contact.html">
        <Contact />
      </Route>
     </Switch>
     </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
