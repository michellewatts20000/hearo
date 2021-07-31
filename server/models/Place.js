const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const placeSchema = new Schema({
  placeAuthor: {
    type: String,
    required: true,
    trim: true,
  },
    placeName: {
    type: String,
    required: 'You need to put a place name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  placeLocation: {
    type: String,
    required: true,
    trim: true,
  },
   placeRating: {
    type: Number,
  },
   placeComment: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Place = model('Place', placeSchema);

module.exports = Place;
