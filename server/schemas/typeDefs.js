const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    place: [Place]
    review: [Reviews]
  }

  type Place {
    _id: ID
    placeName: String
    placeType: String
    placeLocation: String
    createdAt: String
    user: User!
    review: [Reviews]
  }

  type Reviews {
  _id: ID
  rating: String
  comment: String
  createdAt: String
  place: Place
  user: User!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
  me: User
  placeReviews(placeId: ID!): [Reviews]
  placeSearch(placeType: String, rating: String): [Place]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPlace(placeName: String!, placeLocation: String, placeType: String, rating:String, comment:String ): Reviews
  }
`;

module.exports = typeDefs;
