import React from 'react';

class PageTitle extends React.Component {
	render() {
		return (
			
			<div className="container-fluid banner_head">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="pull-left">
								<h3>{this.props.title}</h3>
							</div>
							<div className="pull-right">
								<p>Parkersprinkler <i className="fa fa-long-arrow-right" aria-hidden="true"></i> {this.props.description}</p>
							</div>
						</div>	
						<div className="clearfix"></div>
					</div>	
					<div className="clearfix"></div>
				</div>
			</div>
				
		);
	}
}

export default PageTitle;
