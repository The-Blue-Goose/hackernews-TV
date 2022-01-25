import React, { Component } from 'react'
class Pic extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
  <span className="gray">{this.props.index + 1}.</span>
</div>
        <div className="ml1">
        <div><img src={this.props.pic.url} alt={this.props.pic.description} width="500" height="~"/></div>
          <div>
          <a href={this.props.pic.url} target="_blank" rel="noreferrer">{this.props.pic.description}</a>
          </div>
          <div className="f6 lh-copy gray">
              by{' '}
            {this.props.pic.postedBy
              ? this.props.pic.postedBy.name
              : 'Unknown'}{' '} | #
              {this.props.pic.tag}{' '}
          </div>
        </div>
      </div>
    )
  }
  
}

export default Pic