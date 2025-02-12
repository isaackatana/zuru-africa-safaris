const mongoose = require('mongoose');

const safariSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A safari must have a name'],
    trim: true,
    maxlength: [100, 'Safari name must have less than 100 characters'],
    minlength: [10, 'Safari name must have at least 10 characters']
  },
  description: {
    type: String,
    required: [true, 'A safari must have a description'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  price: {
    type: Number,
    required: [true, 'A safari must have a price'],
    min: [1, 'Price must be at least $1']
  },
  duration: {
    type: Number,
    required: [true, 'Specify duration in days'],
    min: [1, 'Duration must be at least 1 day']
  },
  imageUrl: {
    type: String,
    required: [true, 'A safari must have a cover image'],
    match: [/^https?:\/\/.+\.(jpe?g|png|webp)$/i, 'Invalid image URL format']
  },
  locations: {
    type: [String],
    required: [true, 'Specify at least one location'],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'Provide at least one location'
    }
  },
  includedServices: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  difficulty: {
    type: String,
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty must be easy, medium, or difficult'
    },
    default: 'medium'
  }
});

// Indexes for better query performance
safariSchema.index({ price: 1, duration: 1 });

const Safari = mongoose.model('Safari', safariSchema);

module.exports = Safari;