import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';
import HeroAreaBlog from './HeroAreaBlog';
import BlogInPost from './BlogInPost';

class BlogPost extends Component {
  render() {
    return (
      <div >
        <Header />
        <HeroAreaBlog />
        <BlogInPost />
        <Footer />
        <Preloader />

      </div>
    );
  }
}

export default BlogPost;
