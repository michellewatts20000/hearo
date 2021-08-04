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
      review {
        comment
        rating
        _id
      }
      place {
        placeName
        placeLocation
        placeType
      }
    }
  }
`;

export const QUERY_PLACES = gql`
  query getPlaces {
    allPlaces2 {
      _id
      placeName
      placeType
      placeLocation
      createdAt
      review {
        rating
        comment
        createdAt
      }
    }
  }
`;

export const QUERY_SEARCH = gql`
  query search($placeType: String!, $rating: String!) {
    placeSearch(placeType: $placeType, rating: $rating) {
      placeName
      placeLocation
      _id
    }
  }
`;

// export const QUERY_PLACE_BY_USER = gql`
//   query search($placeId: ID!) {
//     myPlacebyUser(placeId: $placeId) {
//       username
//     }
//   }
// `;
