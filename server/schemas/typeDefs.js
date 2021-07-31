const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    places: [Place]!
  }

  type Place {
    _id: ID
    placeAuthor: String
    placeName: String
    placeType: String
    placeLocation: String
    placeRating: String
    placeComment: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    places(username: String): [Place]
    place(placeId: ID!): Place
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPlace(placeName: String!, placeLocation: String, placeComment: String, placeRating: String, placeType: String ): Place
  }
`;

module.exports = typeDefs;
