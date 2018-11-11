import React, { Component } from 'react';
import { HashRouter   as  Router, Link } from "react-router-dom";


class BlogBlog extends Component {
  render() {
    return (
      <div id="blog" className="section">

			<div className="container">

				<div className="row">

					<div id="main" className="col-md-9">

            <Router>
						<div className="row">
							<div className="col-md-6">
								<div className="single-blog">
									<div className="blog-img">
                  <Link to="/blog-post"><img src={require('../img/blog01.jpg')} alt="" /></Link>
									</div>
									<h4><a href="blog-post.html">Pro eu error molestie deserunt. At per viderer bonorum persecuti.</a></h4>
									<div className="blog-meta">
										<span className="blog-meta-author">By: <a href="#">John Doe</a></span>
										<div className="pull-right">
											<span>18 Oct, 2017</span>
											<span className="blog-meta-comments"></span>
										</div>
									</div>
								</div>
							</div>
              
							<div className="col-md-6">
								<div className="single-blog">
									<div className="blog-img">
									<Link to="/blog-post"><img src={require('../img/blog02.jpg')} alt="" /></Link>
									</div>
									<h4><a href="blog-post.html">Pro eu error molestie deserunt. At per viderer bonorum persecuti.</a></h4>
									<div className="blog-meta">
										<span className="blog-meta-author">By: <a href="#">John Doe</a></span>
										<div className="pull-right">
											<span>18 Oct, 2017</span>
											<span className="blog-meta-comments"></span>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6">
								<div className="single-blog">
									<div className="blog-img">
									<Link to="/blog-post"><img src={require('../img/blog03.jpg')} alt="" /></Link>
									</div>
									<h4><a href="blog-post.html">Pro eu error molestie deserunt. At per viderer bonorum persecuti.</a></h4>
									<div className="blog-meta">
										<span className="blog-meta-author">By: <a href="#">John Doe</a></span>
										<div className="pull-right">
											<span>18 Oct, 2017</span>
											<span className="blog-meta-comments"></span>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6">
								<div className="single-blog">
									<div className="blog-img">
									<Link to="/blog-post"><img src={require('../img/blog04.jpg')} alt="" /></Link>
									</div>
									<h4><a href="blog-post.html">Pro eu error molestie deserunt. At per viderer bonorum persecuti.</a></h4>
									<div className="blog-meta">
										<span className="blog-meta-author">By: <a href="#">John Doe</a></span>
										<div className="pull-right">
											<span>18 Oct, 2017</span>
											<span className="blog-meta-comments"></span>
										</div>
									</div>
								</div>
							</div>

						</div>
						</Router>
						<div className="row">

							<div className="col-md-12">
								<div className="post-pagination">
									<a href="#" className="pagination-back pull-left">Back</a>
									<ul className="pages">
										<li className="active">1</li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
									</ul>
									<a href="#" className="pagination-next pull-right">Next</a>
								</div>
							</div>

						</div>
					</div>

					<div id="aside" className="col-md-3">

						<div className="widget search-widget">
							<form>
								<input className="input" type="text" name="search" />
								<button><i className="fa fa-search"></i></button>
							</form>
						</div>

						<div className="widget category-widget">
							<h3>Categories</h3>
							<a className="category" href="#">Web <span>12</span></a>
							<a className="category" href="#">Css <span>5</span></a>
							<a className="category" href="#">Wordpress <span>24</span></a>
							<a className="category" href="#">Html <span>78</span></a>
							<a className="category" href="#">Business <span>36</span></a>
						</div>

					</div>

				</div>

			</div>

		</div>
    );
  }
}

export default BlogBlog;

