import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './Common/Header';
import Footer from './Common/Footer';
import ScrollToTop from './Common/ScrollToTop';

import OurPartners from './Common/OurPartners';
import OurClients from './Common/OurClients';

import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import WhyInstall from './WhyInstall';
import Plumbing from './Plumbing';
import NotFound from './NotFound';

class App extends Component {

  render() {
    return (

      <Router>
        <ScrollToTop>
        <Root>
          <Header />

          <div className="clearfix"></div>
          
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/whyinstall" component={WhyInstall}/>
            <Route path="/plumbing" component={Plumbing}/>
            <Route path="*" component={NotFound}/>
          </Switch>
          
          <div className="clearfix"></div>
          
          <OurPartners />
          <OurClients />
          <div className="clearfix"></div>
          <Footer />
        </Root>
        </ScrollToTop>
      </Router>
      
    );
  }
}



const Root = (props)=>(
  <div className="wrapper" {...props} />
)
const Main = (props)=>(
  <div className="main" {...props} />
)

export default App;
