import developerdesign from "../../images/developerdesign.svg";
import responsivedesign from "../../images/responsivedesign.svg";
import innovativesolutions from "../../images/innovativesolutions.svg";
import passion from "../../images/passion.svg";

const Summary = () => {

    return(
		<div class = "summary">
			<div class = "container-fluid">
				<div class = "row">
					<div class = "development-summary">
						<div class = "col-sm-1 col-md-1">
							<div class = "development-img">
								<img class = "img-responsive" src = {developerdesign} />
							</div>
						</div>

						<div class = "col-sm-4 col-md-4">
							<div class = "development-description">
								<h3>Development and Design</h3>
								<p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
							</div>
						</div>
					</div>

					<div class = "responsive-summary">
						<div class = "col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
							<div class = "responsive-img">
								<img class = "img-responsive" src = {responsivedesign} />
							</div>
						</div>

						<div class = "col-sm-4 col-md-4">
							<div class = "responsive-description">
								<h3>Responsive Layouts</h3>
								<p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
							</div>
						</div>
					</div>
				</div>

				<div class = "row">
					<div class = "ideas-summary">
						<div class = "col-sm-1 col-md-1">
							<div class = "idea-img">
								<img class = "img-responsive" src = {innovativesolutions} />
							</div>
						</div>

						<div class = "col-sm-4 col-md-4">
							<div class = "idea-description">
								<h3>Ideas and Solutions</h3>
								<p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
							</div>
						</div>
					</div>

					<div class = "passion-summary">
						<div class = "col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2">
							<img class = "img-responsive" src = {passion} />
						</div>

						<div class = "col-sm-4 col-md-4">
							<div class = "passion-description">
								<h3>Passion and Dedication</h3>
								<p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Summary;