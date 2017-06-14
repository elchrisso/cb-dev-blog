import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CbSideBar extends Component {
  render () {
    return (
      <div>
        {this.props.CbSideBarPanels.map((sideBarPanel) => {
          return (
            <div className="jumbotron">{sideBarPanel[0]}</div>
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