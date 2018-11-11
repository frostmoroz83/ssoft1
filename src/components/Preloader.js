import React, { Component } from 'react';



const divStylePre = {
  display: "none",
};


class Preloader extends Component {
  render() {
    return (
      <div id='preloader' style={divStylePre}>
			<div className='preloader'></div>
		</div>
    );
  }
}

export default Preloader;
