import React, { Component } from 'react';
import Header from './Header';
import HeroArea from './HeroArea';
import Footer from './Footer';
import Preloader from './Preloader';
import BlogBlog from './BlogBlog';

class Blog extends Component {
  render() {
    return (
      <div >
        <Header />
        <HeroArea />
        <BlogBlog />
        <Footer />
        <Preloader />
      </div>
    );
  }
}

export default Blog;
