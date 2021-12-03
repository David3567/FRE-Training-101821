import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<div class='navigation'>
			<div class='container-fluid'>
				<div class='row'>
					<div class='col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center'>
						<div class='logo'>
							<Link
								to={{
									pathname: `/`,
								}}
							>
								<img src='images/logo.svg' />
							</Link>
						</div>
					</div>

					<div class='col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right'>
						<div class='primary-nav'>
							<ul>
								<li>
									<Link
										to={{
											pathname: `/`,
										}}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										to={{
											pathname: `/portfolio`,
										}}
									>
										Portfolio
									</Link>
								</li>
								<li>
									<Link
										to={{
											pathname: `/contact`,
										}}
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
