import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      places {
          _id
      placeAuthor
      placeName
      placeLocation
      placeRating
      placeComment
      createdAt
      }
    }
  }
`;

export const QUERY_PLACES = gql`
  query getPlaces {
    places {
      _id
      placeAuthor
      placeName
      placeLocation
      placeRating
      placeComment
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PLACE = gql`
  query getSinglePlace($placeId: ID!) {
    place(placeId: $placeId) {
       _id
      placeAuthor
      placeName
      placeLocation
      placeRating
      placeComment
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      places {
         _id
      placeAuthor
      placeName
      placeLocation
      placeRating
      placeComment
      createdAt
      }
    }
  }
`;
