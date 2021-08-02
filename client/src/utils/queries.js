import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      places {
        _id
        placeName
        placeLocation
        createdAt
      }
    }
  }
`;

export const QUERY_PLACES = gql`
  query getPlaces {
    places {
      _id
      placeName
      placeLocation
      createdAt
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query getReviews {
    reviews {
      _id
      rating
      comment
      createdAt
    }
  }
`;

export const QUERY_SINGLE_PLACE = gql`
  query getSinglePlace($placeId: ID!) {
    place(placeId: $placeId) {
      _id
      placeName
      placeLocation
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
        placeName
        placeLocation
        createdAt
      }
    }
  }
`;
