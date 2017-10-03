import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading';

class Home extends React.Component {
  
  constructor() {
      super();
      this.state = { banners: [] };
      this.loaded = false;
  }
  
  componentDidMount() {
      document.title = "Parker Sprinkler Repair";
      var options = {
        method: 'get',
        dataType:'json'  
      }
      fetch("http://localhost/API/index.php",options) 
      .then(response => response.json())
      .then(json => {
        this.setState({
          banners: json,
          loaded:true
        });
      });
  }
  
  render() {


    return (

      <div className="main">
        <div className="container">
          <div className="row section1">   
            <div className="top-section">
              <div className="col-sm-4 col-xs-12">
                <img src="images/img1.png" className="img-responsive" alt="Image" />
              </div>
              <div className="col-sm-8  col-xs-12">
                <h2>Call Our Parker Sprinkler Repair Team And It's Good as Done</h2>
                <p>Unless you have embraced the Red Rocks desert look, you probably don't want a crisp, brown lawn. While the other homes on your block are struggling with drought problems, our Parker Sprinkler Repair team can be installing a new sprinkler system to help keep your lawn plush and green. Of course, a sprinkler system is only as good as the lawn under which it is installed. Our specialists can also help you determine the right type of turf grass to install over the sprinkler to keep your lawn green at the lowest cost possible.</p>
                <p>While cost is an important consideration when choosing a sprinkler repair service in Parker, it's not the only one. A trustworthy and reliable service that is available when you need them should be your top priority. It doesn't matter how cheap a service is if they're not there to do the job. We have enough contractors on staff to handle your needs any day of the week.</p>    
              </div>
            </div>
     
            <div className="top-section">
              <div className="col-sm-8  col-xs-12">
                <h2>Smarter Techs Mean Better Service!</h2>
                <p>Availability is only half of the battle. If a tech gets to your home or business and can't diagnose the problem you're no closer to getting your needs met than you were before you made the call. Our service techs are the best in the business and show up with the latest diagnostic tools to quickly determine the source of your problem. And because our trucks are filled with hundreds of high-quality replacement parts, we can repair your system on-site without having to head back to the shop to retrieve anything. This keeps repair time to a minimum and gets your system back up and running sooner.</p>
                <p>Our highly skilled techs are always up to date with current building codes and are familiar with the latest products on the market. They will answer any questions that you may have about your system, explain the diagnosis and detail everything that needs to be done to fix any existing problems in plain English. They will also provide an estimate before starting any work so you aren't ambushed by an unreasonable bill. We believe in treating our customers in a way we'd like to be treated ourselves.</p>    
              </div>
              <div className="col-sm-4  col-xs-12">
                <img src="images/img2.png" className="img-responsive" alt="Image" />
              </div>
            </div>
     
            <div className="top-section">
              <div className="col-sm-4  col-xs-12">
                <img src="images/img3.png" className="img-responsive" alt="Image" />
              </div>
              <div className="col-sm-8  col-xs-12">
                <h2>Proudly Offering the Best Sprinkler Repair Service in Parker Colorado!</h2>
                <p>We've got the techs and materials, but the real thing that sets us apart from the other Parker sprinkler repair companies is our impeccable service record. Our customer satisfaction rate is the best in the business. Why? We show up fast, diagnose the problem in your system and fix it without trying to sell you things you don't need. We do what you want, how you want it, and help you maintain your lawn with the least effort possible. After all, you purchased a sprinkler system so you wouldn't have to waste your free time hand watering and if your system isn't working, you will be. Call us in to get your system running at peak efficiency and keep your lawn shimmering in the midday sun.</p>   
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="content_sec">
              <h3>Thank you for visiting the Parker Sprinkler Doctor where our focus is to efficiently repair residential sprinkler systems in Parker Colorado. As a business, we have three primary goals: </h3>
              <ul>
                <li>1.  Complete Quality Sprinkler Repairs</li>
                <li>2.  Work Efficiently and with a High Degree of Integrity</li>
                <li>3.  Be Responsive and Communicative.</li>
              </ul>
              <p>Parker Sprinkler Doctor is passionate about Sprinkler systems and people. Our goal is to quickly identify and resolve all sprinkler related problems. Nothing is too easy or too difficult for our company. We understand that properly watering lawns is critical to maintaining and building a healthy thriving turf. At the same time, we understand that water is expensive and it is imperative that each watering session is both efficient and effective. </p>
              <p>The best time to water your lawn is in the early morning. The best frequency is three times a week watering each zone for 10-15 minutes three times on each of those days. Sometimes the need for a sprinkler repair is obvious with water gushing where it shouldn’t or when it shouldn’t. These problems are generally easy to identify and crucial to resolve quickly in order to keep your water bill low and your grass healthy. Other problems may be a little less evident. For example, you might notice that an area of your lawn starts to look stressed. This is typically an early warning sign that your irrigation system is not functioning properly and needs immediate attention. </p>
              <p>We enjoy the challenge of investigating, identifying, and resolving sprinkler system problems. It is ideal that you are there when we arrive as most repairs require us to have access to the programmer typically located in the garage. If being there is not possible, we will do our best to work with you to quickly identify and resolve your sprinkler system problem. </p>
              <p>Our team lives and works in Parker Colorado. If requested, we will venture outside of our little town; however, our primary service area is Parker. We have been here since 1999 and we think being close to our work is a good thing. </p>
            </div>
          </div>
        </div>
        
        <div className="clearfix"></div>
      </div>

    );
  }
}

export default Home;
