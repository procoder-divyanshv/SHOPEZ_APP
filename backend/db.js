const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Make sure this name matches the .env (MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected for SHOPEZ");
  } catch (err) {
    console.error("❌ Connection Failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;