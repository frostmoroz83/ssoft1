import React, { Component } from 'react';


class Logo extends Component {
  render() {
    return (
        <div className="navbar-brand">
						<a className="logo" href="index.html">
							<img src={require('../img/logo-alt.png')} alt="logo" />
              </a>
      </div>
    );
  }
}

export default Logo;
