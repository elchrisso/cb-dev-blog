import React, { Component } from 'react';
import './App.css';
import BlogEntryPreview from './BlogEntryPreview.js'
import CbHeader from './CbHeader.js'
import CbSideBar from './CbSideBar.js'
import FullBlogEntry from './Home/FullBlogEntry.js'
import CreateBlogPost from './Home/CreateBlogPost.js'
import CbFooter from './CbFooter'

import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      sidebarPanels: [
        {
          title: "chris is a friend to the machines, though with some reticence."
        },
        {
          title: "useful Links",
          link1: "emmet for cheaters",
          link2: "html for cheaters",
          link3: "canvas"
        }
      ],
      blogEntries: [
        {
          date: "5-25-17",
          post: "Day 1's entry is actually day 2.5-ish.  It's 10:23pm, Trane is crashed out on the lazyboy, and I am struggling around with bootstrap, script and cdn imports, learning webstorm (which seems awesome so far, I am already a fan of jetbrains' other offerings resharper and teamcity, and this IDE seems both nicely featured and lightweight).  No full-on short circuits yet, stoke is high.  Would I rather be making techno?"
        },
        {
          date: "5-27-17",
          post: "Saturday.  Noon.  Made some techno this morning.  Listening to techno now.  Sitting in class, headphones in, 'semantic' html and css really making sense of things for me.  Hanging out with this stuff really elevates my mood.  With semantic language and emmet I'm actually really enjoying this piece!  Should only get better with js next week.  For now though, need to spend my hours acclimating to all this markup...Oops, turns out I was calling the red pill the blue pill.  All sorted now, on with the journey!"
        },
        {
          date: "5-28-17",
          post: "A lovely sunday morning.  Coffee, a sleepy dog, sunlight pushing in through the venetian blinds in front of my big livingroom windows, and I spent the last 20 minutes struggling to get img/redPillBluePill.jpg to display as my jumbotron background.  After browsing syntax pages and 4 or 5 stack overflow questions for 'background wont display in jumbotron' I finally realized that my css is DOWN 1 level - /[project]/Resources - and so I have to navigate up and THEN down to imgages - ../Images/redPillBluePill.jpg - which would have been obvious except for the fact that my in this case overly-helpful ide, webstorm, was finding the file because it knows how to look for it in ways that css rules don't allow, so webstorm was displaying the file on mouseover...Moral of the story is know your tools and be aware of them?"
        },
        {
          date: "6-13-17",
          post: "After an aggressively good weekend in the desert, I am plugging back in to my brain and moving my dev blog from a basic html/css framework, to React.  There are quite a few pieces to this!  So far today I have lived off of demo code from class, and managed to rm -rf my old dev blog:/  Good thing I'm a big fan of frequent github checkins, so that all I lost is a journal entry from last week:)  state and props need quite a bit more review.  Things are moving along nicely though, I am full of hope for the end result of this boot camp."
        },
        {
          date: "6-15-17",
          post: "6:30a.m., the morning after wednesday class and, incidentally, the day after my birthday as well!  I'm not quite 4 weeks deep on the bootcamp experience and am feeling an interesting combination of thoughts.  One is that this is without a doubt the most fluently I have used a large number of technical pieces to build something with code ,while another is that I am getting hopelessly lost in a sea of information and wondering whether I could find my way bck to a functional application on my own.  A real adventure!  We are essentially finished with React, for the purpose of this course at least, and will be moving on to Ajax on Saturday.  Also, a friend messaged me yesterday and said that she had actually gone through the boot camp process rather than university.  I really am enjoying this stuff, and have a real thought that I may want to transition to more of a coding role in the future.  It could be as simple as employing what I'm learning at camp, in my current, much more technical QA role.  But the temptation to build cool things and make more money looks like it will be a real thing."
        },
        {
          date: "6-17-17",
          post: "8a.m. Sunday morning.  My brain freaked out in class yesterday morning, presumably because of the combination of overwhelm from the week and our ajax discussion, just tunnel visioned and a seeming total rejection of any help offered, I felt pretty cognitively helpless.  I was going to go home and keep working on comprehension of the pattern but Aric flatly said no more today.  So, I instead hung out with Trane, who is doing well, switched the wheels out on my board and ollied around in the driveway for a while, and went to Tom Adamson's for bbq and beers until about midnight.  I got up this morning feeling like I'd definitely had beers and bbq the night before, After just a few minutes of coffee juped back into the ajax project, and total clarity!  Really happy about this.  I think I'm pushing through the information about as fast as I can, and I think I will come to a place where I can fully support a basic web app on my own.  Technical learning is such a weirdly emotional process for me."
        },
        {
          date: "6-20-17",
          time: "0749 hours",
          post: "A beautiful Tuesday morning!  The sun streaming in through my open front door and the big windows on my left, while I lean back on my couch , heating pad on my funky shoulder, mexican world techno on the pa and I'm attempting to get up the proper mindset to jump into reduxing this site.  I've sliced the blog post strings, now to create a piece of state that handles whether that slice is in effect, and attach it to a button.  We did redux last night in class and it was kinda mindbending, but I managed to stay pretty sane, push doubts to the back of my head and let them run while I focused on the lesson on the board.  Anyways here I go, though it's nearly time for werk.  Maybe a followup to this later in the day..."
        }
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
            <Route exact path="/createblogpost" component={CreateBlogPost} />
          </div>
          <div className="col-3">
            <CbSideBar CbSideBarPanels={this.state.sidebarPanels}/>
          </div>
        </div>
        <CbFooter/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogPost: state.blogPost.data
  }
}

export default connect(mapStateToProps)(App);
