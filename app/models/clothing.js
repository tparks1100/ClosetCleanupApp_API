const mongoose = require('mongoose')

const clothingSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  clothingDescription: {
    type: String,
    required: true
  },
  isWorn: {
    type: Boolean,
    required: false,
    default: false
  },
  // change to status
  // Add validation for database to only be able to add sell or donate
  status: {
    type: String,
    enum: ['Pending', 'Sell', 'Donate'],
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
})

// Virtual Attributes
//
// clothingSchema.virtual('statusChoice').get(function () {
//   return
// })

module.exports = mongoose.model('Clothing', clothingSchema)
