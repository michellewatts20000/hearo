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

export const QUERY_PLACE_REVIEWS = gql`
  query placeReviews($placeId: ID!) {
    placeReviews(placeId: $placeId) {
      place {
        _id
        placeName
        placeLocation
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

export const QUERY_MY_REVIEWS = gql`
  query myReviews($userId: ID!) {
    myreviews(userId: $userId) {
      _id
      comment
      rating
      place {
        _id
        placeName
        placeLocation
      }
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
