const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 10,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  rating: {
    rate: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    count: {
      type: Number,
      required: true,
    },
  },
});

const product = mongoose.model("product", productSchema);

module.exports = product;
