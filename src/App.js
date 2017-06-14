import React, { Component } from 'react';
import './App.css';
import BlogEntryPreview from './BlogEntryPreview.js'
import CbHeader from './CbHeader.js'
import CbSideBar from './CbSideBar.js'
import FullBlogEntry from './Home/FullBlogEntry.js'

import { Route } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      sidebarPanels: [
        "1",
        "2",
        "3"
      ],
      blogEntries: [
        ["5-25-17", "Day 1's entry is actually day 2.5-ish.  It's 10:23pm, Trane is crashed out on the lazyboy, and I am struggling around with bootstrap, script and cdn imports, learning webstorm (which seems awesome so far, I am already a fan of jetbrains' other offerings resharper and teamcity, and this IDE seems both nicely featured and lightweight).  No full-on short circuits yet, stoke is high.  Would I rather be making techno?"],
        ["5-27-17", "Saturday.  Noon.  Made some techno this morning.  Listening to techno now.  Sitting in class, headphones in, 'semantic' html and css really making sense of things for me.  Hanging out with this stuff really elevates my mood.  With semantic language and emmet I'm actually really enjoying this piece!  Should only get better with js next week.  For now though, need to spend my hours acclimating to all this markup...Oops, turns out I was calling the red pill the blue pill.  All sorted now, on with the journey!"],
        ["5-28-17", "A lovely sunday morning.  Coffee, a sleepy dog, sunlight pushing in through the venetian blinds in front of my big livingroom windows, and I spent the last 20 minutes struggling to get img/redPillBluePill.jpg to display as my jumbotron background.  After browsing syntax pages and 4 or 5 stack overflow questions for 'background wont display in jumbotron' I finally realized that my css is DOWN 1 level - /[project]/Resources - and so I have to navigate up and THEN down to imgages - ../Images/redPillBluePill.jpg - which would have been obvious except for the fact that my in this case overly-helpful ide, webstorm, was finding the file because it knows how to look for it in ways that css rules don't allow, so webstorm was displaying the file on mouseover...Moral of the story is know your tools and be aware of them?"],
      ["6-13-17", "After an aggressively good weekend in the desert, I am plugging back in to my brain and moving my dev blog from a basic html/css framework, to React.  There are quite a few pieces to this!  So far today I have lived off of demo code from class, and managed to rm -rf my old dev blog:/  Good thing I'm a big fan of frequent github checkins, so that all I lost is a journal entry from last week:)  state and props need quite a bit more review.  Things are moving along nicely though, I am full of hope for the end result of this boot camp."]
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <CbHeader/>
        <div className="row">
          <div className="col-9">
            <BlogEntryPreview blogEntryList={this.state.blogEntries}/>
            <Route path="/fullblogentry" component={FullBlogEntry} />
          </div>
          <div className="col-3">
            <CbSideBar CbSideBarPanels={this.state.sidebarPanels}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
