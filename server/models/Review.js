const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewSchema = new Schema({
  rating: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  place:
  {
    type: Schema.Types.ObjectId,
    ref: 'Place',
  },
  user:
  {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Review = model('Review', reviewSchema);

module.exports = Review;
