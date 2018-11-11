import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";

import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// var hashHistory = ReactRouter.BrowserHistory;

ReactDOM.render(
  <Router >
    <div>
        <Route exact path="/" component={App} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-post" component={BlogPost} />
    </div>

</Router>
, document.getElementById('root'));


serviceWorker.unregister();
