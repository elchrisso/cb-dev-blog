import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class BlogEntryPreview extends Component {
  render() {
    return (
      <div>
        {this.props.blogEntryList.map((blogEntry) => {
          return (
            <div className="jumbotron">
              <h1>{blogEntry[0]}</h1>
              <p>{blogEntry[1]}</p>
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