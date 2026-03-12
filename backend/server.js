require('dotenv').config(); // THIS MUST BE LINE 1
console.log("Check if URI exists:", process.env.MONGO_URI ? "Yes" : "No, still undefined");
const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js'); // Assuming your DB logic is here
const Product = require('./models/Product');
const app = express();
app.use(cors());
app.use(express.json());

// Call the connection function after dotenv is loaded
connectDB(); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/shopez/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
});