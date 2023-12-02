const express = require('express');
const router = express.Router()
const Reviews = require('../../models/reviews');

router.post('/', async(req, res)=>{
    const {fullName, customerRating, customerReview, productName} = req.body;

    clientReview = new Reviews({fullName, customerRating, customerReview, productName});

    try {
        await clientReview.save();
        res.status(201).json(clientReview); 
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router
