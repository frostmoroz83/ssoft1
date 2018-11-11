import React, { Component } from 'react';
import { HashRouter   as  Router, Link } from "react-router-dom";

const divUrl =  require('../img/blog-post-background.jpg');
const divStyle = {
  'backgroundImage': 'url(' + (divUrl) +')',
};

class HeroAreaBlog extends Component {
  render() {
    return (
      <div className="hero-area section">

			<div className="bg-image bg-parallax overlay" style={divStyle}></div>

			<div className="container">
				<div className="row">
					<div className="col-md-10 col-md-offset-1 text-center">
						<Router>
						<ul className="hero-area-tree">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
							{/* <li><a href="index.html">Home</a></li> */}
							<li>How to Get Started in Photography</li>
						</ul>
              </Router>
						<h1 className="white-text">How to Get Started in Photography</h1>
						<ul className="blog-post-meta">
							<li className="blog-meta-author">By : <a href="#">John Doe</a></li>
							<li>18 Oct, 2017</li>
						</ul>
					</div>
				</div>
			</div>

		</div>
    );
  }
}

export default HeroAreaBlog;
