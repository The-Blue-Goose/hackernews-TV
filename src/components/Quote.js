import React, { Component } from 'react'
class Quote extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
  <span className="black">{this.props.index + 1}.</span>
</div>

        <div className="ml1">
          <div>
          {this.props.quote.discription}
          </div>
        </div>
      </div>
    )
  }
  
}

export default Quote