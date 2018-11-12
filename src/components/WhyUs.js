import React, { Component } from 'react';



class WhyUs extends Component {
  
  
  render() {
    return (
    <div id="why-us" className="section">

    <div className="container">

      <div className="row">
        <div className="section-header text-center">
          <h2>Why Edusite</h2>
          <p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
        </div>

        <div className="col-md-4">
          <div className="feature">
            <i className="feature-icon fa fa-flask"></i>
            <div className="feature-content">
              <h4>Online Courses</h4>
              <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature">
            <i className="feature-icon fa fa-users"></i>
            <div className="feature-content">
              <h4>Expert Teachers</h4>
              <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature">
            <i className="feature-icon fa fa-comments"></i>
            <div className="feature-content">
              <h4>Community</h4>
              <p>Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam nominati.</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
  );
  }
}

export default WhyUs;
