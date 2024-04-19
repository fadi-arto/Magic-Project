const mongoose = require('mongoose');

const loadingLogSchema = new mongoose.Schema({
  moverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MagicMover',
    required: true
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MagicItem'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('LoadingLog', loadingLogSchema);
