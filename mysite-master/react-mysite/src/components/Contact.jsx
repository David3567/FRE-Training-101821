import React from "react";

export default function Contact(){
    console.log("contact render")
    return(
        <div className="contact-wrapper">
		
		<div class = "contact">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "contact-header">
							<h1>Contact</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "contact-header-quote">
							<h4>"XXXXXX"</h4>
							<h4>-XXXDXy</h4>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-6 col-md-6">
						<div class = "contact-instructions">
							<h2>Reaching out to me</h2>
							<p>Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXXX.</p>
							<br></br>
							<br></br>
                            <br></br>
							<h2>Contact Information</h2>
							<p>XXXX</p>
							<p>XXXX</p>
							<p>(XXXX)-445-7747</p>
							<p>XXXXXX@gmail.com</p>
						</div>
					</div>

					<div class = "col-sm-6 col-md-6">
						<div class = "contact-form-body">
							<form>
								<div class = "row">
									<div class = "col-sm-6 col-md-6">
										<div class = "firstname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "First Name"></input>
										</div>
									</div>

									<div class = "col-sm-6 col-md-6">
										<div class = "lastname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "Last Name"></input>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-12 col-md-12">
										<div class = "email">
											<h4>Email *</h4>
											<input type = "text" placeholder= "Email"></input>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-12 col-md-12">
										<div class = "message">
											<h4>Message *</h4>
											<textarea placeholder= "Message"></textarea>
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
										<div class = "submit-contact">
											<a class = "btn btn-default btn-border" href = "#">Submit</a>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

		
		<div class = "footer">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "media-links">
						<div class = "col-sm-1 col-md-1 col-sm-offset-4 col-md-offset-4">
							<div class = "facebook">
								<a href = "#"><img class = "img-responsive" src = "./images/facebook.svg"></img></a>
							</div>
						</div>

						<div class = "col-sm-1 col-md-1">
							<div class = "linkedin">
								<a href = "#"><img class = "img-responsive" src = "./images/linkedin.svg"></img></a>
							</div>
						</div>

						<div class = "col-sm-1 col-md-1">
							<div class = "pinterest">
								<a href = "#"><img class = "img-responsive" src = "./images/pinterest.svg"></img></a>
							</div>
						</div>

						<div class = "col-sm-1 col-md-1">
							<div class = "email-icon">
								<a href = "#"><img class = "img-responsive" src = "./images/email.svg"></img></a>
							</div>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-6 col-md-6 text-right">
						<div class = "personal-contact phone">
							<h4>Phone: XXXXXX</h4>
						</div>
					</div>

					<div class = "col-sm-6 col-md-6 text-left">
						<div class = "personal-contact email-personal-contact">
							<h4>Email: XXXXX@gmail.com</h4>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "company-information">
							<h3>XXXX</h3>
							<h4>Copyright &copy; 2021</h4>
							<h4>NY</h4>
						</div>
					</div>

					<div class = "col-sm-2 col-md-2 text-center">
						<div class = "home-footer">
							<h4><a href = "#">Home</a></h4>
						</div>
					</div>

					<div class = "col-sm-2 col-md-2 text-center">
						<div class = "portfolio-footer">
							<h4><a href = "#">Portfolio</a></h4>
							<ul>
								<li><a href = "#">Project1</a></li>
								<li><a href = "#">Project2</a></li>
								<li><a href = "#">Project3</a></li>
								<li><a href = "#">See All</a></li>
							</ul>
						</div>
					</div>

					<div class = "col-sm-2 col-md-2 text-center">
						<div class = "resume-footer">
							<h4><a href = "#">Resume</a></h4>
							<ul>
								<li><a href = "#">Download</a></li>
							</ul>
						</div>
					</div>

					<div class = "col-sm-2 col-md-2 text-center">
						<div class = "contact-footer">
							<h4><a href = "#">Contact</a></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    )
}