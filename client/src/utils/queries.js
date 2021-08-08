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
        place {
          placeName
          placeLocation
          _id
        }
        comment
        rating
        createdAt
        _id
      }
    }
  }
`;

export const QUERY_REVIEWS = gql`
  query getReviews {
    reviews {
      _id
      comment
      rating
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
      createdAt
    }
  }
`;

export const QUERY_SEARCH = gql`
  query placeSearch($placeType: String, $rating: String) {
    placeSearch(placeType: $placeType, rating: $rating) {
      rating
      comment
      place {
        placeName
        placeLocation
        placeType
        _id
        review {
          rating
        }
      }
      user {
        username
        email
      }
    }
  }
`;
