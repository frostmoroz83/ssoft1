import React, { Component } from 'react';
import { HashRouter   as  Router, Link } from "react-router-dom";

const divUrl =  require('../img/page-background.jpg');
const divStyle = {
  'backgroundImage': 'url(' + (divUrl) +')',
};

class HeroArea extends Component {
  render() {
    return (
      <div className="hero-area section">

			<div className="bg-image bg-parallax overlay" style={divStyle}></div>

			<div className="container">
				<div className="row">
					<div className="col-md-10 col-md-offset-1 text-center">
						<ul className="hero-area-tree">
            <Router>
              <li><Link to="/">Home</Link></li>
							{/* <li><a href="index.html">Home</a></li> */}
              </Router>
							<li>Blog</li>
						</ul>
						<h1 className="white-text">Blog Page</h1>

					</div>
				</div>
			</div>

		</div>
    );
  }
}

export default HeroArea;
