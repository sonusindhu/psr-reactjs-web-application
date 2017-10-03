import React from 'react';
import PageTitle from '../Common/PageTitle';

class Careers extends React.Component {

	componentDidMount() {
		document.title = "Why install a sprinkler system";
	}
	
	render() {
		return (
			<div>
				<PageTitle title="WHY INSTALL A SPRINKLER SYSTEM" description="Why install a sprinkler system" />
				
				<div className="main">
					<div className="container">
						<div className="top-section">
							<div className="col-sm-4">
								<img src="images/why-1.png" alt="Image" />
							</div>
							<div className="col-sm-8">
								<h2>Our Parker Irrigation Team Does Residential Service</h2>
								<p>If you have a small residential yard, you may not think you need a sprinkler system, but the truth is you'll find it much more efficient to use one than to try to water by hand. When you water by hand, in addition to taking up your valuable free time, you are not delivering consistent amounts of water to your lawn or planting beds. With a timer controlled irrigation system you can be sure that you are delivering the same amount of water at the same time of day, every day. This consistency leads to stronger root systems in all of your vegetation. And the key to healthy, vibrant plants is a strong root system. Having stronger roots allows plants to survive longer periods of time without water because they reach lower and draw water from deeper in the Earth.</p>	  
								<p>By making the change to a sprinkler system, not only will you save time and better allocate your water supply, you'll probably use less water in the long run, thus saving you on your monthly expenses.</p>
							</div>
						</div>
						<div className="top-section">
								<div className="col-sm-8">
									<h2>Multi-Prong Systems</h2>
									<p>Sprinkler systems aren't just for watering your turf, they can be installed to water flower and vegetable gardens and foundation and yard plantings as well. In fact, the most efficient systems take each individual element of your landscape and irrigate it for the optimal water usage. This can mean using a multitude of difference pop up spray heads and maybe even a combination system that combines drip irrigation and spray heads.</p>
									<p>In any case, installing a sprinkler system in Parker is a great way to keep your landscape looking its best even during the harshest of droughts.</p>	  
								</div>
								<div className="col-sm-4">
									<img src="images/why-2.png" alt="Image" />
								</div>
							</div>
					</div>
					
					<div className="clearfix"></div>
				</div>

				
			</div>	
		);
	}
}

export default Careers;
