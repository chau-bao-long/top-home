import React, { Component } from 'react'

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>Ops! There is no content at:
        <br/>
        <br/>
        {this.props.location.pathname}</h2>
      </div>
    )
  }
}
