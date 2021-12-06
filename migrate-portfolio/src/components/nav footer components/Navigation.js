import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Navigation.css";
import { MyLink } from "../MyReactRouter/MyReactRouter";

const Navigation = () => {
  return (
    <div class="navigation">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div class="logo">
              {/* <a href = "index.html"><img src = "../../images/logo.svg" /></a> */}
              <Link to="/home">
                <img src={logo } />
              </Link>
            </div>
          </div>

          <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div class="primary-nav">
              <ul>
                {/* <li><a href = "index.html">Home</a></li>
                            <li><a href = "portfolio.html">Portfolio</a></li>
                            <li><a href = "contact.html">Contact</a></li> */}
                <li>
                  <MyLink to="/home">Home</MyLink>
                </li>
                <li>
                  <MyLink to="/portfolio">Portfolio</MyLink>
                </li>
                <li>
                  <MyLink to="/contact">Contact</MyLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
