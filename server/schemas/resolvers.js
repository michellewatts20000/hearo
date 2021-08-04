const { AuthenticationError } = require("apollo-server-express");
const { User, Place, Review } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
      user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    users: async () => {
      return User.find();
    },  
     reviews: async () => {
      return Review.find();
    },
    myreviews: async (parent, { userId }) => {
  return Review.find({user: userId });
},
    review: async (parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId });
    },
     place: async (parent, { placeId }) => {
      return Place.findOne({ _id: placeId });
    },
    places: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Place.find(params).sort({ createdAt: -1 });
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
      console.log("placeName", placeName)
      console.log("rating", rating)
      console.log("comment", comment)
      if (context.user) {
        let place = await Place.findOne({ placeName });
        console.log("place", place)
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
  // User: {
  //   places: async (parent) => {
  //     return await Place.find({ user: parent._id });
  //   },
  //   reviews: async (parent) => {
  //     return await Review.find({ user: parent._id });
  //   }
  // },
  // Place: {
  //   reviews: async (parent) => {
  //     return await Review.find({ place: parent._id });
  //   }
  // },
  Reviews: {
    user: async (parent) => {
      return await User.findOne({ _id: parent.user });
    },
    place: async (parent) => {
      return await Place.findOne({ _id: parent.place });
    }
  }
};

module.exports = resolvers;
