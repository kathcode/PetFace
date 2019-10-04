import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';


/*
    Higher order component:
    A function that receive a component and return a
    component with injected improvements
    */

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID) {
  photos(categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`;
export const withPhotos = graphql(GET_PHOTOS);
