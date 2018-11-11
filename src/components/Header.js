import React from 'react';
import Logo from './Logo';
import { HashRouter   as  Router, Link } from "react-router-dom";


class Header extends React.Component {
  render() {
    return (
			<div>
      <header id="header" className="transparent-nav">
			<div className="container">
				<div className="navbar-header">
					<Logo />
					<button className="navbar-toggle">
						<span></span>
					</button>
				</div>

				<nav id="nav">
					<Router>
						<ul className="main-menu nav navbar-nav navbar-right">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/">About</Link></li>
						<li><Link to="/">Courses</Link></li>
						<li><Link to="/blog">Blog</Link></li>
						<li><Link to="/">Contact</Link></li>
						</ul>
					</Router>
				</nav>


			</div>
		</header>
		</div>
    );
  }
}

export default Header;
