import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { PhotoCard } from '../components/PhotoCard';
import { Spinner } from '../sharedComponents/Spinner';

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <Spinner />;
  if (error) return <div>There was an error loading the image!</div>;

  const { photo = {} } = data;

  return <PhotoCard {...photo} />
};

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    { renderProp }
  </Query>
);
