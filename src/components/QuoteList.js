import React from 'react'
import Quote from './Quote'
import { useQuery } from 'react-apollo'
import { useHistory } from 'react-router';
import gql from 'graphql-tag'
import { LINKS_PER_PAGE } from '../constants';
export const FEED_QUERY = gql`
  query FeedQuery(
    $take: Int
    $skip: Int
    $quoteOrderBy: QuoteOrderByInput
  ) {
    feed(take: $take, skip: $skip, quoteOrderBy: $quoteOrderBy) {
      id
      quotes{
        id
        description
        postedBy {
          id
          name
        }
      }
      count
    }
  }
`;

const getQuotesToRender = (data) => {
  return data.feed.quotes;
};

const getQueryVariables = (isNewPage, page) => {
  const skip = isNewPage ? (page - 1) * LINKS_PER_PAGE : 0;
  const take = isNewPage ? LINKS_PER_PAGE : 100;
  const orderBy = { createdAt: 'desc' };
  return { take, skip, orderBy };
};

const QuoteList = () => {
  const history = useHistory();
  const isNewPage = history.location.pathname.includes(
    'new'
  );
  const pageIndexParams = history.location.pathname.split(
    '/'
  );
  const page = parseInt(
    pageIndexParams[pageIndexParams.length - 1]
  );

  const pageIndex = page ? (page - 1) * LINKS_PER_PAGE : 0;

  const {
    data,
    loading,
    error,
  } = useQuery(FEED_QUERY, {
    variables: getQueryVariables(isNewPage, page)
  });


  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {data && (
        <>
          {getQuotesToRender(data).map(
            (quote, index) => (
              <Quote
                key={quote.id}
                quote={quote}
                index={index + pageIndex}
              />
            )
          )}
        </>
      )}
    </>
  );
};

export default QuoteList;