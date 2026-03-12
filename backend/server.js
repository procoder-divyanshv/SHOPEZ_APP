require('dotenv').config(); 
console.log("Check if URI exists:", process.env.MONGO_URI ? "Yes" : "No, still undefined");
const express = require('express');
const cors = require('cors');
const connectDB = require('./db.js'); 
const Product = require('./models/Product');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const app = express();
app.use(cors());
app.use(express.json());


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



app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) { 
      return res.status(401).json({ message: "Invalid credentials" });
    }

    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
    
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});