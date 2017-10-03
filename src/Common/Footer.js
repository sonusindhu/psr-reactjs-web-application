import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  
  render() {
    return (
      <footer>
        <div className="container-fluid request_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-center center_block">
                <div className="req_cont_sec">
                  <p>Looking for a few good Parker plumbers to help with your quick plumbing repairs and major installations, like a new water heater or trenchless sewer install? Visit Parker Plumbing today and get the help you need.</p>
                </div>
                <div className="req_btn_sec">
                  <a href="#" ><i className="fa fa-wifi" aria-hidden="true"></i> Request Service Online</a>
                  <a href="#" ><i className="fa fa-phone" aria-hidden="true"></i> 999-999-9999</a>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="container-fluid visa_icn_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="pull-left ">
                  <p>Proudly serving Parker CO with superior sprinkler repair services in 80134 and 80138.</p>
                </div>
                <div className="pull-right ">
                  <img src="images/visa.png"  className="img-responsive" />
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="container-fluid copyright_sec">
          <div className="container text-center">
            <p><a href="http://sonusindhu.com" className="footer_cp_link"> Sonu Sindhu</a> © 2017 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
