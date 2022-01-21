import React, { Component } from 'react'
import { timeDifferenceForDate } from '../utils'
class Quote extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center"><span className="gray">{this.props.index + 1}.</span></div>
        <div className="ml1"><div>{this.props.quote.description}</div>
        <div className="f6 lh-copy gray">
          by{' '}
          {this.props.quote.postedBy
            ? this.props.quote.postedBy.name
            : 'Unknown'}{' '}
          {timeDifferenceForDate(this.props.quote.createdAt)} 
        </div>
        </div>
      </div>
    )
  }
}

export default Quote