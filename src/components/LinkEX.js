import React, { Component } from 'react'
class LinkEX extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
  <span className="yellow">{this.props.index + 1}.</span>
</div>

        <div className="ml1">
          <div>
          <a href={this.props.link.url} target="_blank" rel="noreferrer">{this.props.link.description}</a>
          </div>
          <div className="f6 lh-copy green">
              by{' '}
            {this.props.link.postedBy
              ? this.props.link.postedBy.name
              : 'Unknown'}{' '} | #
              {this.props.link.tag}{' '}
          </div>
        </div>
      </div>
    )
  }
  
}

export default LinkEX