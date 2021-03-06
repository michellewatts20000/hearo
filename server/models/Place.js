const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const placeSchema = new Schema({
    placeName: {
    type: String,
    required: 'You need to put a place name!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
    placeType: {
    type: String,
    required: true,
    trim: true,
  },
  placeLocation: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  user:
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
});

const Place = model('Place', placeSchema);

module.exports = Place;
