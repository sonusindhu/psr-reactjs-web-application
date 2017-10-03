import React from 'react';
import PageTitle from '../Common/PageTitle';

 class About extends React.Component {
	
	componentDidMount() {
		document.title = "Our Services";
	}
	
 	render() {

 		return (
 			<div>
	 			<PageTitle title="OUR SERVICES" description="Our Services" />

	 			<div className="main">
					<div className="container">
						<div className="r_team_sec">
							<h3>We Are Your Parker Sprinkler Repair Team</h3>
							<p>The best kind of Parker sprinkler repair service provider is the one who can handle everything. Some services are fantastic at pop up head replacement but aren't certified to service your backflow prevention device. Our techs are certified to analyze and repair backflow systems as well as other technical aspects of your system including systems pressure stabilization and coverage analysis and optimization. We're more than a repair team, we're a full service sprinkler system consultant. We'll help you optimize your system no matter what size or shape it's in, and even help you figure out how to use incremental improvements to slowly improve your system without breaking your budget.  </p>
						</div>
						<div className="clearfix"></div>
						<div className="service_gallery_sec">
							<div className="flex_container">
								<div className="flex_group">
									<img src="images/service-1.png" className="img-responsive" />
								</div>
								<div className="flex_group">
									<img src="images/service-2.png" className="img-responsive" />	
									<img src="images/service-3.png" className="img-responsive" />	
								</div>
								<div className="flex_group">
									<img src="images/service-4.png" className="img-responsive" />	
									<img src="images/service-5.png" className="img-responsive" />	
								</div>
								<div className="flex_group">
									<img src="images/service-6.png" className="img-responsive" />	
									<img src="images/service-7.png" className="img-responsive" />	
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
						<div className="r_team_sec">
							<h3>Here's just a short list of what we can help you with</h3>
							<div className="col-md-12">
								<div className="col-md-6 col-sm-6 col-xs-6">
									<ul>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Sprinkler Repair</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> New Installation</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Spring/Fall tune-ups for your system</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> General Maintenance and Inspections,</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Checks and adjustments of sprinkler systems</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Sprinkler head repair and replacement</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Raising and lowering sprinkler heads</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Sprinkler valve replacement</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Electronic sprinkler valve location</li>
									</ul>
								</div>	
								<div className="col-md-6 col-sm-6 col-xs-6">
									<ul>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Repairing broken sprinkler pipes</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Sprinkler controller timer replacements</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Wiring problems</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> A LArge Yard Needs a Rotary Sprinkler Solu</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> tionCoverage problems</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Pool rerouting</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Rain and Freeze Sensor Installation</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Double check assembly replacements</li>
										<li><i className="fa fa-tint" aria-hidden="true"></i> Pump system installs</li>
									</ul>
								</div>	
								<div className="clearfix"></div>
							</div>
							<div className="clearfix"></div>		
						</div>
					</div>

					<div className="clearfix"></div>
				</div>
	 			
 			</div>
 		);

	}
}

export default About;
