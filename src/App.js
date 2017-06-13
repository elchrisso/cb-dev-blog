import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogEntryPreview from './BlogEntryPreview.js'
import CbHeader from './CbHeader.js'
import CbSideBar from './CbSideBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CbHeader/>
        <div className="row">
          <div className="col-9">
            <BlogEntryPreview/>
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
