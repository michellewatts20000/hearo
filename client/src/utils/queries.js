import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      place {
        placeName
        placeLocation
        placeType
      }
      review {
        comment
        rating
        _id
      }
    }
  }
`;

export const QUERY_PLACE_REVIEWS = gql`
  query placeReviews($placeId: ID!) {
    placeReviews(placeId: $placeId) {
      place {
        _id
        placeName
        placeLocation
        placeType
      }
      user {
        _id
        username
        email
      }
      _id
      comment
      rating
    }
  }
`;

export const QUERY_SEARCH = gql`
  query placesearch($placeType: String!, $rating: String!) {
    placeSearch(placeType: $placeType, rating: $rating) {
      placeName
      placeLocation
      _id
    }
  }
`;
