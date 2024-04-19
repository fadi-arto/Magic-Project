const mongoose = require('mongoose');

const magicMoverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  weightLimit: {
    type: Number,
    required: true
  },
  energy: {
    type: Number,
    required: true
  },
  questState: {
    type: String,
    enum: ['resting', 'loading', 'on a mission', 'done'],
    default: 'resting'
  }
});

const MagicMover = mongoose.model('MagicMover', magicMoverSchema);

module.exports = MagicMover;
