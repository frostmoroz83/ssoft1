import React, { Component } from 'react';




class Courses extends Component {
  render() {
    return (
      <div id="courses" className="section">

			
			<div className="container">

				
				<div className="row">
					<div className="section-header text-center">
						<h2>Explore Courses</h2>
						<p className="lead">Libris vivendo eloquentiam ex ius, nec id splendide abhorreant.</p>
					</div>
				</div>
				

				
				<div id="courses-wrapper">

					
					<div className="row">

						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="course">
								<a href="#" className="course-img">
									<img src={require('../img/course01.jpg')} alt="" />
									<i className="course-link-icon fa fa-link"></i>
								</a>
								<a className="course-title" href="#">Beginner to Pro in Excel: Financial Modeling and Valuation</a>
								<div className="course-details">
									<span className="course-category">Business</span>
									<span className="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						

						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="course">
								<a href="#" className="course-img">
									<img src={require('../img/course02.jpg')} alt="" />
									<i className="course-link-icon fa fa-link"></i>
								</a>
								<a className="course-title" href="#">Introduction to CSS </a>
								<div className="course-details">
									<span className="course-category">Web Design</span>
									<span className="course-price course-premium">Premium</span>
								</div>
							</div>
						</div>
						

						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="course">
								<a href="#" className="course-img">
									<img src={require('../img/course03.jpg')} alt="" />
									<i className="course-link-icon fa fa-link"></i>
								</a>
								<a className="course-title" href="#">The Ultimate Drawing Course | From Beginner To Advanced</a>
								<div className="course-details">
									<span className="course-category">Drawing</span>
									<span className="course-price course-premium">Premium</span>
								</div>
							</div>
						</div>
						

						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="course">
								<a href="#" className="course-img">
									<img src={require('../img/course04.jpg')} alt="" />
									<i className="course-link-icon fa fa-link"></i>
								</a>
								<a className="course-title" href="#">The Complete Web Development Course</a>
								<div className="course-details">
									<span className="course-category">Web Development</span>
									<span className="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						
					</div>
					

					
					<div className="row">

						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="course">
								<a href="#" className="course-img">
									<img src={require('../img/course05.jpg')} alt="" />
									<i className="course-link-icon fa fa-link"></i>
								</a>
								<a className="course-title" href="#">PHP Tips, Tricks, and Techniques</a>
								<div className="course-details">
									<span className="course-category">Web Development</span>
									<span className="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						

						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="course">
								<a href="#" className="course-img">
									<img src={require('../img/course06.jpg')} alt="" />
									<i className="course-link-icon fa fa-link"></i>
								</a>
								<a className="course-title" href="#">All You Need To Know About Web Design</a>
								<div className="course-details">
									<span className="course-category">Web Design</span>
									<span className="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						

						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="course">
								<a href="#" className="course-img">
									<img src={require('../img/course07.jpg')} alt="" />
									<i className="course-link-icon fa fa-link"></i>
								</a>
								<a className="course-title" href="#">How to Get Started in Photography</a>
								<div className="course-details">
									<span className="course-category">Photography</span>
									<span className="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						


						
						<div className="col-md-3 col-sm-6 col-xs-6">
							<div className="course">
								<a href="#" className="course-img">
									<img src={require('../img/course08.jpg')} alt="" />
									<i className="course-link-icon fa fa-link"></i>
								</a>
								<a className="course-title" href="#">Typography From A to Z</a>
								<div className="course-details">
									<span className="course-category">Typography</span>
									<span className="course-price course-free">Free</span>
								</div>
							</div>
						</div>
						

					</div>
					

				</div>
				

				<div className="row">
					<div className="center-btn">
						<a className="main-button icon-button" href="#">More Courses</a>
					</div>
				</div>

			</div>
			

		</div>
    );
  }
}

export default Courses;
