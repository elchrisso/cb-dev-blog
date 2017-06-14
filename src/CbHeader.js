import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class CbHeader extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <p className="nav-text">chris's adventures in codeland</p>
              <NavLink to="/">Home</NavLink>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default CbHeader