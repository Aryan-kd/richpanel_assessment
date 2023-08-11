const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    planId: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Plan',
      default: null,
    },
    planStatus: {
      type: Boolean,
      require: true,
      default: false,
    },
    planPurchase: {
      type: Date,
      require: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
