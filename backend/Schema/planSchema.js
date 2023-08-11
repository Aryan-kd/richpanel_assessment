const mongoose = require('mongoose');

const planSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },

    Cycle: {
      type: String,
      require: true,
    },

    Price: {
      type: Number,
      require: true,
    },

    VideoQuality: {
      type: String,
      require: true,
    },

    Resolution: {
      type: String,
      require: true,
    },

    Devices: [],

    NumberOf: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Plan = mongoose.model('Plan', planSchema);
module.exports = Plan;
