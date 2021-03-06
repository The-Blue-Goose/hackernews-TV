import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Haquer News</div>
          <Link to="/" className="ml1 no-underline black">
            new
          </Link>
          <div className="ml1">|</div>
          <Link to="/top" className="ml1 no-underline black">
            top
          </Link>
          <div className="ml1">|</div>
          <Link to="/UserList" className="ml1 no-underline black">
            users
          </Link>
          <div className="ml1">|</div>
          <Link to="/QuoteList" className="ml1 no-underline black">
            quotes
          </Link>
          <div className="ml1">|</div>
          <Link to="/PicList" className="ml1 no-underline black">
            Pics
          </Link>
          <div className="ml1">|</div>
          <Link to="/search" className="ml1 no-underline black">
            search
          </Link>
          {authToken && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link to="/create" className="ml1 no-underline black">
                submit link
              </Link>
              <div className="ml1">|</div>
              <Link to="/createQuote" className="ml1 no-underline black">
                submit Quote
              </Link>
              <div className="ml1">|</div>
              <Link to="/createPic" className="ml1 no-underline black">
                submit Pic
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)