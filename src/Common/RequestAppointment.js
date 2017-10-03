import React from 'react';

class RequestAppointment extends React.Component {
  
  constructor() {
    super();
    
  }

  render() {

    return (
      
      <div className="req_btn_sec">
        <a href="#" >
          <i className="fa fa-wifi" aria-hidden="true"></i> Request Service Online
        </a>
        <a href="#" className="request_appointment_btn" data-toggle="modal" data-target="#myModal">
          <i className="fa fa-calendar-check-o" aria-hidden="true"></i> Request Appointment
        </a>


        

        

      </div>
      
    );
  }
}

export default RequestAppointment;
