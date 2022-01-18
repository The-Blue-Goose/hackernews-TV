import React, { Component } from 'react'
class Quote extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center"><span className="gray">{this.props.index + 1}.</span></div>
        <div className="ml1">{this.props.quote.description}</div>
      </div>
    )
  }
}

export default Quote