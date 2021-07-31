import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_PLACE = gql`
//  mutation addPlace($placeName:String!, $placeLocation:String!, $placeComment:String!, $placeRating:String!, $placeType:String!) {
//     addPlace(placeName: $placeName, placeLocation: $placeLocation, placeComment: $placeComment ,placeRating: $placeRating, placeType: $placeType) {
//       _id
//       placeName
//       placeAuthor
//     placeLocation
//     placeType
//     placeRating
//     placeComment
//       createdAt,
//     }
//   }
// `;

export const ADD_PLACE = gql`
 mutation addPlace($placeName:String!) {
    addPlace(placeName: $placeName) {

      placeName
 
   
    }
  }
`;

