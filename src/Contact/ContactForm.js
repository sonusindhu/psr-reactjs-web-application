import React from 'react';
import Validation from 'react-validation';

class ContactForm extends React.Component {

	constructor() {
		super();
		this.state = { contact: {} };
		this.onSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		var urlSearchParams = new URLSearchParams();
		urlSearchParams.append('name', this.refs.name.state.value);
		urlSearchParams.append('email', this.refs.email.state.value);
		urlSearchParams.append('phone', this.refs.phone.state.value);
		urlSearchParams.append('message', this.refs.message.state.value);
		var data = urlSearchParams.toString()

		fetch('http://localhost/API/contact.php', { 
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: data
		})
		.then(function(response) {
			return response.json()
		}).then(function(body) {
			console.log(body);
		});
	}

	render() {
		return (

			<Validation.components.Form ref={c => this.form = c} onSubmit={this.onSubmit}>
	            
	            <div className="input-group">
					<span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
					<Validation.components.Input value='' className="form-control" placeholder="Enter Name" name='name' validations={['required']} ref="name"/>
				</div>

				<div className="input-group">
					<span className="input-group-addon">
						<i className="fa fa-envelope" aria-hidden="true"></i>
					</span>
					<Validation.components.Input value='' className="form-control" placeholder="Enter Email" name='email' validations={['required', 'email']} ref="email"/>
				</div>

				<div className="input-group">
					<span className="input-group-addon"><i className="fa fa-phone" aria-hidden="true"></i></span>
					<Validation.components.Input value='' className="form-control" placeholder="Enter phone number" name='phone' validations={['required']} ref="phone"/>
				</div>

				<div className="form-group">
					
					<Validation.components.Textarea
                      placeholder="Leave your comment..."
                      errorClassName="is-invalid-input"
                      className="form-control"
                      value=""
                      name="message"
                      rows="5"
                      ref="message"
                      validations={['required']}
                    />
	            </div>
	            
	            <div className="submit_btn"> 
	            	<Validation.components.Button containerClassName="" className="btn btn-success"><i className="fa fa-sign-in" aria-hidden="true"></i> Submit</Validation.components.Button>
	            </div>

	        </Validation.components.Form>

			
		);
	}
}

export default ContactForm;
