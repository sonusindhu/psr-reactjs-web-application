import React from 'react';
import PageTitle from '../Common/PageTitle';

 class NotFound extends React.Component {

 	componentDidMount() {
		document.title = "404 Page Not Found";
	}

 	render() {
 		return (
 			<div>

 				<PageTitle title="Page Not found" description="Page Not found" />
 				
 			</div>	
 		);
 	}
 }

 export default NotFound;
