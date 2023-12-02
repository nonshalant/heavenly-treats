const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    customerRating: {
        type: Number,
        required: true
    },
    customerReview: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = Reviews = mongoose.model('reviews', reviewsSchema)