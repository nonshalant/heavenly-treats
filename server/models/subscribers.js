const mongoose = require('mongoose');

const subscribersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Subscribers = mongoose.model('subscribers', subscribersSchema);