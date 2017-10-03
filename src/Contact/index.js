import React from 'react';
import ContactForm from './ContactForm';
import OurPartners from '../Common/OurPartners';
import OurClients from '../Common/OurClients';
import PageTitle from '../Common/PageTitle';

class Contact extends React.Component {

 	constructor() {
		super();
	}

	componentDidMount() {
		document.title = "Contact Us";
	}

 	render() {
 		return (
 			<div>

 				<PageTitle title="Contact Us" description="Contact Us" />

 				<div className="clearfix"></div>

 				<div className="main">
	 				<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="find_sec">
									<h3>Find Us Here</h3>	
									<div className="address_sec">
										<i className="fa fa-map-marker" aria-hidden="true"></i>
										<span>
											<h3>Address:</h3>
											<p>J7 Picnframes Technologies</p>
											<p> IT Park, Chandigarh, 160101</p>
										</span>	
									</div>
									<div className="address_sec">
										<i className="fa fa-phone" aria-hidden="true"></i>
										<span>
											<h3>Phone:</h3>
											<p>999-999-9999</p>
										</span>	
									</div>
									<div className="address_sec">
										<i className="fa fa-envelope" aria-hidden="true"></i>
										<span>
											<h3>Email:</h3>
											<p>sonupnf@gmail.com</p>
										</span>	
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form_sec">
									<h3>Contact Us</h3>
									<ContactForm />
								</div>
							</div>
						</div>
					</div>

	 				<div className="clearfix"></div>
				</div>

				
 			</div>	
 		);
 	}
 }

 export default Contact;
