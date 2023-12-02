const express = require('express');
const router = express.Router()
const session = require('express-session');
 
// Middleware to create a session
router.use(session({
    secret: 'mysecret', // change this to a secure secret in production
    resave: false,
    saveUninitialized: true,
}));

const cart = session.cart || [];

// @desc adding items to cart 
router.post('/', (req, res)=>{
    const { id, name, price, quantity, image, cloudName } = req.body;
    const index = cart.findIndex(item => item.id === id);
        
    if (index !== -1) {   
        cart[index].quantity += quantity;
    } else {
        cart.push({ id, name, price, quantity, image, cloudName });   
    };

    req.session.cart = cart;
    res.json({ cart: cart });   
}); 

// @desc decrement an item from cart
// @desc decrement an item from cart
router.put('/', (req, res) => {
    const { option, item } = req.body;
  
    if (option === 'minus') {
      const index = cart.findIndex((x) => item.id === x.id);
  
      if (index !== -1) {
        const updatedQuantity = --cart[index].quantity;
   
        if (updatedQuantity > 0) {
          res.json({ quantity: updatedQuantity });
        } else {
          cart.splice(index, 1); // Remove the item from the cart
          res.json({ quantity: 0, removed: true });
        }
      } else {
        res.status(404).json({ error: 'Item not found in cart' });
      }
    } else {
      res.status(400).json({ error: 'Invalid option' });
    }
  });  

module.exports = router;