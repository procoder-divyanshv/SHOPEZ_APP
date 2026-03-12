const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: Number,
  originalPrice: Number,
  rating: Number,
  reviews: Number,
  brand: String,
  inStock: Boolean,
  emoji: String,
  color: String,
  badge: String
});

module.exports = mongoose.model('Product', productSchema);