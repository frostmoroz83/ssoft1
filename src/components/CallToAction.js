import React, { Component } from 'react';



const divUrl =  require('../img/cta1-background.jpg');
const divStyle = {
  'backgroundImage': 'url(' + (divUrl) +')',
};


class CallToAction extends Component {

  
  
  render() {
    return (
      <div id="cta" className="section">

						<div className="bg-image bg-parallax overlay" style={divStyle}></div>
			
			
			<div className="container">

								<div className="row">

					<div className="col-md-6">
						<h2 className="white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis.</h2>
						<p className="lead white-text">Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
						<a className="main-button icon-button" href="#">Get Started!</a>
					</div>

				</div>
				

			</div>
			
		</div>
    );
  }
}

export default CallToAction;
