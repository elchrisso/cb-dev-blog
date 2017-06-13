import React, { Component } from 'react'

class CbHeader extends Component {
  render () {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                <p className="nav-text">chris's adventures in codeland</p>
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default CbHeader