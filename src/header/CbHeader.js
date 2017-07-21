import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'

class CbHeader extends Component {
  render () {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">cb's adventures in codeLand</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addblogpost">Add Post</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
            <NavItem>
              <NavLink className="nav-item" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/fullblogentry">Create Blog Entry</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
          </ul>
        </div>
      </nav>
    )
  }
}

export default CbHeader