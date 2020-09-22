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
  todaysDate: {
    type: Date,
    required: true
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

clothingSchema.virtual('isOld').get(function () {
  const createdDate = new Date(this.todaysDate)
  const presentDate = new Date(Date.now())
  const diffInTime = presentDate.getTime() - createdDate.getTime()
  const diffInDays = diffInTime / (1000 * 3600 * 24)
  if (Math.abs(diffInDays) < 30) {
    return false
  } else {
    return true
  }
})

module.exports = mongoose.model('Clothing', clothingSchema)
