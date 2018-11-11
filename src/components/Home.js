import React, { Component } from 'react';

const divUrl =  require('../img/home-background.jpg');
const divStyle = {
  'backgroundImage': 'url(' + (divUrl) +')',
};

class Home extends Component {

  
  
  render() {
    return (
      <div id="home" className="hero-area">

			<div className="bg-image bg-parallax overlay" style={divStyle}></div>
			
			<div className="home-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<h1 className="white-text">Edusite Free Online Training Courses</h1>
							<p className="lead white-text">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant, eu pro alii error homero.</p>
							<a className="main-button icon-button" href="#">Get Started!</a>
						</div>
					</div>
				</div>
			</div>

		</div>
    );
  }
}

export default Home;
