const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Place {
    _id: ID
    placeName: String
    placeType: String
    placeLocation: String
    createdAt: String
    user: User!
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
    users(placeName: String): [User]
    user(username: String!): User
    places(username: String): [Place]
    place(placeId: ID!): Place
    reviews: [Reviews]
    myreviews(user: ID!): [Reviews]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPlace(placeName: String!, placeLocation: String, placeType: String, rating:String, comment:String ): Reviews
  }
`;

module.exports = typeDefs;
