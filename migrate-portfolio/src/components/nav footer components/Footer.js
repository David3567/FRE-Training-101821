import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import pinterest from "../../images/pinterest.svg";
import email from "../../images/email.svg";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="media-links">
            <div class="col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
              <div class="facebook">
                <a href="#">
                  <img class="img-responsive" src={facebook} />
                </a>
              </div>
            </div>

            <div class="col-sm-1 col-md-1">
              <div class="linkedin">
                <a href="#">
                  <img class="img-responsive" src={linkedin} />
                </a>
              </div>
            </div>

            <div class="col-sm-1 col-md-1">
              <div class="pinterest">
                <a href="#">
                  <img class="img-responsive" src={pinterest} />
                </a>
              </div>
            </div>

            <div class="col-sm-1 col-md-1">
              <div class="email-icon">
                <a href="#">
                  <img class="img-responsive" src={email} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6 col-md-6 text-right">
            <div class="personal-contact phone">
              <h4>Phone: XXXXXX</h4>
            </div>
          </div>

          <div class="col-sm-6 col-md-6 text-left">
            <div class="personal-contact email-personal-contact">
              <h4>Email: XXXXX@gmail.com</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4 col-md-4 text-center">
            <div class="company-information">
              <h3>XXXX</h3>
              <h4>Copyright &copy; 2021</h4>
              <h4>NY</h4>
            </div>
          </div>

          <div class="col-sm-2 col-md-2 text-center">
            <div class="home-footer">
              <h4>
                <a href="#">Home</a>
              </h4>
            </div>
          </div>

          <div class="col-sm-2 col-md-2 text-center">
            <div class="portfolio-footer">
              <h4>
                <a href="#">Portfolio</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Project1</a>
                </li>
                <li>
                  <a href="#">Project2</a>
                </li>
                <li>
                  <a href="#">Project3</a>
                </li>
                <li>
                  <a href="#">See All</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2 col-md-2 text-center">
            <div class="resume-footer">
              <h4>
                <a href="#">Resume</a>
              </h4>
              <ul>
                <li>
                  <a href="#">Download</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-2 col-md-2 text-center">
            <div class="contact-footer">
              <h4>
                <a href="#">Contact</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
