import React, { Component } from 'react';
import './App.css';
import BlogEntryPreview from './BlogEntryPreview.js'
import CbHeader from './CbHeader.js'
import CbSideBar from './CbSideBar.js'
import FullBlogEntry from './Home/FullBlogEntry.js'

import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CbHeader/>
        <div className="row">
          <div className="col-9">
            <BlogEntryPreview/>
            <Route path="/fullblogentry" component={FullBlogEntry} />
          </div>
          <div className="col-3">
            <CbSideBar/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
