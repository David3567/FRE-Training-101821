import React from "react";


export default function Profile(){
	console.log("portfolio render")
    return(
        <div className="profile-wrapper">
		
		<div class = "projects">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header">
							<h1>Projects and Portfolio</h1>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-12 col-md-12 text-center">
						<div class = "projects-header-quote">
							<h3>Sharing my endeavors and passions...</h3>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "luvtalk-project">
							<h3>LUV TALK Website</h3>
							<p>Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress. </p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "personal-website-project">
							<h3>Personal Website</h3>
							<p>Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.</p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class = "col-sm-4 col-md-4 text-center">
						<div class = "strike-zone-project">
							<h3>Strike Zone Analysis</h3>
							<p>Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.</p>
							<div class = "row">
								<div class = "col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4">
									<div class = "project-more-info">
										<a class = "btn btn-default btn-border" href = "#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5">
						<div class = "see-more-button">
							<a class = "btn btn-default btn-border" href = "#">More Projects</a>
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