import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import RequestAppointment from './RequestAppointment';

class Header extends React.Component {
  
  render() {
    return (

      <header>
        <div className="container-fluid">
          <div className="row top_sec">
            <div className="col-md-2 logo_sec">
              <img src="images/logo2.png" className="img-responsive" />
            </div>
            <div className="col-md-10 nav_sec">
              <div className="navigation">
                <ul>
                  <li>
                    <NavLink exact to="/" activeClassName="active" className="page-scroll">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services" activeClassName="active" className="page-scroll">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/whyinstall" activeClassName="active" className="page-scroll">Why Install A Sprinkler System</NavLink>
                  </li>
                  <li>
                    <NavLink to="/plumbing" activeClassName="active" className="page-scroll">Plumbing</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" activeClassName="active" className="page-scroll">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
              <div className="clearfix"></div>
              <div className="row top_row ">
                <div className="col-md-12">
                  <div className="col-md-2">
                    <p><b>J7 PNF Team CHD <br />160101</b> <br />999-999-9999 sonupnf@gmail.com</p>   
                  </div>
                  <div className="col-md-7">
                  
                    <RequestAppointment />
                    
                  </div>
                  <div className="col-md-3">
                    <div className="social-icon">
                      <ul>
                        <li><a href="javascript:;"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:;"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:;"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:;"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:;"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>  
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div> 


        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <div className="form_sec">
                  <h3>Request An Appointment</h3>
                  <form>
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
                      <input id="email" type="text" className="form-control" name="email" placeholder="Name" />
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                      <input id="password" type="email" className="form-control" name="password" placeholder="Email" />
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                      <input id="password" type="password" className="form-control" name="password" placeholder="Phone" />
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                      <input id="password" type="password" className="form-control" name="password" placeholder="Message" />
                    </div>
                    <div className="submit_btn">
                      <a href="#" ><i className="fa fa-sign-in" aria-hidden="true"></i> Submit</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


      </header>

    );
  }
}

export default Header;
