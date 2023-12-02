const express = require('express');
const router = express.Router();
const Subscriber = require('../../models/subscribers');

router.post('/', async (req, res) => {
  const { subscribers } = req.body;

  try {
    const existingSubscriber = await Subscriber.findOne({ email: subscribers });

    if (existingSubscriber) {
        return res.send('Email address already subscribed');
    }else{
        const newSubscriber = new Subscriber({
            email: subscribers
        });
        await newSubscriber.save();
        res.send('Thank you for subscribing!');
    };
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
