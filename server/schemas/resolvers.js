const { AuthenticationError } = require('apollo-server-express');
const { User, Place } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('places');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('places');
    },
    places: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Place.find(params).sort({ createdAt: -1 });
    },
    place: async (parent, { placeId }) => {
      return Place.findOne({ _id: placeId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('places');
      }
      throw new AuthenticationError('You need to be logged in!');
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
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPlace: async (parent, { placeName, placeLocation, placeRating }, context) => {
      if (context.user) {
        const place = await Place.create({
          placeName,
          placeLocation,
          placeRating,
          placeComment: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { places: place._id } }
        );

        return place;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
   

    removePlace: async (parent, { placeId }, context) => {
      if (context.user) {
        const place = await Place.findOneAndDelete({
          _id: placeId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { places: place._id } }
        );

        return place;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
  },
};

module.exports = resolvers;
