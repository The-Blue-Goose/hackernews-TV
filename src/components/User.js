import React, { Component } from 'react'
class User extends Component {
  render() {
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
  <span className="black">{this.props.index + 1}.</span>
</div>

        <div className="ml1">
          <div>
          {this.props.user.name}
          </div>
          <div className="f6 lh-copy green">
              by{' '}
            {this.props.user.email}{' '}
          </div>
        </div>
      </div>
    )
  }
  
}

export default User