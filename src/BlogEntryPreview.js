import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class BlogEntryPreview extends Component {
  render() {
    return (
      <div>
        {this.props.blogEntryList.map((blogEntry, idx) => {
          return (
            <div className="jumbotron" key={idx}>
              <h1>{blogEntry.date}</h1>
              <p>{blogEntry.post}</p>
              <NavLink to="/fullblogentry">fullblog</NavLink>
            </div>
          )
        })}
      </div>
    )
  }
}

BlogEntryPreview.propTypes = {
  blogEntryList: PropTypes.array.isRequired
}

export default BlogEntryPreview