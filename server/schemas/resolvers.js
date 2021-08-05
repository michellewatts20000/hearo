const { AuthenticationError } = require("apollo-server-express");
const { User, Place, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    placeReviews: async (parent, { placeId }) => {
      return Review.find({ place: placeId });
    },
    placeSearch: async (parent, { placeType, rating }) => {
      return Place.find({ placeType: placeType, rating: rating });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addPlace: async (
      parent,
      { placeName, placeLocation, placeType, rating, comment },
      context
    ) => {
      console.log("placeName", placeName);
      console.log("rating", rating);
      console.log("comment", comment);
      if (context.user) {
        let place = await Place.findOne({ placeName });
        console.log("place", place);
        if (!place) {
          place = await Place.create({
            placeName,
            placeLocation,
            placeType,
            user: context.user._id,
          });
        }
        const review = await Review.create({
          rating: rating,
          comment: comment,
          user: context.user._id,
          place: place._id,
        });
        return review;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  User: {
    place: async (parent) => {
      console.log("place", parent._id)
      return await Place.find({ user: parent._id });
    },
    review: async (parent) => {
      console.log("review", parent._id)
      return await Review.find({ user: parent._id });
    },
  },
  Place: {
    review: async (parent) => {
      return await Review.find({ place: parent._id });
    },
  },
  Reviews: {
    user: async (parent) => {
      return await User.findOne({ _id: parent.user });
    },
    place: async (parent) => {
      return await Place.findOne({ _id: parent.place });
    },
  },
};

module.exports = resolvers;
