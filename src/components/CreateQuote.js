import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { FEED_QUERY } from './QuoteList'
import { LINKS_PER_PAGE } from '../constants'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!) {
    postQuote(description: $description) {
      id
      createdAt
      description
    }
  }
`
class CreateQuote extends Component {
  state = {
    description: '',
  }

  render() {
    const { description} = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="Quote"
          />
        </div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description }}
          onCompleted={() => this.props.history.push('/QuoteList')}
          update={(store, { data: { postQuote } }) => {
            const first = LINKS_PER_PAGE
            const skip = 0
            const orderBy = 'createdAt_DESC'
            const data = store.readQuery({
              query: FEED_QUERY,
              variables: { first, skip, orderBy }
            })
            data.feed.quote.unshift(postQuote)
            store.writeQuery({
              query: FEED_QUERY,
              data,
              variables: { first, skip, orderBy }
            })
          }}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateQuote