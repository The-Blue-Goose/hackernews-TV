import React from 'react'
import User from './User'
import { useQuery } from 'react-apollo'
import { useHistory } from 'react-router';
import gql from 'graphql-tag'
import { USERS_PER_PAGE } from '../constants';
export const FEED_QUERY = gql`
  query FeedQuery(
    $take: Int
    $skip: Int
    $userOrderBy: UserOrderByInput
  ) {
    feed(take: $take, skip: $skip, userOrderBy: $userOrderBy) {
      id
        users {
          id
          name
        }
    }
  }
`;

const getUsersToRender = (data) => {
  return data.feed.users;
};

const getQueryVariables = (isNewPage, page) => {
  const skip = isNewPage ? (page - 1) * USERS_PER_PAGE : 0;
  const take = isNewPage ? USERS_PER_PAGE : 100;
  const orderBy = { createdAt: 'desc' };
  return { take, skip, orderBy };
};

const UserList = () => {
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

  const pageIndex = page ? (page - 1) * USERS_PER_PAGE : 0;

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
          {getUsersToRender(data).map(
            (user, index) => (
              <User
                key={user.id}
                user={user}
                index={index + pageIndex}
              />
            )
          )}
        </>
      )}
    </>
  );
};

export default UserList;