import React, { Component } from 'react'
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Login from './Login'
import Search from './Search'
import UserList from './UserList'
import QuoteList from './QuoteList'
import PicList from './PicList'
import CreateQuote from './CreateQuote'
import CreatePic from './CreatePic'

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/new/1' />} />
            <Route exact path='/create' component={CreateLink} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/top' component={LinkList} />
            <Route exact path='/UserList' component={UserList} />
            <Route exact path='/QuoteList' component={QuoteList} />
            <Route exact path='/picList' component={PicList} />
            <Route exact path='/createQuote' component={CreateQuote} />
            <Route exact path='/createPic' component={CreatePic} />
            <Route exact path='/new/:page' component={LinkList} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App