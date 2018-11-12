import React, { Component } from 'react';
import { HashRouter   as  Router, Link } from "react-router-dom";



class Footer extends Component {

  
  
  render() {
    return (
      <footer id="footer" className="section">

			<div className="container">

				<div className="row">

					<div className="col-md-6">
						<div className="footer-logo">
							<a className="logo" href="index.html">
								<img src={require('../img/logo.png')} alt="logo" />
							</a>
						</div>
					</div>

					<div className="col-md-6">
						<Router>
						<ul className="footer-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/">About</Link></li>
						<li><Link to="/">Courses</Link></li>
						<li><Link to="/blog">Blog</Link></li>
						<li><Link to="/">Contact</Link></li>
						</ul>
						</Router>
					</div>

				</div>

				<div id="bottom-footer" className="row">

					<div className="col-md-4 col-md-push-8">
						<ul className="footer-social">
							<li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a></li>
							<li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
							<li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
							<li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
						</ul>
					</div>

					<div className="col-md-8 col-md-pull-4">
						<div className="footer-copyright">
							<span>&copy; Copyright 2018. All Rights Reserved. | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a></span>
						</div>
					</div>

				</div>
			</div>

		</footer>
    );
  }
}

export default Footer;
