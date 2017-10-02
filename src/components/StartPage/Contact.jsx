

import React, { Component } from 'react'

export default class Contact extends Component {
	render() {

		return (
			<section id='contact' className='content-section text-center'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8 mx-auto'>
							<h2>Contact Start Bootstrap</h2>
							<p>Feel free to leave us a comment on the
							<a href='http://startbootstrap.com/template-overviews/grayscale/'>Grayscale template overview page</a>
							on Start Bootstrap to give some feedback about this theme!</p>
							<ul className='list-inline banner-social-buttons'>
								<li className='list-inline-item'>
									<a href='https://twitter.com/SBootstrap' className='btn btn-default btn-lg'>
										<i className='fa fa-twitter fa-fw'></i>
										<span className='network-name'>Twitter</span>
									</a>
								</li>
								<li className='list-inline-item'>
									<a href='https://github.com/BlackrockDigital/startbootstrap' className='btn btn-default btn-lg'>
										<i className='fa fa-github fa-fw'></i>
										<span className='network-name'>Github</span>
									</a>
								</li>
								<li className='list-inline-item'>
									<a href='https://plus.google.com/+Startbootstrap/posts' className='btn btn-default btn-lg'>
										<i className='fa fa-google-plus fa-fw'></i>
										<span className='network-name'>Google+</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
