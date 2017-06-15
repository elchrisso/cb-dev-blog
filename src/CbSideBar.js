import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CbSideBar extends Component {
  render () {
    return (
      <div>
        {this.props.CbSideBarPanels.map((sideBarPanel, idx) => {
          return (
                <div className="jumbotron" key={idx}>{sideBarPanel.title}</div>
              )
        })}
      </div>
    )
  }
}

CbSideBar.propTypes = {
  CbSideBarPanels: PropTypes.array.isRequired
}

export default CbSideBar