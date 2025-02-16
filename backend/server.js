const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config();
const cors = require('cors');

const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI || 'mongodb+srv://mrisaackatana:Iyez8cyhuBFFXCaf@zuruafricasafaris.w0zr6.mongodb.net/?retryWrites=true&w=majority&appName=ZuruAfricaSafaris'

const authRoutes = require('./routes/auth');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.use('/api/auth', authRoutes);

// Database
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to the database'))
.catch((err) => console.error('Failed to connect to the database:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));