import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import { PhotoCard } from '../PhotoCard';

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId,
      src
      likes
      userId
      liked
    }
  }
`); /*
    Higher order component:
    A function that receive a component and return a
    component with injected improvements
    */

const ListOfPhotoCardsComponent = (props) => {
  const { data } = props;
  return (
    <>
      {!data.loading && (
        <ul>
          {data.photos && data.photos.map((photo) => (
            <PhotoCard key={photo.id} likeId={photo.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
