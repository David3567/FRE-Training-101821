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
      <Route exact path="/index">
        <Home />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
     </Switch>
     </div>
    </div>

    </BrowserRouter>
  );
}

export default App;
