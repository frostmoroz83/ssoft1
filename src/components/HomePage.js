import React, { Component } from 'react';


// import Header from './Header';
import Home from './Home';
import Courses from './Courses';
import Preloader from './Preloader';
import CallToAction from './CallToAction';
import WhyUs from './WhyUs';
import ContactCTA from './ContactCTA';
import Footer from './Footer';

class HomePage extends Component {
  render() {
    return (
      <div >
        {/* <Header /> */}
        <Home />
        <Courses />
        <CallToAction />
        <WhyUs />
        <ContactCTA />
        <Footer />
        <Preloader />
      </div>
    );
  }
}

export default HomePage;
