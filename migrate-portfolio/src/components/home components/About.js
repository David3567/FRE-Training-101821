const About = () => {
  return (
    <div class="about" id="about">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-12 text-center">
            <div class="about-header">
              <h1>About Me</h1>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-12 text-center">
            <div class="about-header-quote">
              <h3>Sharing a little bit of my story...</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="about-general-description ">
            <div class="col-sm-8 col-md-8 ">
              <h2>General Overview</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="statistic-row">
            <div class="about-statistic-description">
              <div class="col-sm-8 col-md-8">
                <h2>Statistics</h2>
                <h5>
                  <em>And for those that don't fancy reading:</em>
                </h5>
                <br />

                <p>Male, 200 years old.</p>
                <p>Five feet 110 inches</p>
                <p>Favorite fonts:Roboto </p>
                <p>Loves to learn new things</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="about-option-buttons">
            <div class="col-sm-2 col-md-2">
              <a href="#contact" class="btn btn-default btn-black-border">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Include arrow to show timeline --> */}
      </div>
    </div>
  );
};

export default About;
