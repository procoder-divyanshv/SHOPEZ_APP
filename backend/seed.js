require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const ALL_PRODUCTS = [
  { 
    name: 'Wireless Noise-Cancelling Headphones Pro', 
    category: 'Electronics', 
    price: 129.99, 
    originalPrice: 189.99, 
    rating: 4.8, 
    reviews: 2341, 
    brand: 'SoundCore', 
    inStock: true, 
    emoji: '🎧', 
    color: '#e8f4fd', 
    badge: 'Best Seller' 
  },
  { 
    name: 'Minimalist Leather Watch', 
    category: 'Fashion', 
    price: 89.99, 
    originalPrice: null, 
    rating: 4.6, 
    reviews: 876, 
    brand: 'Timeless', 
    inStock: true, 
    emoji: '⌚', 
    color: '#fdf3e8', 
    badge: 'New' 
  }
  // Copy-paste the rest of your products from your JSX here, 
  // ensuring the text is wrapped in 'single quotes'.
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({}); // Clears existing products to avoid duplicates
    await Product.insertMany(ALL_PRODUCTS);
    console.log("✅ SHOPEZ Products Seeded Successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();