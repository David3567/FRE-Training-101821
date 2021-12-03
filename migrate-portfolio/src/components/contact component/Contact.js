

const Contact = () => {

    return (
		<div class = "contact" id = "contact">
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
							<br />
							<br />
							<br />
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
											<input type = "text" placeholder= "First Name" />
										</div>
									</div>

									<div class = "col-sm-6 col-md-6">
										<div class = "lastname">
											<h4>Full Name *</h4>
											<input type = "text" placeholder= "Last Name" />
										</div>
									</div>
								</div>

								<div class = "row">
									<div class = "col-sm-12 col-md-12">
										<div class = "email">
											<h4>Email *</h4>
											<input type = "text" placeholder= "Email" />
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
    )
}

export default Contact;